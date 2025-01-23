"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

export function CartSummary() {
  const { items } = useCart()
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="border-t bg-white p-6 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase">Subtotal</span>
        <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
      </div>
      <Button className="w-full bg-black text-white rounded-none hover:bg-gray-900">CHECKOUT</Button>
      <div className="text-center text-sm text-gray-500 space-y-1">
        <p>
          <span className="font-medium">clearpay</span> available for orders between $1 USD - $1,200 USD
        </p>
        <p>Shipping & taxes calculated at checkout</p>
      </div>
    </div>
  )
}

