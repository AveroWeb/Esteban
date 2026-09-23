export default function githubPagesImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  const basePath = process.env.SITE_ASSET_BASE_PATH || "";

  if (src.startsWith("/images/client/") && /\.(?:jpe?g)$/i.test(src)) {
    const responsiveSrc = src.replace(/\.(?:jpe?g)$/i, "-" + width + ".webp");
    return basePath + responsiveSrc;
  }

  return basePath + src;
}