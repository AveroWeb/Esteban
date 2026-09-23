import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: "export",
    basePath: "",
    trailingSlash: true,
  }),
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
