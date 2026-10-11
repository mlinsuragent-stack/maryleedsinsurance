import { Container } from "../../_components/Container";
import { FadeInSection } from "../../_components/motion/FadeInSection";
import { SectionHeading } from "../../_components/SectionHeading";
import { BioParagraph } from "./BioParagraph";
import { BioPhoto } from "./BioPhoto";

/**
 * Professional bio (source: content/bio.md): text left, office photo right
 * from lg; stacked (text, then photo) on mobile.
 */
export function ProfessionalSection() {
  return (
    <section className="bg-white" aria-labelledby="professional-heading">
      <Container className="py-16 sm:py-24">
        <FadeInSection className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-16">
          <div className="max-w-3xl lg:col-span-3">
            <SectionHeading id="professional-heading">
              The professional
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
          </div>

          <div className="w-full max-w-xs sm:max-w-sm lg:col-span-2 lg:max-w-none">
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
