import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactFooter } from "../_components/ContactFooter";
import { Container } from "../_components/Container";
import { Header } from "../_components/Header";
import { FadeInSection } from "../_components/motion/FadeInSection";
import { SectionHeading } from "../_components/SectionHeading";

export const metadata: Metadata = {
  title: "About Mary Leeds | Mary Leeds Insurance",
  description:
    "Meet Mary Leeds, a Colorado native and owner of Mary Leeds Insurance, licensed in Colorado, Arizona, and Texas.",
};

const licensedStates = ["Colorado", "Arizona", "Texas"];

export default function BioPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="bg-white" aria-labelledby="bio-heading">
          <Container className="py-16 sm:py-24">
            <FadeInSection className="flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="w-full max-w-xs shrink-0 sm:max-w-sm">
                {/* PLACEHOLDER: replace with real photo */}
                <Image
                  src="https://picsum.photos/seed/mary-leeds-bio-portrait/600/750"
                  alt="Portrait of Mary Leeds, owner and licensed insurance agent at Mary Leeds Insurance"
                  width={600}
                  height={750}
                  className="w-full rounded-lg object-cover shadow-sm"
                  priority
                />
              </div>
              <div className="max-w-3xl">
                <SectionHeading id="bio-heading">
                  About Mary Leeds
                </SectionHeading>
                <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
                  Mary Leeds is a Colorado native who has spent her career
                  helping individuals and businesses make sense of insurance.
                  She founded and owns this agency &mdash; a women-owned
                  business built on the idea that coverage decisions
                  shouldn&apos;t feel confusing or rushed. Whether she&apos;s
                  talking through a new policy or standing beside a client in
                  the middle of a complicated claim, Mary&apos;s approach is
                  the same: listen carefully, explain clearly, and never push
                  a sale that doesn&apos;t genuinely fit the client in front
                  of her.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
                  That consultative style has made her a trusted partner for
                  mid-market commercial clients, particularly agricultural
                  businesses navigating property, casualty, and commercial
                  coverage where the details really matter. Mary takes the
                  time to understand how a business actually operates before
                  recommending a policy, and she stays involved when claims
                  get complicated, translating corporate insurance language
                  into decisions clients can actually act on.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
                  Outside the office, Mary is a mother of three, a quarter
                  horse breeder, and a devoted dog and family lover. Life on
                  the ranch keeps her close to the same agricultural
                  community she works with every day &mdash; she doesn&apos;t
                  just insure ag businesses, she understands them firsthand.
                  Family, community, and straightforward advice are what
                  Mary brings to every client relationship.
                </p>

                <div className="mt-8 rounded-lg border border-secondary/30 bg-surface p-6">
                  <h3 className="font-heading text-base font-semibold text-primary">
                    Licensed in
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-3">
                    {licensedStates.map((state) => (
                      <li
                        key={state}
                        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"
                      >
                        {state}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Get in touch with Mary
                </Link>
              </div>
            </FadeInSection>
          </Container>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
