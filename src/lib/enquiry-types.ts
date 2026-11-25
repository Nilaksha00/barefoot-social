export type EnquiryField = "name" | "email" | "phone" | "type" | "message";

/** What the enquiry form shows after a submit. `values` repopulates the fields when something needs fixing. */
export type EnquiryState = {
  status: "idle" | "sent" | "error";
  message?: string;
  errors?: Partial<Record<EnquiryField, string>>;
  values?: Record<string, string>;
};
