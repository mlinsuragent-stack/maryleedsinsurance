import { AccentButtonLink } from "../../_components/AccentButtonLink";
import { Container } from "../../_components/Container";
import { FadeInSection } from "../../_components/motion/FadeInSection";
import { SectionHeading } from "../../_components/SectionHeading";
import { BioParagraph } from "./BioParagraph";
import { BioPhoto } from "./BioPhoto";

const licensedStates = ["Colorado", "Arizona", "Texas"];

/**
 * Professional bio (source: content/bio.md). Three-cell grid so that on
 * mobile the order is portrait, text, office photo; on large screens both
 * photos stack in the left column beside the text. The `auto 1fr` rows keep
 * the portrait row at its natural height so extra text height falls below
 * the office photo instead of opening a gap between the two photos.
 */
export function ProfessionalSection() {
  return (
    <section className="bg-white" aria-labelledby="bio-heading">
      <Container className="py-16 sm:py-24">
        <FadeInSection className="grid gap-10 lg:grid-cols-3 lg:grid-rows-[auto_1fr] lg:items-start">
          <div className="w-full max-w-xs sm:max-w-sm lg:col-start-1 lg:row-start-1 lg:max-w-none">
            <BioPhoto
              src="/images/mary-cowgirl-portrait.jpg"
              alt="Mary Leeds smiling outdoors in a black tank top printed with the word COWGIRL, with a sunny event lawn behind her"
              width={1932}
              height={2576}
              priority
            />
          </div>

          <div className="max-w-3xl lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <SectionHeading id="bio-heading" as="h1">
              About Mary Leeds
            </SectionHeading>
            <BioParagraph>
              Born and raised in Colorado, Mary is a lifelong cowgirl with
              decades of experience in the financial services and insurance
              industries. Her passion for helping people extends beyond her
              professional work, as she actively supports her communities in
              Centennial and on Colorado&apos;s Western Slope, including Delta
              and Mesa Counties. Mary volunteers with various nonprofit
              organizations dedicated to supporting United States veterans and
              their families.
            </BioParagraph>
            <BioParagraph>
              Mary provides personalized insurance solutions for individuals
              and families, including home, auto, life, health, Medicare, and
              long-term care coverage. She also specializes in helping both new
              and established businesses identify and secure the insurance
              coverage they need at competitive and affordable rates.
            </BioParagraph>
            <BioParagraph>
              Licensed in Arizona, Colorado, and Texas, Mary takes a personal,
              educational approach with every client. She works directly with
              each individual or business owner to understand their unique
              needs, explain available insurance options, and help them make
              informed decisions about the coverage that best protects what
              matters most.
            </BioParagraph>
            <BioParagraph>
              With a combination of decades of industry experience, a strong
              commitment to her communities, and a genuine desire to serve
              others, Mary believes insurance should be understandable,
              accessible, and tailored to each person&apos;s unique situation.
            </BioParagraph>

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

            <AccentButtonLink
              href="/contact"
              surface="light"
              className="mt-8 px-6 py-3 text-sm"
            >
              Get in touch with Mary
            </AccentButtonLink>
          </div>

          <div className="w-full max-w-xs sm:max-w-sm lg:col-start-1 lg:row-start-2 lg:max-w-none">
            <BioPhoto
              src="/images/mary-office-dogs.jpg"
              alt="Mary Leeds smiling at her office desk, with one small dog tucked in a bed beneath it and another sitting beside it"
              width={1440}
              height={1920}
            />
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
