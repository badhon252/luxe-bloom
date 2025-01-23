"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const recommendedProducts = [
  {
    id: "1",
    name: "Chérie Amour Candle",
    price: 39,
    image: "/assets/image/product7.webp",
  },
  {
    id: "2",
    name: "Chérie Amour Candle",
    price: 39,
    image: "/assets/image/product8.webp",
  },
  {
    id: "3",
    name: "Rose Wine Stopper",
    price: 48,
    image: "/assets/image/product9.webp",
  },
]

export function RecommendedProducts() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-lg">YOU MAY ALSO LIKE</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {recommendedProducts.map((product) => (
          <Card key={product.id} className="rounded-none border-none shadow-none">
            <CardContent className="p-0">
              <div className="relative aspect-square mb-2">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-sm">{product.name}</h3>
                <p className="font-serif text-sm">${product.price}</p>
                <Button variant="outline" size="sm" className="w-full rounded-none text-xs">
                  QUICK ADD
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

