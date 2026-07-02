export type NotificationPayload = {
  title: string;
  content: string;
};

/**
 * Logs owner notifications to the server console.
 * Replace this with Resend/email/Slack webhook as needed.
 */
export async function notifyOwner(payload: NotificationPayload): Promise<boolean> {
  console.log(`[Notification] ${payload.title}\n${payload.content}`);
  return true;
}
