import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: "export",
    basePath: "/Esteban",
    trailingSlash: true,
  }),
  images: {
    qualities: [100],
    ...(isGitHubPages && {
      loader: "custom",
      loaderFile: "./lib/github-pages-image-loader.ts",
    }),
  },
};

export default nextConfig;
