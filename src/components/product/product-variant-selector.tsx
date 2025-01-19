"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ProductVariantSelectorProps {
  materials: string
  colors:  { value: string; name: string; meaning: string }[]
  selectedMaterial: string
  selectedColor: string
  onMaterialChange: (material: string) => void
  onColorChange: (color: string) => void
  viewMode: "grid" | "list"
}

export function ProductVariantSelector({
  // materials,
  colors,
  // selectedMaterial,
  selectedColor,
  // onMaterialChange,
  onColorChange,
  viewMode,
}: ProductVariantSelectorProps) {
  return (
    <div className="space-y-6">
      {/* Material Selection */}
      {/* <div className="space-y-4">
        <div className="text-sm uppercase tracking-wider text-gray-500">
          MATERIAL:
          <span className="ml-2 text-gray-900">{selectedMaterial}</span>
        </div>
        <div className="flex gap-4">
          {materials.map((material ) => (
            <button
              key={material.value}
              onClick={() => onMaterialChange(material.value)}
              className={cn(
                "border rounded-full p-4 w-16 h-16 flex items-center justify-center",
                selectedMaterial === material.value
                  ? "border-gray-900"
                  : "border-gray-200"
              )}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full" />
            </button>
          ))}
        </div>
      </div> */}

      {/* Color Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm uppercase tracking-wider text-gray-500">
            COLOR:
            <span className="ml-2 text-gray-900">{selectedColor}</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "text-xs",
                viewMode === "grid" && "bg-gray-100"
              )}
              onClick={() => {console.log("Grid")}}	 
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
              onClick={() => {}}
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
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => onColorChange(color.value)}
              className={cn(
                "flex items-center gap-4",
                viewMode === "list" && "border rounded-lg p-4",
                selectedColor === color.value &&
                  viewMode === "list" &&
                  "border-gray-900"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full border flex-shrink-0",
                  selectedColor === color.value && viewMode === "grid"
                    ? "border-gray-900"
                    : "border-gray-200"
                )}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: color.value }}
                />
              </div>
              {viewMode === "list" && (
                <div className="text-left">
                  <div className="font-medium">{color.name}</div>
                  <div className="text-sm text-gray-500">{color.meaning}</div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

