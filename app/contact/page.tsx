import type { Metadata } from "next";
import { ContactFooter } from "../_components/ContactFooter";
import { ContactForm } from "../_components/ContactForm";
import { Container } from "../_components/Container";
import { Header } from "../_components/Header";
import { SectionHeading } from "../_components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact | Mary Leeds Insurance",
  description:
    "Get in touch with Mary Leeds Insurance to talk about life, small business, property and casualty, or commercial coverage.",
};

const contact = {
  phone: "970-985-5845",
  email: "Mary@maryleedsinsurance.com",
  address: "15614 E Otero Ave, Centennial, CO 80112",
};

const licensedStates = ["Colorado", "Arizona", "Texas"];

// text-primary on bg-surface only reaches ~4.3:1 contrast, short of the 4.5:1
// AA threshold for normal-weight text; text-gray-900 keeps these links
// readable on the mint sidebar background (still relies on underline-on-hover
// plus the existing focus ring for non-color affordance).
const sidebarLinkClassName =
  "rounded-sm text-gray-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="bg-white" aria-labelledby="contact-heading">
          <Container className="py-16 sm:py-24">
            <SectionHeading id="contact-heading">
              Get in touch
            </SectionHeading>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
              Tell us a bit about what you&apos;re looking for and Mary will
              follow up to talk through your options.
            </p>

            <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="w-full max-w-xl">
                <ContactForm />
              </div>

              <aside className="w-full max-w-sm shrink-0 rounded-lg border border-secondary/30 bg-surface p-6">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  Contact details
                </h3>
                <dl className="mt-4 flex flex-col gap-3 text-sm text-gray-700 sm:text-base">
                  <div>
                    <dt className="font-medium text-gray-900">Phone</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                        className={sidebarLinkClassName}
                      >
                        {contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${contact.email}`}
                        className={sidebarLinkClassName}
                      >
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Address</dt>
                    <dd className="mt-1">{contact.address}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">
                      Licensed in
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {licensedStates.map((state) => (
                        <span
                          key={state}
                          className="rounded-md bg-white px-3 py-1 text-xs font-medium text-primary shadow-sm sm:text-sm"
                        >
                          {state}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </Container>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
