import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  /* config options here */
  // Only use static export for production builds
  ...(process.env.NODE_ENV === "production" && { output: "export" }),
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for consistent routing
  trailingSlash: true,

  // Redirects for development mode (rewrites root paths to /en)
  async rewrites() {
    // Only apply rewrites in development
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/",
          destination: "/en/",
        },
        {
          source: "/projects/:path*",
          destination: "/en/projects/:path*",
        },
        {
          source: "/contact/:path*",
          destination: "/en/contact/:path*",
        },
      ];
    }
    return [];
  },
};

export default withNextIntl(nextConfig);
