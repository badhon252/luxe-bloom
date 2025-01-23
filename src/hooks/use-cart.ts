"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface CartItem {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [
        {
          id: "1",
          name: "Fleura Gift Box",
          description: "Style : Black w/ Ivory Bow",
          price: 20,
          quantity: 1,
          image: "/assets/image/product1.webp",
        },
        {
          id: "2",
          name: "Fleura Gift Box",  
          description: "Style : Black w/ JB",
          price: 20,
          quantity: 1,
          image: "/assets/image/product5.webp",
        },	
      ],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          if (existingItem) {
            return {
              items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)),
            }
          }
          return { items: [...state.items, { ...item, quantity: 1 }] }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
)

