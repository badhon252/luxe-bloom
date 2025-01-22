"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DuplicateModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function DuplicateModal({ isOpen, onClose, onConfirm }: DuplicateModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl">DUPLICATE LIST</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-center">My Wishlist Copy</h3>
          </div>
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={onClose}>
              CANCEL
            </Button>
            <Button onClick={onConfirm} className="bg-black text-white hover:bg-black/90">
              SAVE COPY
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

