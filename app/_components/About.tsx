import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="bg-surface" aria-labelledby="about-heading">
      <Container className="py-16 sm:py-24">
        <div className="max-w-3xl">
          <SectionHeading id="about-heading">Meet Mary Leeds</SectionHeading>
          <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            Mary is a Colorado native and the owner of this women-owned
            insurance agency. She&apos;s a mother of three, a quarter horse
            breeder, and a lifelong dog lover who believes insurance should
            feel less like fine print and more like a conversation with
            someone who has your back.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            That same care shows up in how she works with clients &mdash;
            listening first, explaining clearly, and staying in your corner
            when a claim gets complicated. Family, community, and trust are
            at the center of everything she does, in business and at home.
          </p>
        </div>
      </Container>
    </section>
  );
}
