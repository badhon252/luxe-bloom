"use client"

import Image from "next/image"
import { MinusIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"

export function CartItems() {
  const { items, removeItem, updateQuantity } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id}>
          <div className="flex gap-4 py-4">
            <div className="relative h-24 w-24 flex-shrink-0 bg-gray-50">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-serif text-base">{item.name}</h3>
                <div className="space-y-1 text-sm text-gray-500">
                  {item.description.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-none"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    <MinusIcon className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-none"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <PlusIcon className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-serif">${item.price}</span>
                  <button className="text-sm text-gray-500 hover:text-gray-900" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Separator />
        </div>
      ))}
    </div>
  )
}

