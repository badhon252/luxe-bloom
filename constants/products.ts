import type { Product } from "@/types/product"

export const COLORS = [
  { name: "Red", value: "#FF0000", label: "Red" },
  { name: "Pink", value: "#FFC0CB", label: "Pink" },
  { name: "Hot Pink", value: "#FF69B4", label: "Hot Pink" },
  { name: "Dusty Rose", value: "#DC8090", label: "Dusty Rose" },
  { name: "Dusty Lavender", value: "#B57EDC", label: "Dusty Lavender" },
  { name: "Blush", value: "#FFE4E1", label: "Blush" },
  { name: "Pure White", value: "#FFFFFF", label: "Pure White" },
  { name: "Papaya", value: "#FFA07A", label: "Papaya" },
  { name: "Baby Blue", value: "#89CFF0", label: "Baby Blue" },
  { name: "Black", value: "#000000", label: "Black" },
  { name: "Bordeaux", value: "#800020", label: "Bordeaux" },
  { name: "Burgundy", value: "#800020", label: "Burgundy" },
]

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Large Square",
    description: "Eternity roses in a luxurious square vessel that will last a year or more",
    price: 399,
    rating: 4.9,
    category: "ROSES",
    colors: [COLORS[0], COLORS[1], COLORS[5], COLORS[6], COLORS[8], COLORS[9]],
    vesselMaterial: "BLACK CLASSIC",
    vesselShape: "SQUARE",
    images: [
      "https://plus.unsplash.com/premium_photo-1661308274084-5f985f79a9b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["VALENTINE'S EXCLUSIVE"],
    isExclusive: true,
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
  {
    id: "2",
    name: "Le Plein Heart",
    description: "Heart-shaped arrangement of preserved roses in champagne hues",
    price: 1199,
    rating: 5.0,
    category: "ROSES",
    colors: [COLORS[5]],
    vesselMaterial: "BLUSH SUEDE",
    vesselShape: "HEART",
    images: [
      "https://images.unsplash.com/photo-1617624863306-6401d99eefbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
  {
    id: "3",
    name: "Thalia Porcelain Vase",
    description: "Mixed florals in a signature porcelain vessel",
    price: 599,
    rating: 4.8,
    category: "MIXED FLORALS",
    colors: [COLORS[1], COLORS[2], COLORS[6]],
    vesselMaterial: "PORCELAIN",
    vesselShape: "ROUND",
    images: [
      "https://media.istockphoto.com/id/2170222878/photo/flowers-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=ShiHC52_Mei6VsrH09TD-7z6avwshrnY66CNKyNpsXg=",
    ],
    tags: ["JARDIN D'AMOUR"],
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
  {
    id: "4",
    name: "Petite Round",
    description: "Compact arrangement of eternity roses",
    price: 299,
    rating: 4.7,
    category: "ROSES",
    colors: [COLORS[0], COLORS[1], COLORS[6], COLORS[9]],
    vesselMaterial: "BLACK CLASSIC",
    vesselShape: "ROUND",
    images: [
      "https://media.istockphoto.com/id/1251371742/photo/back-yard-with-a-small-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=m85CpuzIhLR-5pSehKlBwfIz8ZJrjnj4eOdtGq2cZtw=",
    ],
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
  {
    id: "5",
    name: "Reflexed Roses Bouquet",
    description: "Elegant bouquet of reflexed roses",
    price: 499,
    rating: 4.9,
    category: "REFLEXED ROSES",
    colors: [COLORS[0], COLORS[5], COLORS[6]],
    vesselMaterial: "GLASS",
    vesselShape: "NARROW",
    images: [
      "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
  {
    id: "6",
    name: "Hydrangea Dream",
    description: "Lush arrangement of preserved hydrangeas",
    price: 699,
    rating: 4.8,
    category: "HYDRANGEAS",
    colors: [COLORS[1], COLORS[4], COLORS[8]],
    vesselMaterial: "WHITE CLASSIC",
    vesselShape: "ROUND",
    images: [
      "https://media.istockphoto.com/id/1328482246/photo/luxurious-baroque-bouquet-beautiful-garden-flowers-and-leaves-on-black-background-pink.jpg?s=1024x1024&w=is&k=20&c=wRScAoCC5L-w-BYcLcxcE9yqbp-M7WCR6dapOIsSONs=",
    ],
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
  {
    id: "7",
    name: "Floral Letter",
    description: "Customizable letter-shaped arrangement",
    price: 899,
    rating: 5.0,
    category: "MIXED FLORALS",
    colors: [COLORS[0], COLORS[1], COLORS[2], COLORS[5], COLORS[6]],
    vesselMaterial: "BLUSH SUEDE",
    vesselShape: "LETTER",
    images: [
      "https://images.unsplash.com/photo-1534602876192-9cbd7a61fbba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    isExclusive: true,
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
  {
    id: "8",
    name: "Petal Perfection",
    description: "Delicate arrangement in a petal-shaped vessel",
    price: 449,
    rating: 4.7,
    category: "ROSES",
    colors: [COLORS[1], COLORS[3], COLORS[5]],
    vesselMaterial: "PORCELAIN",
    vesselShape: "PETAL",
    images: [
      "https://plus.unsplash.com/premium_photo-1676068244665-311d62731f41?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
  {
    id: "9",
    name: "Luxe Rectangle",
    description: "Sleek rectangular arrangement of eternity roses",
    price: 799,
    rating: 4.9,
    category: "ROSES",
    colors: [COLORS[0], COLORS[9], COLORS[10]],
    vesselMaterial: "BLACK SUEDE",
    vesselShape: "RECTANGLE",
    images: [
      "https://images.unsplash.com/photo-1490729342320-34bf3076ddea?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
  {
    id: "10",
    name: "Stone Elegance",
    description: "Modern arrangement in a stone vessel",
    price: 549,
    rating: 4.8,
    category: "MIXED FLORALS",
    colors: [COLORS[6], COLORS[7], COLORS[8]],
    vesselMaterial: "STONE",
    vesselShape: "SQUARE",
    images: [
      "https://images.unsplash.com/photo-1529066244447-256df2d18cac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    variants: [],
    sizes: [],
    reviews: {
      count: 0,
      rating: 0
    },
    image: "",
    variant: ""
  },
]

