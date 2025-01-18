import React from "react";
import { Heart, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Section_Heading from "@/app/components/Section_Heading";
import Container from "@/app/components/Container";
import ProductCard from "@/app/components/Valentine_Card";

const BestSellerItems = () => {
  return (
    <section className=" ">
      <Container>
        <div className="mt-[55px] relative">
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
                    <ProductCard>
                      <div className="flex items-center gap-x-[10px] absolute top-5 left-5 right-5 *:text-xs ">
                        <div className="w-full">
                          <Heart  size={12} color="#757575" />
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <Star size={12} color="#757575" />
                          <span>4.5</span>
                        </div>
                      </div>
                    </ProductCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[18px] md:top-[-10px] left-5 md:left-[620px]   lg:left-[1750px]" />
            <CarouselNext className="absolute top-[18px] md:top-[-10px] right-5" />
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default BestSellerItems;
