import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "@/app/blogs/blogs-data";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | StrongHold",
    };
  }

  return {
    title: `${post.title} | StrongHold`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="w-full bg-white font-sans overflow-hidden">
      <section className="bg-[#EBF9FE] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-sm border border-gray-300 text-xs font-medium text-gray-600 bg-white mb-6">
            Blog
          </span>
          <p className="text-[#94A3B8] text-sm font-medium mb-4">{post.date}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-3xl">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg leading-8 text-slate-600 mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
        </div>

        {otherPosts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-8">More Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
              {otherPosts.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.slug}`}
                  className="group cursor-pointer block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-blue-400 text-xs font-medium mb-2">{item.date}</p>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-800 transition-colors">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
