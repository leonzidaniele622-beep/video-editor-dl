#!/bin/bash
set -e
BASE="https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts"
OUT="/app/public/covers"
mkdir -p "$OUT"

declare -A MAP=(
  ["p1"]="$BASE/a8mobdis_17871122991465280.mp4"
  ["p2"]="$BASE/11kqdann_18065347820381251.mp4"
  ["p3"]="$BASE/qmyzvovs_18087636631804441.mp4"
  ["p4"]="$BASE/8e0lfqoy_18089562991807570.mp4"
  ["p5"]="$BASE/oajwj0i9_18409148224139088.mp4"
  ["p6"]="$BASE/5z33exqt_17846058693636080.mp4"
  ["p7"]="$BASE/6vduivfe_17881315395373930.mp4"
  ["p8"]="$BASE/y824csxx_18397226608157742.mp4"
  ["p9"]="$BASE/cv31agvz_18409310233149947.mp4"
  ["p10"]="$BASE/tltrp7ay_18537677278069609.mp4"
  ["p18"]="$BASE/s4z9dt80_blues%20a%20canne%20mozze%20%282%29.mp4"
)

for id in "${!MAP[@]}"; do
  url="${MAP[$id]}"
  echo "=== $id"
  ffmpeg -y -loglevel error -i "$url" \
    -vf "thumbnail=n=120,scale='min(1440,iw)':-2" -frames:v 1 -q:v 3 \
    "$OUT/$id.jpg" && echo "OK $id" || echo "FAIL $id"
done
echo "DONE"
ls -la "$OUT"
