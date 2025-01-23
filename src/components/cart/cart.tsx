"use client"

import Image from "next/image"
import { MinusIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"

const recommendedProducts = [
  { id: "4", name: "Rose Wine Stopper", price: 48, image: "" },
  { id: "5", name: "Eternity Rose Votive", price: 59, image: "/placeholder.svg?height=150&width=150" },
  { id: "6", name: "Eternity Rose Candle", price: 59, image: "/placeholder.svg?height=150&width=150" },
  { id: "7", name: "Eternity Rose Candle", price: 59, image: "/placeholder.svg?height=150&width=150" },
  { id: "8", name: "Eternity Rose Candle", price: 59, image: "/placeholder.svg?height=150&width=150" },
]

export function Cart() {
  const { items, removeItem, updateQuantity } = useCart()
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return <div className="text-center py-6 text-red-500">Your cart is empty</div>
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto py-6">
        <div className="space-y-6">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex p-4">
                <div className="relative h-24 w-24 flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-serif text-lg">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                    <p className="font-serif text-lg">${item.price}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-gray-200">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <MinusIcon className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <PlusIcon className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button variant="link" className="text-sm text-gray-500" onClick={() => removeItem(item.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-6" />

        <div>
          <h2 className="font-serif text-xl mb-4">You May Also Like</h2>
          <div className="grid grid-cols-3 gap-4">
            {recommendedProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <div className="relative h-32 w-full mb-2">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-serif text-sm">{product.name}</h3>
                  <p className="font-serif text-sm mt-1">${product.price}</p>
                  <Button variant="outline" size="sm" className="w-full mt-2 rounded-none" >
                    Quick Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Subtotal</span>
          <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
        </div>
        <Button className="w-full bg-black text-white rounded-none hover:bg-gray-900">Checkout</Button>
        <p className="text-center text-sm text-gray-500 mt-4">
          <span className="font-semibold">clearpay</span> available for orders between $1 USD - $1,200 USD
        </p>
        <p className="text-center text-sm text-gray-500">Shipping & taxes calculated at checkout</p>
      </div>
    </div>
  )
}

