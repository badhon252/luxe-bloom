"use client"
import { useState } from "react"
import Link from "next/link"
import { ProductImageGallery } from "@/components/product/product-image-gallery"
import { ProductVariantSelector } from "@/components/product/product-variant-selector"
import { Button } from "@/components/ui/button"

const product = {
  name: "AMPHORA PORCELAIN VASE",
  price: 429,
  description: "12 Long-Stem Eternity Roses",
  materials: [
    { name: "Black Porcelain", value: "black-porcelain" },
    { name: "Porcelain", value: "porcelain" },
  ],
  colors: [
    {
      name: "Red",
      value: "#FF0000",
      meaning: "Universal Symbol of Love, Romance, Beauty",
    },
    {
      name: "Pure White",
      value: "#FFFFFF",
      meaning: "Purity, Innocence, Honor",
    },
    {
      name: "Blush",
      value: "#FFE4E1",
      meaning: "Appreciation, Elegance, Gratefulness",
    },
    {
      name: "Pink",
      value: "#FFC0CB",
      meaning: "Femininity, Grace, Thoughtfulness",
    },
    {
      name: "Burgundy",
      value: "#800020",
      meaning: "Commitment, Passion, Purity",
    },
    {
      name: "Black",
      value: "#000000",
      meaning: "Elegance, Mystery, Power",
    },
  ],
  images: [
    "/assets/image/product1.webp",
    "/assets/image/product2.webp",
    "/assets/image/product3.jpg",
    "/assets/image/product4.webp",
    "/assets/image/product5.webp",
  ],
}

export default function ProductPage() {
  const [selectedMaterial, setSelectedMaterial] = useState(
    product.materials[0].value
  )
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name)
  
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // const handleMaterialChange = (event: React.ChangeEvent<HTMLSelectElement>) => { 
  //   setSelectedMaterial(event.target.value)
  // }
  // const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedColor(event.target.value)
  // }
  // const handleViewModeChange = (mode: "grid" | "list") => {
  //   setViewMode(mode)
  // }
  // const handleAddToCart = () => {
  //   // Add the selected product to the cart
  // } 
  // const handleBuyNow = () => {
  //   // Add the selected product to the cart
  // }
  // const handleAddToWishlist = () => {
  //   // Add the selected product to the wishlist
  // }
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="grid md:grid-cols-2 gap-8 justify-center">
        <ProductImageGallery images={product.images} />
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-light tracking-wider">
              {product.name}
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-xl">${product.price}</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-600">{product.description}</span>
              <Link href="#" className="text-gray-600 underline">
                Learn More
              </Link>
            </div>
          </div>

          <ProductVariantSelector
            materials={product.materials}
            colors={product.colors}
            selectedMaterial={selectedMaterial}
            selectedColor={selectedColor}
            onMaterialChange={setSelectedMaterial}
            onColorChange={setSelectedColor}
            viewMode={viewMode}
          />

          <Button className="w-full bg-black text-white hover:bg-gray-900">
            ADD TO CART
          </Button>

          <div className="text-center text-sm text-gray-600">
            or 4 interest-free payments of $107.25 USD with{" "}
            <span className="font-semibold">clearpay</span>
          </div>

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
  )
}

