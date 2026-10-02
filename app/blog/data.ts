// PLACEHOLDER: replace with real blog content (or wire up to a CMS/database)
// once Mary has copy ready. Everything below is plausible placeholder text,
// not reviewed or approved content.

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageSeed: string;
  imageAlt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-commercial-insurance-basics",
    title: "Understanding Commercial Insurance: A Plain-English Guide",
    excerpt:
      "Commercial policies are full of jargon. Here's a straightforward breakdown of the coverage types every business owner should know before renewal season.",
    date: "2026-06-02",
    imageSeed: "blog-commercial-insurance-basics",
    imageAlt: "Business owner reviewing paperwork at a desk",
    body: [
      "If you've ever opened a commercial insurance quote and felt like you needed a translator, you're not alone. Between general liability, property coverage, business interruption, and umbrella policies, it's easy for the terms that actually matter to get lost in the fine print.",
      "General liability covers the basics: third-party bodily injury, property damage, and some legal costs if your business gets sued. It's the foundation most policies build on, but it isn't designed to cover everything, which is where property and casualty coverage and more specialized endorsements come in.",
      "Property coverage protects the physical things your business depends on, buildings, equipment, inventory, from events like fire, theft, or weather damage. For businesses with specialized equipment or seasonal inventory swings, the coverage limits and valuation method (replacement cost versus actual cash value) matter more than most owners realize until they file a claim.",
      "Business interruption coverage is the piece that's easiest to overlook and the most painful to be without. If a covered event shuts your doors for weeks, this is what replaces lost income and keeps payroll running while you rebuild.",
      "The right combination of coverage depends on how your business actually operates, not a generic template. A short conversation about your day-to-day risk is usually more valuable than reading through another policy document alone.",
    ],
  },
  {
    slug: "navigating-the-claims-process",
    title: "What to Expect When You File an Insurance Claim",
    excerpt:
      "Filing a claim can feel overwhelming, especially for a business. Here's what actually happens after you report a loss, and how to keep the process moving.",
    date: "2026-05-14",
    imageSeed: "blog-claims-process",
    imageAlt: "Two people reviewing a claims document together",
    body: [
      "The moment something goes wrong, whether it's storm damage to a property or an incident that triggers a liability claim, the instinct is to want answers immediately. In practice, claims move in stages, and knowing what those stages look like makes the wait a lot less stressful.",
      "First comes reporting: getting the claim filed with accurate details, dates, and documentation as early as possible. Photos, receipts, and a clear timeline of what happened all help an adjuster move faster once they're assigned.",
      "Next, an adjuster is assigned to investigate. This can mean a site visit, a review of documentation, or in more complex claims, both. This is usually the stage where questions come back to you, and where having someone who already understands your policy can save real time.",
      "Then comes the evaluation, where the adjuster determines what's covered, applies your policy's limits and deductibles, and puts together an estimate. This is often the part that generates the most questions, since policy language and real-world damage don't always line up neatly.",
      "Finally, a settlement is offered. If it doesn't reflect the full scope of the loss, you're allowed to push back with additional documentation, and that's frequently where an advocate who understands both the corporate insurance side and your actual situation makes the biggest difference in the outcome.",
    ],
  },
  {
    slug: "insurance-for-agricultural-businesses",
    title: "Insurance Considerations for Agricultural Businesses",
    excerpt:
      "Farm and ranch operations face risks that standard commercial policies weren't built for. Here's what to think through before your next renewal.",
    date: "2026-04-20",
    imageSeed: "blog-agricultural-insurance",
    imageAlt: "Aerial view of farmland and outbuildings",
    body: [
      "Agricultural operations sit in an unusual spot: part small business, part working land, and often part family home. A generic commercial policy rarely accounts for that overlap, which is why so many ag businesses end up underinsured in places they didn't expect.",
      "Equipment is one of the biggest gaps. Tractors, irrigation systems, and specialized machinery are expensive to replace and often move between locations, which can affect how (and whether) a standard policy covers them. Scheduling equipment separately, with accurate replacement values, is worth the extra paperwork.",
      "Livestock and crops bring their own set of considerations, from weather-related loss to disease and theft. Coverage here needs to reflect the actual scale of the operation, not a flat estimate, since undervaluing inventory is one of the most common reasons a claim falls short of expectations.",
      "Outbuildings, storage facilities, and on-site structures also need their own look. It's common for a barn or equipment shed built years after the main policy was written to simply not be reflected in current coverage.",
      "Because so much of agricultural risk is seasonal and weather-dependent, an annual review before planting or breeding season, rather than waiting for a renewal notice, tends to catch gaps before they become expensive surprises.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
