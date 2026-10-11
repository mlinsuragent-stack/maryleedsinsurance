import { Container } from "../../_components/Container";
import { FadeInSection } from "../../_components/motion/FadeInSection";
import { SectionHeading } from "../../_components/SectionHeading";
import { BioParagraph } from "./BioParagraph";
import { BioPhoto } from "./BioPhoto";

// Photos always sit side by side: about half the viewport when stacked
// under the text, a quarter of the max-w-6xl container on lg.
const PERSONAL_PHOTO_SIZES = "(min-width: 1024px) 16rem, 50vw";

/**
 * Personal bio (source: content/bio.md) on the mint band: text left, the
 * two photos side by side on the right from lg; photos below on mobile.
 */
export function PersonalSection() {
  return (
    <section className="bg-surface" aria-labelledby="personal-heading">
      <Container className="py-16 sm:py-24">
        <FadeInSection className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <SectionHeading id="personal-heading">
              A life rooted in family, faith &amp; service
            </SectionHeading>
            <BioParagraph>
              As a single mother, Mary raised her daughters while building an
              independent career and a life grounded in faith, family, hard
              work, and service. Some of her most treasured memories were made
              outdoors and alongside the animals she has always loved.
            </BioParagraph>
            <BioParagraph>
              Mary&apos;s passion for horses began early and became something
              she could share with her daughters. She has owned several AQHA
              horses over the years and has made rescuing and caring for horses
              and dogs a meaningful part of her life. For Mary, animals are more
              than companions &mdash; they teach patience, trust,
              responsibility, and unconditional love.
            </BioParagraph>
            <BioParagraph>
              When her daughters were young, they experienced that love
              firsthand while Mary helped build Hearts &amp; Horses Therapeutic
              Riding Center in Loveland, Colorado. Together, they witnessed how
              the connection between people and horses could bring healing,
              confidence, and hope.
            </BioParagraph>
            <BioParagraph>
              Those experiences became part of the foundation Mary wanted to
              give her daughters: work hard, care for others, protect those who
              need a voice, and always make room in your heart for compassion.
            </BioParagraph>
            <BioParagraph>
              Guided by her Christian faith, Mary continues to give generously
              of her time, resources, and talents to her community, with a
              special passion for supporting veterans and their families.
              Whether helping a person, a family, a veteran, or a rescued
              animal, Mary believes that blessings are meant to be shared.
            </BioParagraph>
            <BioParagraph>
              For Mary, a good life is about family around you, animals beside
              you, faith within you, and a willingness to help wherever you are
              needed.
            </BioParagraph>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <BioPhoto
              src="/images/mary-horse-buckskin.jpg"
              alt="Selfie of Mary Leeds in a USA cap, smiling beside a buckskin horse in a teal rope halter under a blue sky"
              width={1932}
              height={2576}
              sizes={PERSONAL_PHOTO_SIZES}
            />
            <BioPhoto
              src="/images/mary-daughter-selfie.jpg"
              alt="Selfie of Mary Leeds and her daughter smiling together outdoors in front of green leafy trees"
              width={1932}
              height={2576}
              sizes={PERSONAL_PHOTO_SIZES}
            />
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
