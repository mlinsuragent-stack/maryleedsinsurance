/** Agency contact details, shared by the header, footer, contact page, and CTA. */
export const contactInfo = {
  phone: "970-985-5845",
  email: "Mary@maryleedsinsurance.com",
  address: "15614 E Otero Ave, Centennial, CO 80112",
};

/** `tel:` href for the agency phone number (digits only, e.g. tel:9709855845). */
export const phoneHref = `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`;
