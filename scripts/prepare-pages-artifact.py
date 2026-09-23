"""Copy the export into a Pages artifact without shipping original photo masters."""

from pathlib import Path
from shutil import copytree


source = Path("out")
destination = Path("pages-artifact")


def omit_client_masters(directory: str, names: list[str]) -> set[str]:
    path = Path(directory)
    if path.name == "client" and path.parent.name == "images":
        return {name for name in names if name.lower().endswith((".jpg", ".jpeg"))}
    return set()


if not source.is_dir():
    raise FileNotFoundError("Run the static export before preparing the Pages artifact.")

copytree(source, destination, ignore=omit_client_masters, dirs_exist_ok=True)
(destination / ".nojekyll").touch()
print(f"Prepared GitHub Pages files in {destination}")
