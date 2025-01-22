"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface SearchOverlayProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const topSearches = ["Roses", "Valentine's Day", "Hat Boxes", "Long Stems", "Heart Boxes", "Gift Sets", "Flower Frames"]

export default function SearchOverlay({ open, onOpenChange }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0">
        <div className="p-6">
          {/* <div className="flex items-center justify-between mb-8">
            <button onClick={() => onOpenChange(false)} className="text-gray-500 hover:text-gray-700 transition-colors">
              <X className="h-5 w-5" />
              <span className="sr-only">Close search</span>
            </button>
            <span className="text-sm font-medium text-gray-500">SEARCH</span>
            <div className="w-5" /> 
          </div> */}

          <form onSubmit={handleSearch} className="relative mb-8">
            <Input
              type="search"
              placeholder="SEARCH HERE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 placeholder:text-gray-400 text-base"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
          </form>

          <div>
            <h2 className="text-sm font-medium text-gray-900 mb-4">TOP SEARCHES</h2>
            <ul className="space-y-3">
              {topSearches.map((search) => (
                <li key={search}>
                  <button
                    onClick={() => {
                      setSearchQuery(search)
                      // Handle search logic here
                    }}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {search}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

