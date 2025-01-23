"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

export default function Home() {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: "1",
      name: "Fleura Gift Box",
      description: "Style : Black w/ Ivory Bow",
      price: 20,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Luxe Bloom</h1>
      <Button onClick={handleAddToCart}>Add Item to Cart</Button>
    </main>
  )
}

