"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"
import Image from "next/image"

interface ProductCardProps {
  product: Product
  onRemove: () => void
  onAddToCart: () => void
}

export function ProductCard({ product, onRemove, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-lg p-4 relative group"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        onClick={onRemove}
        aria-label={`Remove ${product.name} from wishlist`}
      >
        <X className="w-4 h-4" />
      </Button>

      <div className="aspect-square mb-4 overflow-hidden rounded-md">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.variant}</p>
        <p className="text-sm text-gray-500">STARTING AT ${product.price}</p>
      </div>

      <Button className="w-full mt-4" variant={product.isAdded ? "secondary" : "default"} onClick={onAddToCart}>
        {product.isAdded ? "ADDED TO CART" : "ADD TO CART"}
      </Button>
    </motion.div>
  )
}

