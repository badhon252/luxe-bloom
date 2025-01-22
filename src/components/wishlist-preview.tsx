"use client"

import { motion } from "framer-motion"
import { useWishlistStore } from "../../store/wishlist-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function WishlistPreview() {
  const { wishlists, setView, setCurrentWishlist } = useWishlistStore()

  const handleViewList = (id: string) => {
    setCurrentWishlist(id)
    setView("detail")
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {wishlists.map((wishlist) => (
        <motion.div
          key={wishlist.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl mb-4">{wishlist.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{wishlist.products.length} products</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {wishlist.products.slice(0, 3).map((product) => (
                  <div key={product.id} className="aspect-square relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
              <Button
                onClick={() => handleViewList(wishlist.id)}
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                VIEW LIST
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

