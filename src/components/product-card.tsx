"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import type { Product } from "@/types/product"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
  onRemove: () => void
}

export function ProductCard({ product, onAddToCart, onRemove }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white p-4 relative group"
    >
      <button
        onClick={onRemove}
        className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="aspect-square relative mb-4">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <h3 className="font-medium mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.variant}</p>
      <p className="text-sm text-gray-500 mb-4">STARTING AT ${product.price}</p>
      <Button onClick={onAddToCart} variant="default" className="w-full bg-black text-white hover:bg-black/90">
        {product.inCart ? "ADDED TO CART" : "ADD TO CART"}
      </Button>
    </motion.div>
  )
}

