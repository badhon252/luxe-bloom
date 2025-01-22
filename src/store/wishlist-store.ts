import { create } from "zustand"
import type { Product, WishlistItem } from "@/types/product"
import { toast } from "@/hooks/use-toast"

interface WishlistStore {
  wishlists: WishlistItem[]
  currentWishlist: string | null
  view: "preview" | "detail"
  addToCart: (product: Product) => void
  removeFromWishlist: (wishlistId: string, productId: string) => void
  duplicateWishlist: (wishlistId: string) => void
  deleteWishlist: (wishlistId: string) => void
  setView: (view: "preview" | "detail") => void
  setCurrentWishlist: (id: string | null) => void
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  wishlists: [
    {
      id: "1",
      name: "Flower Bouquet",
      products: [
        {
          id: "1",
          name: "Le Mini Round",
          description: "White Classic / Pink",
          price: 49,
          image: "https://plus.unsplash.com/premium_photo-1661308274084-5f985f79a9b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          variant: "White Classic / Pink",
          variants: [],
          sizes: [],
          reviews: {
            count: 0,
            rating: 0
          },
          rating: 0,
          category: "ROSES",
          colors: [],
          vesselMaterial: "BLACK CLASSIC",
          vesselShape: "HEART",
          images: []
        },
        {
          id: "2",
          name: "Porcelaine Vase",
          description: "White Classic / Pink",
          price: 49,
          image: "https://plus.unsplash.com/premium_photo-1661308274084-5f985f79a9b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          variant: "White Classic / Pink",
          variants: [],
          sizes: [],
          reviews: {
            count: 0,
            rating: 0
          },
          rating: 0,
          category: "ROSES",
          colors: [],
          vesselMaterial: "BLACK CLASSIC",
          vesselShape: "HEART",
          images: []
        },
        {
          id: "3",
          name: "Porcelaine Vase",
          description: "White Classic / Pink",
          price: 49,
          image: "https://plus.unsplash.com/premium_photo-1661308274084-5f985f79a9b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          variant: "White Classic / Pink",
          variants: [],
          sizes: [],
          reviews: {
            count: 0,
            rating: 0
          },
          rating: 0,
          category: "ROSES",
          colors: [],
          vesselMaterial: "BLACK CLASSIC",
          vesselShape: "HEART",
          images: []
        },
        // Add more products...
      ],
    },
  ],
  currentWishlist: null,
  view: "preview",

  addToCart: (product) => {
    // Implementation would connect to your cart store
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  },

  removeFromWishlist: (wishlistId, productId) => {
    set((state) => ({
      wishlists: state.wishlists.map((list) =>
        list.id === wishlistId ? { ...list, products: list.products.filter((p) => p.id !== productId) } : list,
      ),
    }))
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist.",
    })
  },

  duplicateWishlist: (wishlistId) => {
    const wishlist = get().wishlists.find((w) => w.id === wishlistId)
    if (wishlist) {
      const newWishlist = {
        ...wishlist,
        id: Math.random().toString(),
        name: `${wishlist.name} Copy`,
      }
      set((state) => ({
        wishlists: [...state.wishlists, newWishlist],
      }))
      toast({
        title: "Wishlist duplicated",
        description: "A copy of your wishlist has been created.",
      })
    }
  },

  deleteWishlist: (wishlistId) => {
    set((state) => ({
      wishlists: state.wishlists.filter((w) => w.id !== wishlistId),
    }))
    toast({
      title: "Wishlist deleted",
      description: "Your wishlist has been deleted.",
    })
  },

  setView: (view) => set({ view }),
  setCurrentWishlist: (id) => set({ currentWishlist: id }),
}))

