import type { Metadata } from "next";
import { ContactFooter } from "../_components/ContactFooter";
import { Header } from "../_components/Header";
import { PageHeader } from "../_components/PageHeader";
import { BioPhoto } from "./_components/BioPhoto";
import { LicensedCta } from "./_components/LicensedCta";
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
        {/* Subline is the metadata description, trimmed of the parts the
            eyebrow and title already say. */}
        <PageHeader
          eyebrow="Colorado native · Lifelong cowgirl"
          title="Meet Mary Leeds"
          subline="Owner of Mary Leeds Insurance, licensed in Colorado, Arizona, and Texas."
        >
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:mr-0">
            <BioPhoto
              src="/images/mary-cowgirl-portrait.jpg"
              alt="Mary Leeds smiling outdoors in a black tank top printed with the word COWGIRL, with a sunny event lawn behind her"
              width={1932}
              height={2576}
              sizes="(min-width: 640px) 24rem, 20rem"
              shape="arch"
              priority
            />
          </div>
        </PageHeader>
        <ProfessionalSection />
        <PersonalSection />
        <LicensedCta />
      </main>
      <ContactFooter />
    </div>
  );
}
