import type { Metadata } from "next";
import { ContactFooter } from "../_components/ContactFooter";
import { Header } from "../_components/Header";
import { PersonalSection } from "./_components/PersonalSection";
import { ProfessionalSection } from "./_components/ProfessionalSection";

export const metadata: Metadata = {
  title: "About Mary Leeds | Mary Leeds Insurance",
  description:
    "Meet Mary Leeds, a Colorado native and owner of Mary Leeds Insurance, licensed in Colorado, Arizona, and Texas.",
};

export default function BioPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <ProfessionalSection />
        <PersonalSection />
      </main>
      <ContactFooter />
    </div>
  );
}
