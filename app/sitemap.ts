import type { MetadataRoute } from "next";
import { blogPosts, parsePostDate } from "@/app/blogs/blogs-data";
import { services } from "@/app/services/services-data";
import { siteConfig } from "@/app/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPages = ["", "/about-us", "/services", "/works", "/blogs"].map(
    (path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  return [
    ...staticPages,
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blogs/${post.slug}`,
      lastModified: parsePostDate(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
