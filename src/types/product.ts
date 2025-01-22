import { StaticImageData } from "next/image";

// product.ts
export interface ProductImage {
  url: string | StaticImageData;
  color: string;
  alt: string;
}



export interface ProductVariant {
  id: string;
  color: string;
  colorCode: string; // Optional: For styling
  meaning: string;
  inStock: boolean;
  images: ProductImage[];
  
}

export interface ProductSize {
  id: string;
  name: string;
  count: number;
  price: number;
  image:  StaticImageData;
}

export interface Product {
  [x: string]: unknown;
  id: string;
  name: string;
  description: string;
  variants: ProductVariant[];
  sizes: ProductSize[];
  reviews: {
    count: number;
    rating: number;
  };
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  rating: number
  category: ProductCategory
  colors: Color[]
  vesselMaterial: VesselMaterial
  vesselShape: VesselShape
  images: string[]
  tags?: string[]
  isExclusive?: boolean
}

export type ProductCategory = "ROSES" | "HYDRANGEAS" | "MIXED FLORALS" | "REFLEXED ROSES"

export interface Color {
  name: string
  value: string
  label: string
}

export type VesselMaterial =
  | "BLACK CLASSIC"
  | "BLACK SUEDE"
  | "BLUSH SUEDE"
  | "CREAM SUEDE"
  | "DUSTY BLUE SUEDE"
  | "FLÈCHE DE EROS"
  | "GLASS"
  | "PORCELAIN"
  | "RED SUEDE"
  | "STONE"
  | "WHITE CLASSIC"
  | "WINTER SUEDE"

export type VesselShape = "HEART" | "LETTER" | "NARROW" | "PETAL" | "RECTANGLE" | "ROUND" | "SQUARE"

export type SortOption = "featured" | "best-selling" | "price-low-high" | "price-high-low"

export interface FilterState {
  category?: ProductCategory
  color?: string
  vesselMaterial?: VesselMaterial
  priceRange?: [number, number]
  vesselShape?: VesselShape
}

export interface WishlistProps {
  products: Product[]
  onDuplicate: () => void
  onDelete: () => void
}

export type WishlistStep = "preview" | "detail"



export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  variant: string
}

export interface WishlistItem {
  id: string
  products: Product[]
  name: string
}

export type WishlistView = "preview" | "detail"


export interface WishList {
  id: string; // Unique ID for the wishlist item
  product: Product; // Or the relevant product data
  quantity: number;  // Or any other relevant property
  name: string;
  image: string;
  // Add any other properties relevant to your wishlist items
}