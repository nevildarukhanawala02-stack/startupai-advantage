import { Resend } from "resend";

export type NotificationPayload = {
  title: string;
  content: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "nevildarukhanawala02@gmail.com";

export async function notifyOwner(payload: NotificationPayload): Promise<boolean> {
  // Also log to console for debugging
  console.log(`[Notification] ${payload.title}\n${payload.content}`);

  try {
    const { error } = await resend.emails.send({
      from: "StartupAI Advantage <onboarding@resend.dev>",
      to: ADMIN_EMAIL,
      subject: payload.title,
      text: payload.content,
    });

    if (error) {
      console.error("[Notification] Resend error:", error);
      return false;
    }

    console.log("[Notification] Email sent successfully to", ADMIN_EMAIL);
    return true;
  } catch (err) {
    console.error("[Notification] Failed to send email:", err);
    return false;
  }
}
