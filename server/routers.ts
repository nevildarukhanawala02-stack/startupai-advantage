import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure, adminProcedure } from "./_core/trpc";
import { z } from "zod";
import { createConsultationRequest, getAllConsultationRequests, createContactSubmission, getAllContactSubmissions, createLead, getLeadByEmail, getAllLeads, getAllBlogPosts, getBlogPostBySlug, getRelatedBlogPosts, trackEvent, getKpiDashboard } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  consultation: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          company: z.string().min(1, "Company name is required"),
          phone: z.string().optional(),
          companySize: z.string().optional(),
          industry: z.string().optional(),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const result = await createConsultationRequest(input);
        
        // Notify owner of new consultation request
        await notifyOwner({
          title: "New Consultation Request",
          content: `New consultation request from ${input.name} (${input.company})\n\nEmail: ${input.email}\nPhone: ${input.phone || "Not provided"}\nCompany Size: ${input.companySize || "Not provided"}\nIndustry: ${input.industry || "Not provided"}\n\nMessage:\n${input.message || "No message provided"}`,
        });
        
        return { success: true };
      }),
    list: protectedProcedure.query(async () => {
      return await getAllConsultationRequests();
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          subject: z.string().optional(),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        const result = await createContactSubmission(input);
        
        // Notify owner of new contact submission
        await notifyOwner({
          title: "New Contact Form Submission",
          content: `New contact form submission from ${input.name}\n\nEmail: ${input.email}\nSubject: ${input.subject || "No subject"}\n\nMessage:\n${input.message}`,
        });
        
        return { success: true };
      }),
    list: protectedProcedure.query(async () => {
      return await getAllContactSubmissions();
    }),
  }),

  resources: router({
    downloadGuide: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
        })
      )
      .mutation(async ({ input }) => {
        // Check if email already exists
        const existingLead = await getLeadByEmail(input.email);
        
        // Only create new lead if email doesn't exist
        if (!existingLead) {
          await createLead({
            name: input.name,
            email: input.email,
            source: "lead_magnet",
            resourceDownloaded: "Startup AI Advantage Lead Magnet Guide",
          });
          
          // Notify owner of new lead
          await notifyOwner({
            title: "New Lead Captured",
            content: `New lead from Resources page:\n\nName: ${input.name}\nEmail: ${input.email}\nResource: Startup AI Advantage Lead Magnet Guide`,
          });
        }
        
        // Return PDF URL for download
        return { 
          success: true,
          pdfUrl: "/files/saa-guide.pdf"
        };
      }),
  }),

  blog: router({
    list: publicProcedure.query(async () => {
      return await getAllBlogPosts();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await getBlogPostBySlug(input.slug);
      }),
    related: publicProcedure
      .input(z.object({ slug: z.string(), series: z.string().nullable() }))
      .query(async ({ input }) => {
        return await getRelatedBlogPosts(input.slug, input.series);
      }),
  }),

  admin: router({
    getLeads: protectedProcedure.query(async ({ ctx }) => {
      // Check if user is admin
      if (ctx.user?.role !== 'admin') {
        throw new Error("Unauthorized: Admin access required");
      }
      return await getAllLeads();
    }),
  }),

  analytics: router({
    // Public, fire-and-forget event tracking. Never surfaces errors to the caller.
    track: publicProcedure
      .input(
        z.object({
          sessionId: z.string().min(1),
          eventType: z.string().min(1),
          entityId: z.number().optional(),
          entityType: z.string().optional(),
          pagePath: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        trackEvent(input).catch(() => {});
        return { success: true };
      }),
    dashboard: adminProcedure
      .input(z.object({ period: z.enum(["week", "month"]) }))
      .query(async ({ input }) => {
        return await getKpiDashboard(input.period);
      }),
  }),
});

export type AppRouter = typeof appRouter;
