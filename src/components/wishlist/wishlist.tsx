"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { WishlistPreview } from "./_components/wishlist-preview"
import { WishlistDetail } from "./_components/wishlist-detail"
import type { Product, WishlistProps, WishlistStep } from "@/../../types/product"

export default function Wishlist({ products: initialProducts, onDuplicate, onDelete }: WishlistProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [step, setStep] = useState<WishlistStep>("preview")

  const handleRemoveProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const handleAddToCart = (id: string) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, isAdded: true } : p)))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <AnimatePresence mode="wait">
        {step === "preview" ? (
          <WishlistPreview key="preview" products={products} onViewList={() => setStep("detail")} />
        ) : (
          <WishlistDetail
            key="detail"
            products={products}
            onRemoveProduct={handleRemoveProduct}
            onAddToCart={handleAddToCart}
            onBack={() => setStep("preview")}
            onDuplicate={onDuplicate}
            onDelete={onDelete}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

