export interface ProductVariant {
    id: string
    material: string
    color: string
    price: number
    images: string[]
    description: string
    meaning?: string
  }
  
  export interface ProductColor {
    name: string
    value: string
    meaning: string
  }
  
  export interface ProductMaterial {
    name: string
    value: string
  }
  
  