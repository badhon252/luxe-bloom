'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Testimonial from './Sections/TestimonialSection'

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "DIXIE D'AMELIO",
      handle: "@DIXIEDAMELIO",
      quote: "Always gorgeous.",
      productImage:"/assets/image/testimonial.png",
      productLogo: "/assets/image/t-5.webp",
      productName: "LARGE SQUARE",
      productDescription: "Parisian-Style Box / Red Roses",
      price: "$399",
    },
    {
      name: "VALERIA LIPOVETSKY",
      handle: "@VALERIALIPOVETSKY",
      quote: "Flowers that last up to a year or longer are the dream for someone who can't seem to keep plants alive.",
      productImage:"/assets/image/t-4.webp",
      productLogo: "/assets/image/t-1.webp",
      productName: "FLEUR A PORCELAIN VASE",
      productDescription: "Handcrafted Porcelain / Red Roses",
      price: "$429",
    },
    {
      name: "GIGI HADID",
      handle: "@GIGIHADID",
      quote: "Thank you for your kindness and generosity with your amazing flowers! Forever fan!",
      productImage:"/assets/image/t-3.webp",
      productLogo: "/assets/image/t-2.webp" ,
      productName: "GIA MARBLE VASE",
      productDescription: "Handcarved Marble / White Roses",
      price: "$689",
    },
      {
      name: "John Du",
      handle: "@John",
      quote: "Thank you for your kindness and generosity with your amazing flowers! Forever fan!",
      productImage:"/assets/image/t-1.webp",
      productLogo: "/assets/image/t-2.webp",
      productName: "GIA MARBLE VASE",
      productDescription: "Handcarved Marble / White Roses",
      price: "$669",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-sm tracking-[0.2em] text-gray-600 mb-16">LOVED BY ICONS</h2>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <Testimonial {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2">
          <ChevronLeft className="w-6 h-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2">
          <ChevronRight className="w-6 h-6" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}

