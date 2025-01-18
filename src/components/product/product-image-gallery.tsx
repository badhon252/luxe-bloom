"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, Heart } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductImageGalleryProps {
  images: string[]
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="relative flex gap-4"> 
 
      

      {/* Main Image */}
      <div className="relative flex-1">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10"
          onClick={() => {}}
        >
          <Heart className="h-6 w-6" />
        </Button>
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt="Product image"
          width={800}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      
     {/* Thumbnail Navigation */}
      <div className="hidden md:flex flex-col items-center justify-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400"
          onClick={() => setCurrentImage((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
        <div className="flex flex-col gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full",
                currentImage === index ? "bg-gray-800" : "bg-gray-200"
              )}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400"
          onClick={() =>
            setCurrentImage((prev) =>
              prev < images.length - 1 ? prev + 1 : prev
            )
          }
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

