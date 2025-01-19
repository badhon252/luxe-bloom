"use client"

import { X } from 'lucide-react'
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  alt: string;
}

export function ImageModal({ isOpen, onClose, image, alt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <div className="relative h-[80vh] w-full">
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

