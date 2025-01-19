"use client"

import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  image: string
  alt: string
}

export function ImageModal({ isOpen, onClose, image, alt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[40vw] max-h-[50vh] p-0 bg-transparent border-none">
        <div className="relative h-[80vh] w-full ">
          <Image
            src={image || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

