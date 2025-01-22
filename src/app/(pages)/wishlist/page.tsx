"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useWishlistStore } from "../../../store/wishlist-store"
import { WishlistPreview } from "@/components/wishlist-preview"
import { WishlistDetail } from "@/components/wishlist-detail"
import { Toaster } from "@/components/ui/toaster"

export default function WishlistPage() {
  const { view } = useWishlistStore()

  return (
    <div className=" max-w-7xl mx-auto px-4 py-8 pt-20">
      <h1 className="text-4xl font-serif mb-8 ">MY WISHLIST</h1>
      <AnimatePresence mode="wait">
        {view === "preview" ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <WishlistPreview />
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <WishlistDetail />
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster />
    </div>
  )
}

