"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { FilterState, ProductCategory, VesselMaterial, VesselShape } from "@/types/product"
import { COLORS } from "../../constants/products"
import { cn } from "@/lib/utils"

interface ProductFiltersProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
}

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    color: true,
    material: true,
    price: true,
    shape: true,
  })

  const categories: ProductCategory[] = ["ROSES", "HYDRANGEAS", "MIXED FLORALS", "REFLEXED ROSES"]

  const materials: VesselMaterial[] = [
    "BLACK CLASSIC",
    "BLACK SUEDE",
    "BLUSH SUEDE",
    "CREAM SUEDE",
    "DUSTY BLUE SUEDE",
    "FLÈCHE DE EROS",
    "GLASS",
    "PORCELAIN",
    "RED SUEDE",
    "STONE",
    "WHITE CLASSIC",
    "WINTER SUEDE",
  ]

  const shapes: VesselShape[] = ["HEART", "LETTER", "NARROW", "PETAL", "RECTANGLE", "ROUND", "SQUARE"]

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="w-full max-w-xs font-serif">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" className="px-2 text-base uppercase tracking-wide" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-4 w-4 mr-2" />
          {isOpen ? "Hide Filters" : "Show Filters"}
        </Button>
        {Object.keys(filters).length > 0 && (
          <Button variant="link" className="text-base" onClick={() => onFilterChange({})}>
            Clear All
          </Button>
        )}
      </div>

      {Object.keys(filters).length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(filters).map(([key, value]) => {
            if (key === "priceRange") {
              const [min, max] = value as [number, number]
              return (
                <Badge key={key} variant="secondary" className="rounded-none">
                  ${min}-${max}
                  <X
                    className="h-3 w-3 ml-1 cursor-pointer"
                    onClick={() => {
                      const newFilters = { ...filters }
                      delete newFilters.priceRange
                      onFilterChange(newFilters)
                    }}
                  />
                </Badge>
              )
            }
            return (
              <Badge key={key} variant="secondary" className="rounded-none">
                {value as string}
                <X
                  className="h-3 w-3 ml-1 cursor-pointer"
                  onClick={() => {
                    const newFilters = { ...filters }
                    delete newFilters[key as keyof FilterState]
                    onFilterChange(newFilters)
                  }}
                />
              </Badge>
            )
          })}
        </div>
      )}

      <div className={isOpen ? "space-y-6" : "hidden"}>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className={cn(
                "w-full justify-start text-sm  lg:text-base font-normal tracking-wide",
                filters.category === category && "bg-gray-100",
              )}
              onClick={() => onFilterChange({ ...filters, category })}
            >
              {category}
            </Button>
          ))}
        </div>

        <Separator />

        <Collapsible open={openSections.color} onOpenChange={() => toggleSection("color")}>
          <CollapsibleTrigger asChild>
            <button className="flex w-full items-center justify-between py-2 text-base uppercase tracking-wide">
              Floral Color
              {openSections.color ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ScrollArea className="h-[200px] pr-4">
              <div className="grid grid-cols-1 gap-2">
                {COLORS.map((color) => (
                  <div key={color.name} className="flex items-center space-x-2">
                    <Checkbox
                      id={color.name}
                      checked={filters.color === color.name}
                      onCheckedChange={() => onFilterChange({ ...filters, color: color.name })}
                    />
                    <label htmlFor={color.name} className="flex items-center text-sm tracking-wide">
                      <span
                        className="h-4 w-4 rounded-full mr-2 ring-1 ring-gray-200"
                        style={{ backgroundColor: color.value }}
                      />
                      {color.label}
                    </label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        <Collapsible open={openSections.material} onOpenChange={() => toggleSection("material")}>
          <CollapsibleTrigger asChild>
            <button className="flex w-full items-center justify-between py-2 text-base uppercase tracking-wide">
              Vessel Material
              {openSections.material ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ScrollArea className="h-[200px] pr-4">
              <div className="space-y-2">
                {materials.map((material) => (
                  <div key={material} className="flex items-center space-x-2">
                    <Checkbox
                      id={material}
                      checked={filters.vesselMaterial === material}
                      onCheckedChange={() => onFilterChange({ ...filters, vesselMaterial: material })}
                    />
                    <label htmlFor={material} className="text-sm tracking-wide">
                      {material}
                    </label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        <Collapsible open={openSections.price} onOpenChange={() => toggleSection("price")}>
          <CollapsibleTrigger asChild>
            <button className="flex w-full items-center justify-between py-2 text-base uppercase tracking-wide">
              Price
              {openSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-2 pt-4">
              <Slider
                defaultValue={[10]}
                max={2199}
                min={10}
                step={10}
                onValueChange={(value) => onFilterChange({ ...filters, priceRange: [value[0], 2199] })}
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm">${filters.priceRange?.[0] || 10}</span>
                <span className="text-sm">$2,199</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        <Collapsible open={openSections.shape} onOpenChange={() => toggleSection("shape")}>
          <CollapsibleTrigger asChild>
            <button className="flex w-full items-center justify-between py-2 text-base uppercase tracking-wide">
              Vessel Shape
              {openSections.shape ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ScrollArea className="h-[200px] pr-4">
              <div className="space-y-2">
                {shapes.map((shape) => (
                  <div key={shape} className="flex items-center space-x-2">
                    <Checkbox
                      id={shape}
                      checked={filters.vesselShape === shape}
                      onCheckedChange={() => onFilterChange({ ...filters, vesselShape: shape })}
                    />
                    <label htmlFor={shape} className="text-sm tracking-wide">
                      {shape}
                    </label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}

