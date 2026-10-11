import Image from "next/image";
import Link from "next/link";
import { cardClassName } from "../../_components/Card";
import { type BlogPost, getPostLabel } from "../data";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Linked post card on the blog index. Label is secondary-dark on white
 * (4.60:1; plain secondary would be 2.63:1), date gray-600 7.56:1, title
 * and "Read more" primary 5.09:1.
 */
export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden transition-shadow duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${cardClassName}`}
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
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary-dark">
          {getPostLabel(post)}
        </p>
        <h2 className="mt-2 font-heading text-lg font-semibold text-primary group-hover:underline">
          {post.title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 sm:text-base">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4 text-sm">
          <span className="text-gray-600">{formatDate(post.date)}</span>
          <span className="font-semibold text-primary">Read more &rarr;</span>
        </div>
      </div>
    </Link>
  );
}
