"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ProductVariant, ProductSize } from "@/types/product"

interface ProductVariantSelectorProps {
  variants: ProductVariant[];
  sizes: ProductSize[];
  selectedVariant: ProductVariant;
  selectedSize: ProductSize;
  onVariantChange: (variant: ProductVariant) => void;
  onSizeChange: (size: ProductSize) => void;
}

export function ProductVariantSelector({
  variants = [],
  sizes = [],
  selectedVariant,
  selectedSize,
  onVariantChange,
  onSizeChange,
}: ProductVariantSelectorProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div className="space-y-4">
        <div className="text-sm uppercase tracking-wider text-gray-500">
          COUNT:
          <span className="ml-2 text-gray-900">{selectedSize.name}</span>
        </div>
        <div className="flex gap-4">
          {sizes.length > 0 ? sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => onSizeChange(size)}
              className={cn(
                "border rounded-lg p-4 text-center",
                selectedSize.id === size.id
                  ? "border-gray-900"
                  : "border-gray-200"
              )}
            >
              <Image
                src={size.image || "/placeholder.svg"}
                alt={size.name}
                width={60}
                height={60}
                className="mx-auto mb-2"
              />
              <div className="text-sm">{size.name}</div>
            </button>
          )) : <div className="text-gray-500">No sizes available</div>}
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm uppercase tracking-wider text-gray-500">
            COLOR:
            <span className="ml-2 text-gray-900">
              {selectedVariant.color}
              {!selectedVariant.inStock && " (NO STOCK)"}
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "text-xs",
                viewMode === "grid" && "bg-gray-100"
              )}
              onClick={() => setViewMode("grid")}
            >
              Grid
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "text-xs",
                viewMode === "list" && "bg-gray-100"
              )}
              onClick={() => setViewMode("list")}
            >
              List
            </Button>
          </div>
        </div>
        <div
          className={cn(
            "grid gap-4",
            viewMode === "grid" ? "grid-cols-6" : "grid-cols-1"
          )}
        >
          {variants.length > 0 ? variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => onVariantChange(variant)}
              className={cn(
                "flex items-center gap-4",
                viewMode === "list" && "border rounded-lg p-4",
                selectedVariant.id === variant.id &&
                  viewMode === "list" &&
                  "border-gray-900"
              )}
              disabled={!variant.inStock}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full border flex-shrink-0",
                  selectedVariant.id === variant.id && viewMode === "grid"
                    ? "border-gray-900"
                    : "border-gray-200",
                  !variant.inStock && "opacity-50"
                )}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: variant.colorCode }}
                />
              </div>
              {viewMode === "list" && (
                <div className="text-left">
                  <div className="font-medium">{variant.color}</div>
                  <div className="text-sm text-gray-500">{variant.meaning}</div>
                </div>
              )}
            </button>
          )) : <div className="text-gray-500">No variants available</div>}
        </div>
      </div>
    </div>
  )
}

