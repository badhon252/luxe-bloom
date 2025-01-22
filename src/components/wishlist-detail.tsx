"use client"

import { motion } from "framer-motion"
import { useWishlistStore } from "../../store/wishlist-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MoreVertical, ArrowLeft, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DuplicateListDialog } from "./duplicate-list-dialog"
import { useState } from "react"
import Image from "next/image"

export function WishlistDetail() {
  const { wishlists, currentWishlist, setView, addToCart, removeFromWishlist, duplicateWishlist, deleteWishlist } =
    useWishlistStore()

  const [showDuplicateDialog, setShowDuplicateDialog] = useState(false)

  const wishlist = wishlists.find((w) => w.id === currentWishlist)

  if (!wishlist) return null

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" onClick={() => setView("preview")} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <h2 className="text-xl">{wishlist.name}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setShowDuplicateDialog(true)}>Duplicate List</DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600"
              onClick={() => {
                deleteWishlist(wishlist.id)
                setView("preview")
              }}
            >
              Delete List
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="relative aspect-square mb-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 z-10"
                    onClick={() => removeFromWishlist(wishlist.id, product.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-serif text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.variant}</p>
                <p className="text-sm mb-4">STARTING AT ${product.price}</p>
                <Button onClick={() => addToCart(product)} className="w-full bg-black text-white hover:bg-gray-800">
                  ADD TO CART
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <DuplicateListDialog
        open={showDuplicateDialog}
        onOpenChange={setShowDuplicateDialog}
        onDuplicate={() => {
          duplicateWishlist(wishlist.id)
          setShowDuplicateDialog(false)
        }}
      />
    </div>
  )
}

