import { Container } from "./Container";

const badges = [
  "Licensed in CO, AZ & TX",
  "30+ Carrier Partners",
  "Family-Owned Colorado Business",
  "Mid-Market & Agricultural Specialists",
];

export function TrustBadges() {
  return (
    <section
      className="bg-white"
      aria-label="Why clients trust Mary Leeds Insurance"
    >
      <Container className="py-8 sm:py-10">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-lg border border-secondary/30 bg-surface px-4 py-4 text-center font-heading text-xl font-bold text-primary"
            >
              {badge}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
