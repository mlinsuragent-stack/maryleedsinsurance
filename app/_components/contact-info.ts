/** Agency contact details, shared by the header, footer, contact page, and CTA. */
export const contactInfo = {
  phone: "970-985-5845",
  email: "Mary@maryleedsinsurance.com",
  address: "15614 E Otero Ave, Centennial, CO 80112",
};

/** `tel:` href for the agency phone number (digits only, e.g. tel:9709855845). */
export const phoneHref = `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`;

/** States Mary is licensed in, shared by the bio and contact pages. */
export const licensedStates = ["Colorado", "Arizona", "Texas"];

/** "Colorado, Arizona & Texas" */
export const licensedStatesText = `${licensedStates.slice(0, -1).join(", ")} & ${licensedStates[licensedStates.length - 1]}`;
