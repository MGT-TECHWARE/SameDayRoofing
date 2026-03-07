#!/bin/bash
# Convert all images in src/images to WebP

DIR="/Users/zackyviriot/Downloads/SameDayRoofing/src/images"
COUNT=0

for file in "$DIR"/*.heic "$DIR"/*.HEIC "$DIR"/*.png "$DIR"/*.PNG "$DIR"/*.jpg "$DIR"/*.JPG "$DIR"/*.jpeg "$DIR"/*.JPEG; do
  [ -f "$file" ] || continue
  filename=$(basename "$file")
  name="${filename%.*}"
  ext="${filename##*.}"
  output="$DIR/${name}.webp"

  # HEIC files: convert to JPEG first via sips, then to WebP
  case "$ext" in
    heic|HEIC)
      tmp="/tmp/${name}.jpg"
      sips -s format jpeg "$file" --out "$tmp" > /dev/null 2>&1
      cwebp -q 80 "$tmp" -o "$output" > /dev/null 2>&1
      rm -f "$tmp"
      ;;
    *)
      cwebp -q 80 "$file" -o "$output" > /dev/null 2>&1
      ;;
  esac

  if [ -f "$output" ]; then
    orig_size=$(du -h "$file" | cut -f1 | xargs)
    new_size=$(du -h "$output" | cut -f1 | xargs)
    echo "$filename ($orig_size) → ${name}.webp ($new_size)"
    COUNT=$((COUNT + 1))
  else
    echo "FAILED: $filename"
  fi
done

echo ""
echo "Converted $COUNT images to WebP."
