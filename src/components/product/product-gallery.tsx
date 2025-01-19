"use client"

import { useState } from "react"
import Image from "next/image"
import {  Heart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ImageModal } from "./image-modal"
import { ProductImage } from "@/types/product"
import { HiArrowLongUp , HiArrowLongDown } from "react-icons/hi2";

interface ProductGalleryProps {
  images: ProductImage[] | undefined;
  currentColor: string;
}

export function ProductGallery({ images = [], currentColor }: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const filteredImages = images.filter(img => img.color.toLowerCase() === currentColor.toLowerCase()) || []
  const currentImage = filteredImages[currentImageIndex] || images[0] || { url: "/placeholder.svg", alt: "Product image" }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="relative flex items-center gap-4 h-screen">
     

      {/* Main Image */}
      <div className="relative flex-1">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10"
        >
          <Heart className="h-6 w-6" />
        </Button>
        <button 
          className="w-full"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={currentImage.url || "/placeholder.svg"}
            alt={currentImage.alt}
            width={800}
            height={800}
            className="w-full h-auto object-cover cursor-zoom-in"
            priority
          />
        </button>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={currentImage.url}
        alt={currentImage.alt}
      />

      
       {/* Thumbnail Navigation */}
       <div className="hidden md:flex flex-col items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400"
            onClick={handlePrevImage}
          >
            <HiArrowLongUp className="h-6 w-6" />
          </Button>
          <div className="flex flex-col gap-2">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full",
                  currentImageIndex === index ? "bg-gray-800" : "bg-gray-200"
                )}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400"
            onClick={handleNextImage}
          >
            <HiArrowLongDown className="h-6 w-6" />
          </Button>
        </div>

    </div>
  )
}

