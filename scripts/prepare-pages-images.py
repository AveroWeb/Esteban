"""Build responsive, high-quality WebP copies for static GitHub Pages."""

from pathlib import Path
from PIL import Image, ImageOps


photos = Path("public/images/client")
widths = (320, 640, 960, 1280, 1600, 1920, 2560, 3200)
before = after = 0
count = 0

for source in sorted(photos.glob("*.jpg")):
    before += source.stat().st_size
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        profile = original.info.get("icc_profile")
        for width in widths:
            variant = image.copy()
            variant.thumbnail((width, width), Image.Resampling.LANCZOS)
            destination = source.with_name(f"{source.stem}-{width}.webp")
            variant.save(destination, "WEBP", quality=92, method=5, icc_profile=profile)
            after += destination.stat().st_size
    count += 1

print(f"Prepared {count} photos at {len(widths)} widths: {before / 1_000_000:.1f} MB -> {after / 1_000_000:.1f} MB")
