import type { Metadata } from "next";
import { AccentButtonLink } from "../_components/AccentButtonLink";
import { Card } from "../_components/Card";
import { ContactFooter } from "../_components/ContactFooter";
import { Container } from "../_components/Container";
import { DarkPanel, DarkPanelHeading } from "../_components/DarkPanel";
import { Header } from "../_components/Header";
import { PageHeader } from "../_components/PageHeader";
import { ReviewForm } from "../_components/ReviewForm";

export const metadata: Metadata = {
  title: "Leave a Review | Mary Leeds Insurance",
  description:
    "Share your experience with Mary Leeds Insurance on Google, or leave a review directly on this site.",
};

// TODO: replace with Mary's real Google Business Profile review link
const googleReviewUrl =
  "https://g.page/r/PLACEHOLDER-REPLACE-WITH-REAL-GOOGLE-REVIEW-LINK/review";

export default function ReviewsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <PageHeader
          title="Share your experience"
          align="center"
          subline="If Mary helped you find the right coverage or navigate a claim, we'd love to hear about it."
        />
        <Container className="pb-16 sm:pb-24">
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            <DarkPanel
              as="section"
              labelledBy="google-review-heading"
              className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <DarkPanelHeading id="google-review-heading">
                  Review us on Google
                </DarkPanelHeading>
                <p className="mt-2 text-sm leading-relaxed text-surface sm:text-base">
                  Already have a Google account? Post your review there so
                  other people searching for coverage can see it.
                </p>
              </div>
              <AccentButtonLink
                href={googleReviewUrl}
                external
                surface="dark"
                className="shrink-0 self-start px-6 py-3 text-sm md:self-center"
              >
                Leave a review on Google
              </AccentButtonLink>
            </DarkPanel>

            <section aria-labelledby="review-form-heading">
              {/* Divider: the lines are decorative; the label (gray-600 on
                  white, 7.56:1) doubles as the form section's heading. */}
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
                <h2
                  id="review-form-heading"
                  className="text-sm font-medium text-gray-600"
                >
                  or share it here
                </h2>
                <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
              </div>
              <Card className="mt-10">
                <ReviewForm />
              </Card>
            </section>
          </div>
        </Container>
      </main>
      <ContactFooter />
    </div>
  );
}
