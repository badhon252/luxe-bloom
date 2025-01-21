"use client"

import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { WishlistHeader } from "./wishlist-header"
import type { Product } from "../types"

interface WishlistDetailProps {
  products: Product[]
  onRemoveProduct: (id: string) => void
  onAddToCart: (id: string) => void
  onBack: () => void
  onDuplicate: () => void
  onDelete: () => void
}

export function WishlistDetail({
  products,
  onRemoveProduct,
  onAddToCart,
  onBack,
  onDuplicate,
  onDelete,
}: WishlistDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4"
    >
      <WishlistHeader itemCount={products.length} onBack={onBack} onDuplicate={onDuplicate} onDelete={onDelete} />

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={() => onRemoveProduct(product.id)}
            onAddToCart={() => onAddToCart(product.id)}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

