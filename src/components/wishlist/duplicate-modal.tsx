"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DuplicateModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
}

export function DuplicateModal({ isOpen, onClose, onSave }: DuplicateModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-center text-2xl">DUPLICATE LIST</DialogTitle>
        </DialogHeader>
        <div className="py-6">
          <h3 className="font-serif mb-4">My Wishlist Copy</h3>
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={onClose}>
              CANCEL
            </Button>
            <Button onClick={onSave}>SAVE COPY</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

