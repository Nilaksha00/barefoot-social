"use client";

import { useActionState, useId, type ReactNode } from "react";
import { findUs } from "@/content/pages";
import { submitEnquiry } from "@/lib/enquiry";
import type { EnquiryField, EnquiryState } from "@/lib/enquiry-types";
import { cn } from "@/lib/utils";

const initial: EnquiryState = { status: "idle" };

const inputClass =
  "block h-12 w-full rounded-[4px] border border-ink/20 bg-paper px-4 text-base text-ink placeholder:text-mute/70 transition-colors focus:border-ink focus:outline-none aria-[invalid=true]:border-red-700";

/**
 * Enquiry form with validation. Native browser validation runs first, and the
 * server action re-checks everything and returns field-level errors.
 *
 * `general` lets the visitor pick an enquiry type; `surf` is the surf lesson
 * enquiry, with the type fixed and extra level/date fields. Either way it only
 * sends an enquiry. It never confirms a booking.
 */
export function EnquiryForm({ variant = "general", submitLabel }: { variant?: "general" | "surf"; submitLabel?: string }) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initial);
  const uid = useId();
  const surf = variant === "surf";
  const values = state.values ?? {};
  const errors = state.errors ?? {};

  if (state.status === "sent") {
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-ink/15 bg-paper p-6 md:p-8">
        <p className="text-[11px] font-medium uppercase tracking-wide-plus text-mute">Thank you</p>
        <p className="mt-3 text-lg leading-relaxed text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-[4px] border border-red-700/40 bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.message}
        </p>
      )}

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {surf ? (
        <input type="hidden" name="type" value="surf" />
      ) : (
        <fieldset aria-describedby={errors.type ? `${uid}-type-error` : undefined}>
          <legend className="text-[11px] font-medium uppercase tracking-wide-plus text-mute">What is it about?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {findUs.enquiryTypes.map((type) => (
              <label key={type.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value={type.value}
                  required
                  defaultChecked={(values.type ?? "general") === type.value}
                  className="peer sr-only"
                />
                <span className="flex flex-col rounded-[4px] border border-ink/20 bg-paper px-4 py-2.5 text-sm transition-colors hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2">
                  <span className="font-medium">{type.label}</span>
                  <span className="text-xs opacity-70">{type.hint}</span>
                </span>
              </label>
            ))}
          </div>
          {errors.type && <FieldError id={`${uid}-type-error`}>{errors.type}</FieldError>}
        </fieldset>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field uid={uid} name="name" label="Name" error={errors.name}>
          <input id={`${uid}-name`} name="name" type="text" required minLength={2} maxLength={120} autoComplete="name" defaultValue={values.name} className={inputClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${uid}-name-error` : undefined} />
        </Field>
        <Field uid={uid} name="email" label="Email" error={errors.email}>
          <input id={`${uid}-email`} name="email" type="email" required maxLength={200} autoComplete="email" defaultValue={values.email} className={inputClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${uid}-email-error` : undefined} />
        </Field>
        <Field uid={uid} name="phone" label="Phone" optional error={errors.phone}>
          <input id={`${uid}-phone`} name="phone" type="tel" maxLength={40} autoComplete="tel" defaultValue={values.phone} className={inputClass} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? `${uid}-phone-error` : undefined} />
        </Field>
        {surf && (
          <Field uid={uid} name="level" label="Your surf level" optional>
            <select id={`${uid}-level`} name="level" defaultValue={values.level ?? ""} className={inputClass}>
              <option value="">Not sure yet</option>
              <option value="Beginner">Beginner: first time on a board</option>
              <option value="Improving">Improving: getting more comfortable</option>
            </select>
          </Field>
        )}
      </div>

      {surf && (
        <Field uid={uid} name="dates" label="Preferred dates" optional>
          <input id={`${uid}-dates`} name="dates" type="text" maxLength={200} placeholder="e.g. 12 to 16 March, mornings" defaultValue={values.dates} className={inputClass} />
        </Field>
      )}

      <Field uid={uid} name="message" label="Message" error={errors.message}>
        <textarea
          id={`${uid}-message`}
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          defaultValue={values.message}
          placeholder={surf ? "Tell us a little about yourself and what you're hoping for." : "How can we help?"}
          className={cn(inputClass, "h-auto py-3")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${uid}-message-error` : undefined}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-ink px-8 text-[12px] font-medium uppercase tracking-wide-plus text-paper transition-colors duration-300 hover:bg-ink-soft disabled:cursor-wait disabled:opacity-60"
        >
          {pending ? "Sending…" : (submitLabel ?? "Send enquiry")}
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-mute">
          This sends us an enquiry. It doesn&rsquo;t make a booking. Rooms and beds are booked on Booking.com.
        </p>
      </div>
    </form>
  );
}

function Field({
  uid,
  name,
  label,
  optional,
  error,
  children,
}: {
  uid: string;
  name: EnquiryField | string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={`${uid}-${name}`} className="text-[11px] font-medium uppercase tracking-wide-plus text-mute">
        {label}
        {optional && <span className="ml-2 normal-case tracking-normal opacity-70">(optional)</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && <FieldError id={`${uid}-${name}-error`}>{error}</FieldError>}
    </div>
  );
}

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 text-sm text-red-800">
      {children}
    </p>
  );
}
