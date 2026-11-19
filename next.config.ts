import type { NextConfig } from "next";
import { legacyBlogRedirects } from "./app/blogs/blogs-data";

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(legacyBlogRedirects).map(([from, to]) => ({
      source: `/blogs/${from}`,
      destination: `/blogs/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
