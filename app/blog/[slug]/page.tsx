import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactFooter } from "../../_components/ContactFooter";
import { Container } from "../../_components/Container";
import { Header } from "../../_components/Header";
import { FadeInSection } from "../../_components/motion/FadeInSection";
import { blogPosts, getBlogPostBySlug } from "../data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post not found | Mary Leeds Insurance" };
  }

  return {
    title: `${post.title} | Mary Leeds Insurance`,
    description: post.excerpt,
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <article className="bg-white" aria-labelledby="post-heading">
          <Container className="py-16 sm:py-24">
            <FadeInSection className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="text-sm font-semibold text-primary hover:underline"
              >
                &larr; Back to blog
              </Link>

              <p className="mt-6 text-xs font-medium uppercase tracking-wide text-gray-600">
                {formatDate(post.date)}
              </p>
              <h1
                id="post-heading"
                className="mt-2 font-heading text-2xl font-bold text-primary sm:text-3xl"
              >
                {post.title}
              </h1>

              {/* PLACEHOLDER: replace with real post imagery */}
              <Image
                src={`https://picsum.photos/seed/${post.imageSeed}/1200/675`}
                alt={post.imageAlt}
                width={1200}
                height={675}
                className="mt-8 w-full rounded-lg object-cover shadow-sm"
                priority
              />

              <div className="mt-8 flex flex-col gap-4">
                {post.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-gray-700 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeInSection>
          </Container>
        </article>
      </main>
      <ContactFooter />
    </div>
  );
}
