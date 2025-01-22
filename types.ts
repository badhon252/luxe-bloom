export interface Product {
  id: string
  name: string
  variant: string
  price: number
  image: string
  isAdded: boolean
}

export interface WishlistProps {
  products: Product[]
  onDuplicate: () => void
  onDelete: () => void
}

export type WishlistStep = "preview" | "detail"

