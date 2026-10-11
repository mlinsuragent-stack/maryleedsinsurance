import type { Metadata } from "next";
import { Card } from "../_components/Card";
import { ContactFooter } from "../_components/ContactFooter";
import { ContactForm } from "../_components/ContactForm";
import { Container } from "../_components/Container";
import { Header } from "../_components/Header";
import { PageHeader } from "../_components/PageHeader";
import { ContactSidebar } from "./_components/ContactSidebar";

export const metadata: Metadata = {
  title: "Contact | Mary Leeds Insurance",
  description:
    "Get in touch with Mary Leeds Insurance to talk about life, small business, property and casualty, or commercial coverage.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <PageHeader
          title="Get a free quote"
          subline="Tell us a bit about what you're looking for and Mary will follow up to talk through your options."
        />
        <Container className="pb-16 sm:pb-24">
          {/* Form first on mobile; form left, sidebar right from lg. */}
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <Card className="lg:col-span-2">
              <ContactForm />
            </Card>
            <ContactSidebar />
          </div>
        </Container>
      </main>
      <ContactFooter />
    </div>
  );
}
