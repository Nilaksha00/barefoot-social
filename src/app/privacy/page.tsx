import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Tbc } from "@/components/ui/Placeholder";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} handles the details you send through this website.`,
};

/**
 * Placeholder page so the footer link works. It only states what the website's
 * enquiry form does. TODO(client): replace with the full privacy policy.
 */
export default function PrivacyPage() {
  return (
    <section className="pb-24 pt-36 md:pb-36 md:pt-48">
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 text-heading uppercase">Privacy policy</h1>
        <p className="mt-6">
          <Tbc>Full policy to be supplied</Tbc>
        </p>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            We&rsquo;ll publish our full privacy policy here. In the meantime, here&rsquo;s what this website does with the details you give
            us.
          </p>
          <p>
            When you send an enquiry, we receive the name, email address, phone number (if you add one) and message you type, so that we can
            reply to you.
          </p>
          <p>
            Rooms and hostel beds are booked on Booking.com, which has its own privacy policy. This website doesn&rsquo;t take payments or
            bookings.
          </p>
        </div>
      </Container>
    </section>
  );
}
