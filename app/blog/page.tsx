import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactFooter } from "../_components/ContactFooter";
import { Container } from "../_components/Container";
import { Header } from "../_components/Header";
import { FadeInSection } from "../_components/motion/FadeInSection";
import { SectionHeading } from "../_components/SectionHeading";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Blog | Mary Leeds Insurance",
  description:
    "Insurance basics, claims guidance, and agricultural business coverage tips from Mary Leeds Insurance.",
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="bg-white" aria-labelledby="blog-heading">
          <Container className="py-16 sm:py-24">
            <FadeInSection>
              <SectionHeading id="blog-heading">
                Insurance insights
              </SectionHeading>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
                Notes on understanding coverage, navigating claims, and
                protecting the businesses we work with every day.
              </p>
            </FadeInSection>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <FadeInSection key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-secondary/30 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {/* PLACEHOLDER: replace with real post imagery */}
                    <Image
                      src={`https://picsum.photos/seed/${post.imageSeed}/600/360`}
                      alt={post.imageAlt}
                      width={600}
                      height={360}
                      className="h-48 w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
                        {formatDate(post.date)}
                      </p>
                      <h3 className="mt-2 font-heading text-lg font-semibold text-primary group-hover:underline">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 sm:text-base">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 text-sm font-semibold text-primary">
                        Read more &rarr;
                      </span>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
