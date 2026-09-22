#!/bin/bash
# Downloads real placeholder photography from picsum.photos into /public/images
set -e
BASE="C:/Users/Administrator/Esteban site/public/images"

# name|seed|width|height
declare -a ITEMS=(
  "hero/hero-main.jpg|hero-residu-01|1600|2000"

  "about/portrait.jpg|about-residu-portrait|1400|1750"

  "nav/nav-01.jpg|nav-selected-work|1200|1600"
  "nav/nav-02.jpg|nav-portraits|1200|1600"
  "nav/nav-03.jpg|nav-automotive|1200|1600"
  "nav/nav-04.jpg|nav-lifestyle|1200|1600"
  "nav/nav-05.jpg|nav-about|1200|1600"
  "nav/nav-06.jpg|nav-contact|1200|1600"

  "archive/archive-01.jpg|archive-01|1000|1400"
  "archive/archive-02.jpg|archive-02|1400|1000"
  "archive/archive-03.jpg|archive-03|1200|1600"
  "archive/archive-04.jpg|archive-04|1600|1000"
  "archive/archive-05.jpg|archive-05|1000|1300"
  "archive/archive-06.jpg|archive-06|1400|1050"
  "archive/archive-07.jpg|archive-07|1100|1500"
  "archive/archive-08.jpg|archive-08|1500|1000"

  "moments/moment-01.jpg|moment-01|1000|1300"
  "moments/moment-02.jpg|moment-02|1000|1300"
  "moments/moment-03.jpg|moment-03|1000|1300"
  "moments/moment-04.jpg|moment-04|1000|1300"
  "moments/moment-05.jpg|moment-05|1000|1300"

  "projects/project-01-cover.jpg|nightdrive-cover|1800|2200"
  "projects/project-01-01.jpg|nightdrive-01|1920|1080"
  "projects/project-01-02.jpg|nightdrive-02|1400|1900"
  "projects/project-01-03.jpg|nightdrive-03|1600|1000"
  "projects/project-01-04.jpg|nightdrive-04|1400|1900"
  "projects/project-01-05.jpg|nightdrive-05|1920|1080"
  "projects/project-01-06.jpg|nightdrive-06|1200|1500"

  "projects/project-02-cover.jpg|parisdark-cover|1800|2200"
  "projects/project-02-01.jpg|parisdark-01|1920|1080"
  "projects/project-02-02.jpg|parisdark-02|1400|1900"
  "projects/project-02-03.jpg|parisdark-03|1600|1000"
  "projects/project-02-04.jpg|parisdark-04|1400|1900"
  "projects/project-02-05.jpg|parisdark-05|1920|1080"
  "projects/project-02-06.jpg|parisdark-06|1200|1500"

  "projects/project-03-cover.jpg|untitled-cover|1800|2200"
  "projects/project-03-01.jpg|untitled-01|1400|1900"
  "projects/project-03-02.jpg|untitled-02|1920|1080"
  "projects/project-03-03.jpg|untitled-03|1400|1900"
  "projects/project-03-04.jpg|untitled-04|1200|1500"
  "projects/project-03-05.jpg|untitled-05|1600|1000"

  "projects/project-04-cover.jpg|slowmorn-cover|1800|2200"
  "projects/project-04-01.jpg|slowmorn-01|1400|1900"
  "projects/project-04-02.jpg|slowmorn-02|1920|1080"
  "projects/project-04-03.jpg|slowmorn-03|1400|1900"
  "projects/project-04-04.jpg|slowmorn-04|1200|1500"
  "projects/project-04-05.jpg|slowmorn-05|1600|1000"
)

download_one() {
  local entry="$1"
  IFS='|' read -r path seed w h <<< "$entry"
  local out="$BASE/$path"
  mkdir -p "$(dirname "$out")"
  if [ -s "$out" ]; then
    echo "skip $path"
    return
  fi
  curl -sL -o "$out" "https://picsum.photos/seed/$seed/$w/$h"
  echo "done $path"
}
export -f download_one
export BASE

printf "%s\n" "${ITEMS[@]}" | xargs -P 6 -I{} bash -c 'download_one "$@"' _ {}
echo "ALL DONE"
