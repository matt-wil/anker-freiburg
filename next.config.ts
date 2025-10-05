import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anker-tattoo-24.r2.cloudflarestorage.com",
        port: "",
        pathname: "/**", // This allows any image path from this bucket
      },
    ],
  },
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl: (config?: NextConfig | undefined) => NextConfig =
  createNextIntlPlugin();
export default withNextIntl(withAnalyzer(nextConfig));
