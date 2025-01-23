"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface PromotionalMessage {
  id: number
  text: string
}

const promotionalMessages: PromotionalMessage[] = [
  {
    id: 1,
    text: "FREE SHIPPING ON ORDERS $249+ WITH CODE: CUPID",
  },
  {
    id: 2,
    text: "NEW ARRIVALS: SHOP THE LATEST COLLECTION",
  },
  {
    id: 3,
    text: "SAVE 20% ON YOUR FIRST ORDER - SIGN UP NOW",
  },
]

export function PromotionalCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full bg-[#722F37] py-2"
    >
      <CarouselContent>
        {promotionalMessages.map((message) => (
          <CarouselItem key={message.id} className="pl-0">
            <div className="flex h-10 items-center justify-center px-4 text-center text-[10px] md:text-sm font-medium text-white sm:text-base">
              {message.text}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1 h-8 w-8 border-none bg-transparent hover:bg-transparent text-white hover:text-white/80 sm:left-4">
        <ChevronLeft className="h-4 w-4" />
      </CarouselPrevious>
      <CarouselNext className="right-1 h-8 w-8 border-none bg-transparent hover:bg-transparent  text-white hover:text-white/80 sm:right-4">
        <ChevronRight className="h-4 w-4" />
      </CarouselNext>
    </Carousel>
  )
}

