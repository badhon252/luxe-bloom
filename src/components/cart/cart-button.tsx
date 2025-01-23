"use client"

import { ShoppingBagIcon} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

export function CartButton() {
  const { items } = useCart()

  return (
    <Button variant="outline" size="icon" className="relative rounded-none">
      <ShoppingBagIcon className="h-5 w-5" />
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-black text-xs text-white flex items-center justify-center">
          {items.length}
        </span>
      )}
    </Button>
  )
}

