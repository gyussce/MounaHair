#!/bin/bash
# ============================================================================
# Download All Gallery Images for MounaHair Website
# ============================================================================
# Double-click this file on your Mac to download all gallery images from
# the original Mouna African Hair Braiding website.
#
# Images will be saved to img/gallery/ in the MounaHair project folder.
# ============================================================================

# Change to the directory where this script lives (the MounaHair folder)
cd "$(dirname "$0")"

echo ""
echo "=========================================="
echo "  Mouna Hair — Image Downloader"
echo "=========================================="
echo ""
echo "Downloading gallery images to: $(pwd)/img/gallery/"
echo ""

# Create the gallery folder
mkdir -p img/gallery

TOTAL=28
COUNT=0
FAIL=0

download() {
  local file="$1"
  local url="$2"
  COUNT=$((COUNT + 1))
  if curl -sL --fail -o "img/gallery/${file}" "${url}"; then
    printf "  [%2d/%d] ✓ %s\n" "$COUNT" "$TOTAL" "$file"
  else
    printf "  [%2d/%d] ✗ FAILED: %s\n" "$COUNT" "$TOTAL" "$file"
    FAIL=$((FAIL + 1))
  fi
}

echo "--- Homepage Product Images (8) ---"
download "full-medium-boho-knotless.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.06.43_29a97ee0.jpg"

download "small-medium-box-braids.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.09.49_d3974152-768x1024.jpg"

download "stitch-braids.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.14.03_94e28326-768x1024.jpg"

download "feed-in-cornrows.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.14.32_eea66d8d-768x1024.jpg"

download "small-boho-knotless.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.26.09_89da9361-768x1024.jpg"

download "stitch-braids-alternate.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.36.30_9e850be8-768x1024.jpg"

download "full-bob-boho-knotless.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.36.44_bebcb751-768x1024.jpg"

download "stitch-butterfly-cornrows.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.37.18_4bc1ea6a-768x1024.jpg"

echo ""
echo "--- Gallery Page Screenshots (8) ---"
download "knotless-braids-1.png" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-112908.png"

download "xs-box-braids-waist-1.png" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-113243.png"

download "knotless-braids-2.png" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-113211.png"

download "knotless-braids-3.png" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-113641.png"

download "knotless-braids-4.png" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-114030.png"

download "xs-box-braids-waist-2.png" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-114144.png"

download "knotless-braids-5.png" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-114247.png"

download "knotless-braids-6.png" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-113848.png"

echo ""
echo "--- Gallery Page Photos (12) ---"
download "small-waist-knotless.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.25.14_a82acd2c-768x1024.jpg"

download "small-box-braids-butt-length.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.26.38_ca8dca3c-768x1024.jpg"

download "medium-middle-back-boho-knotless.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.27.21_1b24b93d-768x1024.jpg"

download "small-ponytail.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.27.49_564c6499-768x1024.jpg"

download "large-ponytail.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.28.18_aa8d8fe9-768x1024.jpg"

download "small-knotless-butt-length.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.29.33_44a91cb9-768x1024.jpg"

download "jumbo-triangle-knotless.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.30.29_6c38fdb9-768x1024.jpg"

download "small-bob-knotless.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.31.22_d790ef95-768x1024.jpg"

download "senegalese-twist.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.32.36_a94702f8-768x1024.jpg"

download "sew-in.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.33.50_8d18b914-768x1024.jpg"

download "two-braids.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.34.24_5036d84d-768x1024.jpg"

download "small-medium-knotless-waist.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.35.57_50455cbe-768x1024.jpg"

echo ""
echo "=========================================="
if [ "$FAIL" -eq 0 ]; then
  echo "  All $TOTAL images downloaded successfully!"
else
  echo "  Downloaded $((TOTAL - FAIL))/$TOTAL images. $FAIL failed."
  echo "  Re-run this script to retry failed downloads."
fi
echo ""
echo "  Files saved to: $(pwd)/img/gallery/"
echo "  Total files: $(ls img/gallery/ 2>/dev/null | wc -l | tr -d ' ')"
echo "=========================================="
echo ""

# Try to get full-res version of the first image (the thumbs URL may be low-res)
# Re-download full-medium-boho-knotless.jpg with the full-size URL
curl -sL --fail -o "img/gallery/full-medium-boho-knotless.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.06.43_29a97ee0.jpg" 2>/dev/null \
  || curl -sL --fail -o "img/gallery/full-medium-boho-knotless.jpg" \
  "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-09-01-a-13.06.43_29a97ee0-rb48hgk4rblzssgcy1pbil9k0z475q2e3bx2vao96o.jpg" 2>/dev/null

echo "Press any key to close this window..."
read -n 1 -s
