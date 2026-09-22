"""Create smaller publication copies of the original client photos on CI."""

from pathlib import Path
from PIL import Image, ImageOps


photos = Path("public/images/client")
before = after = 0

for source in sorted(photos.glob("*.jpg")):
    before += source.stat().st_size
    temporary = source.with_suffix(".pages.jpg")
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        image.save(
            temporary,
            "JPEG",
            quality=90,
            subsampling=0,
            optimize=True,
            progressive=True,
            icc_profile=original.info.get("icc_profile"),
        )
    temporary.replace(source)
    after += source.stat().st_size

print(f"Optimized {len(list(photos.glob('*.jpg')))} photos: {before / 1_000_000:.1f} MB -> {after / 1_000_000:.1f} MB")
