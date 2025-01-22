"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useState } from "react"
import SearchSheet from "./search-sheet"

export default function SearchOption() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="p-4">
      <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} className="hover:bg-transparent">
        <Search className="h-5 w-5" />
        <span className="sr-only">Open search</span>
      </Button>

      <SearchSheet open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  )
}

