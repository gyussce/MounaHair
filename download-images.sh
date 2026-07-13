#!/bin/bash
# Download all gallery images from the original Mouna Hair site
# Run this script from the MounaHair project folder:
#   cd ~/Downloads/MounaHair && bash download-images.sh

set -e
mkdir -p img/gallery

echo "Downloading gallery images from mounaafricanhairbraidingweaves.com..."

# Homepage product section images
curl -sL -o "img/gallery/full-medium-boho-knotless.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-09-01-a-13.06.43_29a97ee0-rb48hgk4rblzssgcy1pbil9k0z475q2e3bx2vao96o.jpg" && echo "  1/28 full-medium-boho-knotless.jpg"
curl -sL -o "img/gallery/small-medium-box-braids.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.09.49_d3974152-768x1024.jpg" && echo "  2/28 small-medium-box-braids.jpg"
curl -sL -o "img/gallery/stitch-braids.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.14.03_94e28326-768x1024.jpg" && echo "  3/28 stitch-braids.jpg"
curl -sL -o "img/gallery/feed-in-cornrows.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.14.32_eea66d8d-768x1024.jpg" && echo "  4/28 feed-in-cornrows.jpg"
curl -sL -o "img/gallery/small-boho-knotless.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.26.09_89da9361-768x1024.jpg" && echo "  5/28 small-boho-knotless.jpg"
curl -sL -o "img/gallery/stitch-braids-red.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.36.30_9e850be8-768x1024.jpg" && echo "  6/28 stitch-braids-red.jpg"
curl -sL -o "img/gallery/full-bob-boho-knotless.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.36.44_bebcb751-768x1024.jpg" && echo "  7/28 full-bob-boho-knotless.jpg"
curl -sL -o "img/gallery/stitch-butterfly-cornrows.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-a-13.37.18_4bc1ea6a-768x1024.jpg" && echo "  8/28 stitch-butterfly-cornrows.jpg"

# Gallery page - screenshot rows
curl -sL -o "img/gallery/knotless-braids-1.png" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-112908.png" && echo "  9/28 knotless-braids-1.png"
curl -sL -o "img/gallery/xs-box-braids-waist-1.png" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-113243.png" && echo " 10/28 xs-box-braids-waist-1.png"
curl -sL -o "img/gallery/knotless-braids-2.png" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-113211.png" && echo " 11/28 knotless-braids-2.png"
curl -sL -o "img/gallery/knotless-braids-3.png" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-113641.png" && echo " 12/28 knotless-braids-3.png"
curl -sL -o "img/gallery/knotless-braids-4.png" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-114030.png" && echo " 13/28 knotless-braids-4.png"
curl -sL -o "img/gallery/xs-box-braids-waist-2.png" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-114144.png" && echo " 14/28 xs-box-braids-waist-2.png"
curl -sL -o "img/gallery/knotless-braids-5.png" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-114247.png" && echo " 15/28 knotless-braids-5.png"
curl -sL -o "img/gallery/knotless-braids-6.png" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/08/Capture-decran-2025-08-27-113848.png" && echo " 16/28 knotless-braids-6.png"

# Gallery page - WhatsApp photo rows
curl -sL -o "img/gallery/small-waist-knotless.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.25.14_a82acd2c-768x1024.jpg" && echo " 17/28 small-waist-knotless.jpg"
curl -sL -o "img/gallery/small-box-braids-butt-length.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.26.38_ca8dca3c-768x1024.jpg" && echo " 18/28 small-box-braids-butt-length.jpg"
curl -sL -o "img/gallery/medium-middle-back-boho-knotless.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.27.21_1b24b93d-768x1024.jpg" && echo " 19/28 medium-middle-back-boho-knotless.jpg"
curl -sL -o "img/gallery/small-ponytail.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.27.49_564c6499-768x1024.jpg" && echo " 20/28 small-ponytail.jpg"
curl -sL -o "img/gallery/large-ponytail.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.28.18_aa8d8fe9-768x1024.jpg" && echo " 21/28 large-ponytail.jpg"
curl -sL -o "img/gallery/small-knotless-butt-length.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.29.33_44a91cb9-768x1024.jpg" && echo " 22/28 small-knotless-butt-length.jpg"
curl -sL -o "img/gallery/jumbo-triangle-knotless.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.30.29_6c38fdb9-768x1024.jpg" && echo " 23/28 jumbo-triangle-knotless.jpg"
curl -sL -o "img/gallery/small-bob-knotless.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.31.22_d790ef95-768x1024.jpg" && echo " 24/28 small-bob-knotless.jpg"
curl -sL -o "img/gallery/senegalese-twist.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.32.36_a94702f8-768x1024.jpg" && echo " 25/28 senegalese-twist.jpg"
curl -sL -o "img/gallery/sew-in.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.33.50_8d18b914-768x1024.jpg" && echo " 26/28 sew-in.jpg"
curl -sL -o "img/gallery/two-braids.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.34.24_5036d84d-768x1024.jpg" && echo " 27/28 two-braids.jpg"
curl -sL -o "img/gallery/small-medium-knotless-waist.jpg" "https://mounaafricanhairbraidingweaves.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-a-15.35.57_50455cbe-768x1024.jpg" && echo " 28/28 small-medium-knotless-waist.jpg"

echo ""
echo "Done! Checking downloaded files..."
ls -lh img/gallery/ | grep -v "^total"
echo ""
echo "Downloaded $(ls img/gallery/ | wc -l) images to img/gallery/"
