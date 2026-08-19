import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Corporate Insurance & Claims Navigation",
    description:
      "Our primary focus: helping businesses choose the right coverage and guiding you step by step through the claims process when something goes wrong.",
  },
  {
    title: "Commercial & Agribusiness",
    description:
      "Coverage built for Colorado businesses and agricultural operations, from equipment and property to liability.",
  },
  {
    title: "Home & Auto",
    description:
      "Personal coverage that protects what matters most, with a policy that actually matches how you live.",
  },
  {
    title: "Life & Umbrella",
    description:
      "Extra protection and peace of mind for you and your family, explained without the jargon.",
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
        <SectionHeading id="services-heading">How we help</SectionHeading>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-lg border border-secondary/30 bg-surface p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                {service.description}
              </p>
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
      </Container>
    </section>
  );
}
