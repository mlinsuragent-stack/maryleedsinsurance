import Image from "next/image";
import { AccentRule } from "./AccentRule";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="bg-surface" aria-labelledby="about-heading">
      <Container className="py-16 sm:py-24">
        <FadeInSection className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="w-full max-w-xs shrink-0 sm:max-w-sm">
            {/* Square crop anchored to the top keeps all three faces in frame. */}
            <Image
              src="/images/mary-daughter-corgi-bw.jpg"
              alt="Black-and-white studio portrait of Mary Leeds standing behind her daughter, who is holding a smiling fluffy corgi"
              width={1696}
              height={2545}
              sizes="(min-width: 640px) 24rem, 20rem"
              className="aspect-square w-full rounded-lg object-cover object-top shadow-sm"
            />
          </div>
          <div className="max-w-3xl">
            <SectionHeading id="about-heading">Meet Mary Leeds</SectionHeading>
            <AccentRule className="mt-3" />
            <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              Mary is a Colorado native and the owner of this women-owned
              insurance agency. A lifelong cowgirl, she raised her daughters
              as a single mother, has owned several AQHA horses, and rescues
              horses and dogs. She believes insurance should feel less like
              fine print and more like a conversation with someone who has
              your back.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              That same care shows up in how she works with clients &mdash;
              listening first, explaining clearly, and staying in your corner
              when a claim gets complicated. Family, community, and trust are
              at the center of everything she does, in business and at home.
            </p>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
