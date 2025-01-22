"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DuplicateListDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onDuplicate: () => void
}

export function DuplicateListDialog({ open, onOpenChange, onDuplicate }: DuplicateListDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" aria-describedby="duplicate-dialog-description">
        <DialogHeader>
          <DialogTitle className="text-center font-serif text-2xl">DUPLICATE LIST</DialogTitle>
          <p id="duplicate-dialog-description" className="text-center text-muted-foreground">
            Create a copy of your current wishlist
          </p>
        </DialogHeader>
        <div className="py-6">
          <p className="text-center">My Wishlist Copy</p>
        </div>
        <DialogFooter className="flex-row gap-4 sm:justify-center">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            CANCEL
          </Button>
          <Button onClick={onDuplicate} className="bg-black text-white hover:bg-gray-800">
            SAVE COPY
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

