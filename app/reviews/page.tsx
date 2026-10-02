import type { Metadata } from "next";
import { ContactFooter } from "../_components/ContactFooter";
import { Container } from "../_components/Container";
import { Header } from "../_components/Header";
import { ReviewForm } from "../_components/ReviewForm";
import { SectionHeading } from "../_components/SectionHeading";

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
        <section className="bg-white" aria-labelledby="reviews-heading">
          <Container className="py-16 sm:py-24">
            <SectionHeading id="reviews-heading">
              Leave a review
            </SectionHeading>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
              If Mary helped you find the right coverage or navigate a claim,
              we&apos;d love to hear about it.
            </p>

            <div className="mt-8 max-w-xl rounded-lg border border-secondary/30 bg-surface p-6">
              <h3 className="font-heading text-lg font-semibold text-primary">
                Leave a review on Google
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                Already have a Google account? Post your review there so
                other people searching for coverage can see it.
              </p>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Leave a review on Google
              </a>
            </div>

            <div className="mt-12 max-w-xl border-t border-secondary/30 pt-10">
              <h3 className="font-heading text-lg font-semibold text-primary">
                Or leave a review here
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                Prefer to write it directly on our site? Fill out the form
                below.
              </p>
              <div className="mt-6">
                <ReviewForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
