"use client";

import { useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductVariantSelector } from "@/components/product-variant-selector";
import { StockNotification } from "@/components/stock-notification";
import { Button } from "@/components/ui/button";
import { Product, ProductVariant, ProductSize } from "@/types/product";
import productImg from "@/../../Public/assets/image/product1.webp"
import productImgSize from "@/../../Public/assets/image/rose.jpg"
import productImgSize2 from "@/../../Public/assets/image/red_46.webp"


// Mock product data
const product: Product = {
  id: "aphrodite-vase",
  name: "APHRODITE PORCELAIN VASE",
  description: "Eternity Flower Arrangement",
  variants: [
    {
      id: "red",
      color: "Red",
      colorCode: "#FF0000",
      meaning: "Universal Symbol of Love, Romance, Beauty",
      inStock: true,
      images: [
        {
          url: productImg,
          color: "red",
          alt: "Red roses in vase",
        },
        {
          url: "/assets/image/product2.webp",
          color: "red",
          alt: "Red roses in vase",
        },
        {
          url: "/assets/image/product9.webp",
          color: "red",
          alt: "Red roses in vase",
        },
      ],
    },

    {
      id: "Burgundy",
      color: "Burgundy",
      colorCode: "#350707",
      meaning: "Purity, Innocence, Honor",
      inStock: true,
      images: [
        {
          url: "/assets/image/product1.webp",
          color: "burgundy",
          alt: "Burgundy roses in vase",
        },
        {
          url: "/assets/image/product7.webp",
          color: "burgundy",
          alt: "Burgundy roses in vase",
        },
        {
          url: "/assets/image/product8.webp",
          color: "burgundy",
          alt: "Burgundy roses in vase",
        },
      ],
    },

    {
      id: "Pink",
      color: "Pink",
      colorCode: "#ff69da",
      meaning: "Universal Symbol of Love, Romance, Beauty",
      inStock: true,
      images: [
        {
          url: "/assets/image/product5.webp",
          color: "pink",
          alt: "Pink roses in vase",
        },
        {
          url: "/assets/image/product4.webp",
          color: "pink",
          alt: "Pink roses in vase",
        },
        {
          url: "/assets/image/product8.webp",
          color: "pink",
          alt: "Pink roses in vase",
        },
      ],
    },

    {
      id: "Pearl",
      color: "Pearl",
      colorCode: "#f6e7d2",
      meaning: "Femininity, Grace, Thoughtfulness",
      inStock: true,
      images: [
        {
          url: "/assets/image/product9.webp",
          color: "pearl",
          alt: "Pearl roses in vase",
        },
        {
          url: "/assets/image/product7.webp",
          color: "pearl",
          alt: "Pearl roses in vase",
        },
        {
          url: "/assets/image/product8.webp",
          color: "pearl",
          alt: "Pearl roses in vase",
        },
      ],
    },
  ],
  sizes: [
    {
      id: "one-dozen",
      name: "One Dozen",
      count: 12,
      price: 399,
      image: productImgSize,
    },
    {
      id: "two-dozen",
      name: "Two Dozen",
      count: 24,
      price: 698,
      image: productImgSize2,
    },
  ],
  reviews: {
    count: 47,
    rating: 5,
  },
  
  price: 0,
  rating: 0,
  category: "ROSES",
  colors: [],
  vesselMaterial: "BLACK CLASSIC",
  vesselShape: "HEART",
  images: []
};

export default function ProductPage() {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants?.[0] || ({} as ProductVariant)
  );
  const [selectedSize, setSelectedSize] = useState<ProductSize>(
    product.sizes?.[0] || ({} as ProductSize)
  );

  const allImages = product.variants?.flatMap((v) => v.images || []) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8 items-center justify-center">
        <div className="flex-2">
          
        <ProductGallery
          images={allImages}
          currentColor={selectedVariant?.color || ""}
        />
        </div>

        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <h1 className="text-4xl font-light tracking-wider">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">${selectedSize.price}</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">
                  {selectedSize.count} Long-Stem {product.description}
                </span>
              </div>
              <Link href="#" className="text-gray-600 underline">
                Learn More
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <Link href="#reviews" className="text-sm text-gray-600 underline">
                {product.reviews.count} Reviews
              </Link>
            </div>
          </div>

          <ProductVariantSelector
            variants={product.variants || []}
            sizes={product.sizes || []}
            selectedVariant={selectedVariant}
            selectedSize={selectedSize}
            onVariantChange={setSelectedVariant}
            onSizeChange={setSelectedSize}
          />

          {selectedVariant.inStock ? (
            <>
              <Button className="w-full bg-black text-white hover:bg-gray-900">
                ADD TO CART
              </Button>
              <div className="text-center text-sm text-gray-600">
                or 4 interest-free payments of $
                {(selectedSize.price / 4).toFixed(2)} USD with{" "}
                <span className="font-semibold">clearpay</span>
              </div>
            </>
          ) : (
            <StockNotification
              productName={product.name}
              variant={selectedVariant.color}
            />
          )}

          <div className="border rounded-lg p-4 text-center">
            <div className="uppercase text-sm tracking-wider mb-2">
              MAKE IT PERSONAL
            </div>
            <div className="text-gray-600">
              Add a complimentary greeting card with any gift.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
