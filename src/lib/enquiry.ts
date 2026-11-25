"use server";

import { findUs } from "@/content/pages";
import type { EnquiryField, EnquiryState } from "@/lib/enquiry-types";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+\d][\d\s()-]{5,24}$/;
const validTypes = new Set(findUs.enquiryTypes.map((type) => type.value));

/** Read a text field, trimmed and capped so a hostile payload can't balloon. */
function field(formData: FormData, key: string, max = 2000) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Handles every enquiry form on the site (Find Us and the surf lesson form).
 *
 * This is an enquiry, never a booking: it never says a booking was made. The
 * enquiry is sent as JSON to the webhook in `ENQUIRY_WEBHOOK_URL` (Formspree,
 * Make, Zapier, a Slack/Teams inbound hook, or the client's own endpoint).
 * Without it, production shows an honest "not switched on yet" message rather
 * than pretending the message went anywhere.
 */
export async function submitEnquiry(_previous: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Hidden "company" field: real visitors never see it, bots fill it in.
  if (field(formData, "company")) return { status: "sent", message: "Thanks, we've got your enquiry." };

  const values = {
    name: field(formData, "name", 120),
    email: field(formData, "email", 200),
    phone: field(formData, "phone", 40),
    type: field(formData, "type", 40),
    message: field(formData, "message"),
    level: field(formData, "level", 60),
    dates: field(formData, "dates", 200),
  };

  const errors: Partial<Record<EnquiryField, string>> = {};
  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL.test(values.email)) errors.email = "Please enter a valid email address so we can reply.";
  if (values.phone && !PHONE.test(values.phone)) errors.phone = "That phone number doesn't look right.";
  if (!validTypes.has(values.type)) errors.type = "Please choose what your enquiry is about.";
  if (values.message.length < 10) errors.message = "Please add a short message (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const endpoint = process.env.ENQUIRY_WEBHOOK_URL;
  const typeLabel = findUs.enquiryTypes.find((type) => type.value === values.type)?.label ?? values.type;

  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] ENQUIRY_WEBHOOK_URL is not set, so this enquiry was only logged:", { ...values, type: typeLabel });
      return {
        status: "sent",
        message: "Development mode: no ENQUIRY_WEBHOOK_URL is set, so this enquiry was only logged to the server console and has not been sent to anyone.",
      };
    }
    return {
      status: "error",
      message: "Enquiries aren't switched on yet, so your message hasn't been sent. Please check back soon.",
      values,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ source: "barefoot-social website", ...values, type: typeLabel, submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
  } catch (error) {
    console.error("[enquiry] delivery failed", error);
    return { status: "error", message: "Something went wrong and your enquiry wasn't sent. Please try again in a moment.", values };
  }

  return {
    status: "sent",
    message: `Thanks, ${values.name.split(" ")[0]}. Your enquiry has been sent and we'll reply by email. This is an enquiry only, so nothing has been booked.`,
  };
}
