#!/bin/bash
set -e
BASE="C:/Users/Administrator/Esteban site/public/images"

declare -a ITEMS=(
  "hero/hero-01.jpg|hero-main-01|1200|1500"
  "hero/hero-02.jpg|hero-main-02|900|1150"
  "hero/hero-03.jpg|hero-main-03|800|1000"

  "services/service-01.jpg|svc-concerts|900|1200"
  "services/service-02.jpg|svc-mariages|900|1200"
  "services/service-03.jpg|svc-festivals|900|1200"
  "services/service-04.jpg|svc-prive|900|1200"
  "services/service-05.jpg|svc-entreprises|900|1200"
  "services/service-06.jpg|svc-automobile|900|1200"

  "about/about-01.jpg|about-main|1100|1400"
  "about/about-02.jpg|about-overlap|750|950"

  "contact/contact-photo.jpg|contact-photo|800|1000"

  "selection/selection-01.jpg|sel-01|1000|1300"
  "selection/selection-02.jpg|sel-02|1300|1000"
  "selection/selection-03.jpg|sel-03|1000|1000"
  "selection/selection-04.jpg|sel-04|1000|1400"
  "selection/selection-05.jpg|sel-05|1300|1000"
  "selection/selection-06.jpg|sel-06|1000|1300"
  "selection/selection-07.jpg|sel-07|1000|1000"
  "selection/selection-08.jpg|sel-08|1300|1000"
  "selection/selection-09.jpg|sel-09|1000|1400"
  "selection/selection-10.jpg|sel-10|1000|1300"
  "selection/selection-11.jpg|sel-11|1300|1000"
  "selection/selection-12.jpg|sel-12|1000|1000"

  "collections/festival-horizon/cover.jpg|fh-cover|1400|1750"
  "collections/festival-horizon/01.jpg|fh-01|1920|1080"
  "collections/festival-horizon/02.jpg|fh-02|1000|1300"
  "collections/festival-horizon/03.jpg|fh-03|1300|1000"
  "collections/festival-horizon/04.jpg|fh-04|1000|1300"
  "collections/festival-horizon/05.jpg|fh-05|1600|1000"
  "collections/festival-horizon/06.jpg|fh-06|1000|1300"
  "collections/festival-horizon/07.jpg|fh-07|1300|1000"

  "collections/wedding-story/cover.jpg|ws-cover|1400|1750"
  "collections/wedding-story/01.jpg|ws-01|1920|1080"
  "collections/wedding-story/02.jpg|ws-02|1000|1300"
  "collections/wedding-story/03.jpg|ws-03|1300|1000"
  "collections/wedding-story/04.jpg|ws-04|1000|1300"
  "collections/wedding-story/05.jpg|ws-05|1600|1000"
  "collections/wedding-story/06.jpg|ws-06|1000|1300"
  "collections/wedding-story/07.jpg|ws-07|1300|1000"

  "collections/night-session/cover.jpg|ns-cover|1400|1750"
  "collections/night-session/01.jpg|ns-01|1920|1080"
  "collections/night-session/02.jpg|ns-02|1000|1300"
  "collections/night-session/03.jpg|ns-03|1300|1000"
  "collections/night-session/04.jpg|ns-04|1000|1300"
  "collections/night-session/05.jpg|ns-05|1600|1000"
  "collections/night-session/06.jpg|ns-06|1000|1300"
  "collections/night-session/07.jpg|ns-07|1300|1000"

  "collections/track-day/cover.jpg|td-cover|1400|1750"
  "collections/track-day/01.jpg|td-01|1920|1080"
  "collections/track-day/02.jpg|td-02|1000|1300"
  "collections/track-day/03.jpg|td-03|1300|1000"
  "collections/track-day/04.jpg|td-04|1000|1300"
  "collections/track-day/05.jpg|td-05|1600|1000"
  "collections/track-day/06.jpg|td-06|1000|1300"
  "collections/track-day/07.jpg|td-07|1300|1000"

  "collections/corporate-night/cover.jpg|cn-cover|1400|1750"
  "collections/corporate-night/01.jpg|cn-01|1920|1080"
  "collections/corporate-night/02.jpg|cn-02|1000|1300"
  "collections/corporate-night/03.jpg|cn-03|1300|1000"
  "collections/corporate-night/04.jpg|cn-04|1000|1300"
  "collections/corporate-night/05.jpg|cn-05|1600|1000"
  "collections/corporate-night/06.jpg|cn-06|1000|1300"
  "collections/corporate-night/07.jpg|cn-07|1300|1000"

  "collections/summer-stage/cover.jpg|ss-cover|1400|1750"
  "collections/summer-stage/01.jpg|ss-01|1920|1080"
  "collections/summer-stage/02.jpg|ss-02|1000|1300"
  "collections/summer-stage/03.jpg|ss-03|1300|1000"
  "collections/summer-stage/04.jpg|ss-04|1000|1300"
  "collections/summer-stage/05.jpg|ss-05|1600|1000"
  "collections/summer-stage/06.jpg|ss-06|1000|1300"
  "collections/summer-stage/07.jpg|ss-07|1300|1000"
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

printf "%s\n" "${ITEMS[@]}" | xargs -P 8 -I{} bash -c 'download_one "$@"' _ {}
echo "ALL DONE"
