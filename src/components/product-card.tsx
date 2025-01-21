"use client"

import Image from "next/image"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Product } from "@/types/product"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <Card className="group relative border-0 rounded-none">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity",
              isWishlisted && "opacity-100 text-rose-500",
            )}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={cn("h-5 w-5", isWishlisted && "fill-current")} />
          </Button>
          <div className="absolute left-2 top-2 flex flex-col gap-2">
            {product.isExclusive && (
              <Badge variant="secondary" className="bg-rose-100 text-rose-700 rounded-none">
                VALENTINE&apos;S EXCLUSIVE
              </Badge>
            )}
            {product.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-rose-100 text-rose-700 rounded-none">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg">{product.name}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-primary text-primary mr-1" />
              <span className="text-sm">{product.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            {product.vesselMaterial} • {product.colors[0].name}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-1.5">
              {product.colors.slice(0, 6).map((color) => (
                <div
                  key={color.name}
                  className="h-5 w-5 rounded-full border-2 border-white ring-1 ring-gray-200"
                  style={{ backgroundColor: color.value }}
                  title={color.label}
                />
              ))}
              {product.colors.length > 6 && (
                <div className="h-5 w-5 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs text-gray-600">
                  +{product.colors.length - 6}
                </div>
              )}
            </div>
            <span className="font-medium uppercase tracking-wide text-sm">Starting at ${product.price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

