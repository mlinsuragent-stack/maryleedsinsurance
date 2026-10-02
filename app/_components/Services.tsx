import Image from "next/image";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { HoverCard } from "./motion/HoverCard";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Life Insurance",
    description:
      "Coverage that protects your family and your business's continuity, explained clearly so you know exactly what you're buying.",
    imageSeed: "service-life-insurance",
    imageAlt: "A family reviewing a life insurance policy together at home",
  },
  {
    title: "Small Business Insurance",
    description:
      "Built for growing companies with 10-50 employees, with coverage that scales with your team instead of a generic small-business policy.",
    imageSeed: "service-small-business",
    imageAlt: "A small business owner reviewing coverage options with employees nearby",
  },
  {
    title: "Property & Casualty",
    description:
      "Protection for your buildings, equipment, and operations, including coverage built specifically for agricultural property.",
    imageSeed: "service-property-casualty",
    imageAlt: "A commercial property and equipment covered by a property and casualty policy",
  },
  {
    title: "Commercial Insurance",
    description:
      "Our primary focus: helping mid-market and agricultural businesses choose the right coverage and guiding you step by step through the claims process when something goes wrong.",
    imageSeed: "service-commercial",
    imageAlt: "A business owner and agent reviewing a commercial insurance claim together",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-white"
      aria-labelledby="services-heading"
    >
      <Container className="py-16 sm:py-24">
        <FadeInSection>
          <SectionHeading id="services-heading">How we help</SectionHeading>
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.title}>
                <HoverCard className="h-full overflow-hidden rounded-lg border border-secondary/30 bg-surface transition-shadow duration-200 hover:shadow-lg">
                  {/* PLACEHOLDER: replace with real photo */}
                  <Image
                    src={`https://picsum.photos/seed/${service.imageSeed}/400/240`}
                    alt={service.imageAlt}
                    width={400}
                    height={240}
                    className="h-32 w-full object-cover sm:h-40"
                  />
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </HoverCard>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </Container>
    </section>
  );
}
