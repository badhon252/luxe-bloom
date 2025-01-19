import React from "react";
import { Heart, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Section_Heading from "@/components/Sections/Section_Heading";
import ProductCard from "@/components/cards/Valentine_Card";
import Link from "next/link";

const BestSellerItems = () => {
  return (
    <section className="">
      <div className="mt-[55px] relative container mx-auto">
        <Section_Heading
          heading="Cherished Best Sellers"
          subheading="Timeless gifts for unforgettable moments"
        />
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="mt-10 md:mt-6">
                  <Link href="/products/7567ec4a-b10c-48c5-9345-fc73c48a80a0">
                    <ProductCard>
                      <div className="flex items-center gap-x-[10px] absolute top-5 left-5 right-5 *:text-xs ">
                        <div className="w-full">
                          <Heart size={12} color="#757575" />
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <Star size={12} color="#757575" />
                          <span>4.5</span>
                        </div>
                      </div>
                    </ProductCard>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-[18px] md:top-[-10px] right-12 ">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BestSellerItems;
