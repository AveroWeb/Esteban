export default function githubPagesImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  if (src.startsWith("/images/client/") && /\.(?:jpe?g)$/i.test(src)) {
    const responsiveSrc = src.replace(/\.(?:jpe?g)$/i, "-" + width + ".webp");
    return "/Esteban" + responsiveSrc;
  }

  return "/Esteban" + src;
}
