import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  /* config options here */
  // Disable output: export for development, enable for production build
  // output: "export",
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
