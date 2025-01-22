"use client"

import * as React from "react"
import { X, Search } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SearchSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const topSearches = ["Roses", "Valentine's Day", "Hat Boxes", "Long Stems", "Heart Boxes", "Gift Sets", "Flower Frames"]

const products = [
  {
    name: "Aphrodite Porcelain Vase",
    color: "RED",
    price: "$399",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Large Round",
    color: "RED",
    price: "$399",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Fleura Porcelain Vase",
    color: "RED",
    price: "$429",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Large Square",
    color: "RED",
    price: "$399",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "The Fleur Frame",
    color: "DUSTY ROSE",
    price: "$328",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Terre Travertine Vase",
    color: "PURE WHITE",
    price: "$699",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const collections = ["Eternity Roses", "Reflexed Roses", "Dome Shaped Roses", "Long Stem Eternity Roses"]

const blogPages = [
  "Rose Water: How To Make It, Benefits, and Uses",
  "Rose Tea: Benefits And Advantages",
  "Rose's Scent: What Does A Rose Smell Like?",
  "Sustainability at Venus et Fleur",
]

export default function SearchSheet({ open, onOpenChange }: SearchSheetProps) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery) {
      setIsSearching(true)
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    setIsSearching(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="top" className="h-full w-full border-0 sm:max-w-none">
        <div className="mx-auto max-w-2xl">
          <SheetHeader className="flex-row justify-between items-center mb-8">
            <button onClick={() => onOpenChange(false)} className="text-gray-500 hover:text-gray-700 transition-colors">
              {/* <X className="h-5 w-5" /> */}
              <span className="sr-only">Close search</span>
            </button>
            <SheetTitle className="text-sm font-medium text-gray-500">SEARCH</SheetTitle>
            <div className="w-5" /> {/* Spacer for alignment */}
          </SheetHeader>

          <form onSubmit={handleSearch} className="relative mb-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="SEARCH HERE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 placeholder:text-gray-400 text-base"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Clear search</span>
                </button>
              )}
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>

          {!isSearching ? (
            <div>
              <h2 className="text-sm font-medium text-gray-900 mb-4">TOP SEARCHES</h2>
              <ul className="space-y-3">
                {topSearches.map((search) => (
                  <li key={search}>
                    <button
                      onClick={() => {
                        setSearchQuery(search)
                        setIsSearching(true)
                      }}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {search}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-medium mb-4">PRODUCTS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div key={product.name} className="flex items-center gap-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-500">
                          {product.color} • {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  VIEW ALL 248 PRODUCTS
                </Button>
              </div>

              <div>
                <h2 className="text-sm font-medium mb-4">COLLECTIONS</h2>
                <ul className="space-y-3">
                  {collections.map((collection) => (
                    <li key={collection}>
                      <button className="text-gray-600 hover:text-gray-900 transition-colors">{collection}</button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-medium mb-4">BLOG & PAGES</h2>
                <ul className="space-y-3">
                  {blogPages.map((page) => (
                    <li key={page}>
                      <button className="text-gray-600 hover:text-gray-900 transition-colors">{page}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

