'use client'
import Wishlist from "@/components/wishlist/wishlist"
import img from '@/../../Public/assets/image/product1.webp'

const DEMO_PRODUCTS = [
  {
    id: "1",
    name: "Le Mini Round",
    variant: "White Classic / Pink",
    price: 49,
    image: img,
    isAdded: false,
  },
  {
    id: "2",
    name: "Aphrodite Porcelain Vase",
    variant: "One Dozen / Red",
    price: 299,
    image: img,
    isAdded: false,
  },
  {
    id: "3",
    name: "Large Square",
    variant: "Black Classic / Red",
    price: 399,
    image:img,
    isAdded: false,
  },
  {
    id: "4",
    name: "Thalia Porcelain Vase",
    variant: "Mixed Florals / Jardin D'Amour",
    price: 599,
    image: img,
    isAdded: false,
  },
]

export default function WishlistPage() {
  const handleDuplicate = () => {
    console.log("Duplicating list...")
  }

  const handleDelete = () => {
    console.log("Deleting list...")
  }

  return <Wishlist products={DEMO_PRODUCTS} onDuplicate={handleDuplicate} onDelete={handleDelete} />
}

