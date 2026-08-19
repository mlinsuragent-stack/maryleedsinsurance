import Image from "next/image";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { HoverCard } from "./motion/HoverCard";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Corporate Insurance & Claims Navigation",
    description:
      "Our primary focus: helping businesses choose the right coverage and guiding you step by step through the claims process when something goes wrong.",
    imageSeed: "service-corporate",
    imageAlt:
      "A business owner and agent reviewing a corporate insurance claim together",
  },
  {
    title: "Commercial & Agribusiness",
    description:
      "Coverage built for Colorado businesses and agricultural operations, from equipment and property to liability.",
    imageSeed: "service-agribusiness",
    imageAlt: "A Colorado ranch with equipment covered by agribusiness insurance",
  },
  {
    title: "Home & Auto",
    description:
      "Personal coverage that protects what matters most, with a policy that actually matches how you live.",
    imageSeed: "service-home-auto",
    imageAlt: "A family home and car protected by a home and auto insurance policy",
  },
  {
    title: "Life & Umbrella",
    description:
      "Extra protection and peace of mind for you and your family, explained without the jargon.",
    imageSeed: "service-life-umbrella",
    imageAlt: "A family enjoying peace of mind under a life and umbrella policy",
  },
];

const carriers = [
  "Progressive",
  "Hartford",
  "Travelers",
  "GEICO",
  "Nationwide",
  "and 25+ more carrier partners",
];

export function Services() {
  return (
    <section className="bg-white" aria-labelledby="services-heading">
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
          <div className="mt-10">
            <h3 className="font-heading text-base font-semibold text-primary">
              Backed by 30+ carrier partners, including
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              {carriers.join(", ")}.
            </p>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
