"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { Product } from "../types"
import Image from "next/image"

interface WishlistPreviewProps {
  products: Product[]
  onViewList: () => void
}

export function WishlistPreview({ products, onViewList }: WishlistPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h2 className="font-serif text-xl mb-1">My Wishlist</h2>
        <p className="text-sm text-gray-600 mb-4">{products.length} products</p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <Button className="w-full font-medium" onClick={onViewList} aria-label="View complete wishlist">
          VIEW LIST
        </Button>
      </div>
    </motion.div>
  )
}

