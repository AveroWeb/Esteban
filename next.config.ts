import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isProjectPage = isGitHubPages && process.env.GITHUB_PAGES_CUSTOM_DOMAIN !== "true";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  ...(isGitHubPages && {
    output: "export",
    ...(isProjectPage && { basePath: "/Esteban" }),
    trailingSlash: true,
  }),
  env: {
    SITE_ASSET_BASE_PATH: isProjectPage ? "/Esteban" : "",
  },
  images: {
    qualities: [92],
    deviceSizes: [640, 960, 1280, 1600, 1920, 2560, 3200],
    imageSizes: [320],
    ...(isGitHubPages && {
      loader: "custom",
      loaderFile: "./lib/github-pages-image-loader.ts",
    }),
  },
};

export default nextConfig;
