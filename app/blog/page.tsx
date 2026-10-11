import type { Metadata } from "next";
import { ContactFooter } from "../_components/ContactFooter";
import { Container } from "../_components/Container";
import { Header } from "../_components/Header";
import { FadeInSection } from "../_components/motion/FadeInSection";
import { PageHeader } from "../_components/PageHeader";
import { BlogPostCard } from "./_components/BlogPostCard";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Blog | Mary Leeds Insurance",
  description:
    "Insurance basics, claims guidance, and agricultural business coverage tips from Mary Leeds Insurance.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <PageHeader
          title="Insurance, explained"
          accentRule
          subline="Notes on understanding coverage, navigating claims, and protecting the businesses we work with every day."
        />
        <Container className="pb-16 sm:pb-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <FadeInSection key={post.slug}>
                <BlogPostCard post={post} />
              </FadeInSection>
            ))}
          </div>
        </Container>
      </main>
      <ContactFooter />
    </div>
  );
}
