import { AccentRule } from "../../_components/AccentRule";
import { Container } from "../../_components/Container";
import { FadeInSection } from "../../_components/motion/FadeInSection";
import { SectionHeading } from "../../_components/SectionHeading";
import { BioParagraph } from "./BioParagraph";
import { BioPhoto } from "./BioPhoto";

// Below md the photos stack between the heading and the text as squares
// (object-top keeps both faces; a square shows the top 75% of each 3:4
// portrait), full width on phones and capped at max-w-md (448px) from sm.
// From md the pair floats right at 46% of the content width (w-23/50),
// capped at 480px, with the text wrapping around and then full width
// beneath it. Each photo is 280px tall (h-70; 290px from lg, h-72.5) and
// (block - 16px gap) / 2 wide: ~158px at 768, ~213px at 1024, 232px from
// 1280. The lg height puts the float bottom (with mb-5) at 310px, so at
// 1024 paragraph 2's sixth line still wraps beside it instead of jutting
// out alone at full width; at 768 it stays 280 so the narrower crop keeps
// the daughter's face. Below ~210px wide the 3:4 image crops horizontally,
// so object-right-top keeps Mary (right edge of both shots) and the
// daughter in frame.
const PERSONAL_PHOTO_SIZES =
  "(min-width: 1280px) 232px, (min-width: 768px) calc((min(46vw - 1.5rem, 480px) - 1rem) / 2), (min-width: 640px) 448px, calc(100vw - 2rem)";
const PERSONAL_PHOTO_CLASS_NAME =
  "aspect-square object-top md:aspect-auto md:h-70 md:object-right-top lg:h-72.5";

/**
 * Personal bio (source: content/bio.md) on the mint band: heading, then the
 * two photos floated right from md with the paragraphs wrapping around and
 * under them (flow-root contains the float); photos stacked above the text
 * on mobile.
 */
export function PersonalSection() {
  return (
    <section className="bg-surface" aria-labelledby="personal-heading">
      <Container className="py-16 sm:py-24">
        <FadeInSection className="flow-root">
          <SectionHeading id="personal-heading">
            A life rooted in family, faith &amp; service
          </SectionHeading>
          <AccentRule className="mt-3" />

          <div className="mx-auto mt-6 grid w-full max-w-md grid-cols-1 gap-4 sm:gap-6 md:float-right md:mb-5 md:ml-11 md:w-23/50 md:max-w-120 md:grid-cols-2 md:gap-4">
            <BioPhoto
              src="/images/mary-horse-buckskin.jpg"
              alt="Selfie of Mary Leeds in a USA cap, smiling beside a buckskin horse in a teal rope halter under a blue sky"
              width={1932}
              height={2576}
              sizes={PERSONAL_PHOTO_SIZES}
              className={PERSONAL_PHOTO_CLASS_NAME}
            />
            <BioPhoto
              src="/images/mary-daughter-selfie.jpg"
              alt="Selfie of Mary Leeds and her daughter smiling together outdoors in front of green leafy trees"
              width={1932}
              height={2576}
              sizes={PERSONAL_PHOTO_SIZES}
              className={PERSONAL_PHOTO_CLASS_NAME}
            />
          </div>

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
        </FadeInSection>
      </Container>
    </section>
  );
}
