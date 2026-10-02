import { Container } from "./Container";

const contact = {
  phone: "970-985-5845",
  email: "Mary@maryleedsinsurance.com",
  address: "15614 E Otero Ave, Centennial, CO 80112",
};

const linkClassName =
  "rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

export function ContactFooter() {
  return (
    <footer className="bg-primary">
      <Container className="py-12">
        <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">
          Let&apos;s talk about your coverage
        </h2>
        <div className="mt-6 flex flex-col gap-2 text-sm text-white sm:flex-row sm:gap-8 sm:text-base">
          <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className={linkClassName}>
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className={linkClassName}>
            {contact.email}
          </a>
          <span>{contact.address}</span>
        </div>
        <p className="mt-8 text-xs text-white/95">
          &copy; {new Date().getFullYear()} Mary Leeds Insurance. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
