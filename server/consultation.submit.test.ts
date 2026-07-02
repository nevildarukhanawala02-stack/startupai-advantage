import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("consultation.submit", () => {
  it("accepts valid consultation request with all fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.consultation.submit({
      name: "John Doe",
      email: "john@example.com",
      company: "Example Corp",
      phone: "+91 98765 43210",
      companySize: "₹50-100 Cr",
      industry: "Manufacturing",
      message: "Looking to improve operational efficiency",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts minimal valid consultation request", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.consultation.submit({
      name: "Jane Smith",
      email: "jane@company.com",
      company: "Tech Startup",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects consultation request with missing name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.consultation.submit({
        name: "",
        email: "test@example.com",
        company: "Test Company",
      })
    ).rejects.toThrow();
  });

  it("rejects consultation request with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.consultation.submit({
        name: "Test User",
        email: "invalid-email",
        company: "Test Company",
      })
    ).rejects.toThrow();
  });

  it("rejects consultation request with missing company", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.consultation.submit({
        name: "Test User",
        email: "test@example.com",
        company: "",
      })
    ).rejects.toThrow();
  });
});

describe("contact.submit", () => {
  it("accepts valid contact form submission", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Alice Johnson",
      email: "alice@example.com",
      subject: "Partnership Inquiry",
      message: "I would like to discuss a potential partnership.",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts contact submission without subject", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Bob Williams",
      email: "bob@example.com",
      message: "Just wanted to say hello!",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects contact submission with missing message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        message: "",
      })
    ).rejects.toThrow();
  });

  it("rejects contact submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "not-an-email",
        message: "Test message",
      })
    ).rejects.toThrow();
  });
});
