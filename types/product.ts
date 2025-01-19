export interface ProductImage {
  url: string;
  color: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  color: string;
  colorCode: string;
  meaning: string;
  inStock: boolean;
  images: ProductImage[];
}

export interface ProductSize {
  id: string;
  name: string;
  count: number;
  price: number;
  image: string;
}

export interface Product {
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

