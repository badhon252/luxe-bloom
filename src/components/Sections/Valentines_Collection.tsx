import React from "react";
import { Heart } from "lucide-react";
import Section_Heading from "./Section_Heading";
import Valentine_Card from "@/components/cards/Valentine_Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const Valentines_Collection = () => {
  return (
    <section className="container mx-auto">
      <div className="mt-[55px] relative ">
        <Section_Heading
          heading="The Valentine’s Collection"
          subheading="Inspired by Cupid himself"
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
                
                  <Valentine_Card>
                    <div className="flex items-center gap-x-[10px] absolute top-5 left-0">
                      <p className="text-[9px] text-[#000000] font-normal leading-[11px] tracking-[1.2px] uppercase bg-[#E3CFCF] py-2 px-3">
                        valentine&apost;s exclusive
                      </p>
                      <Heart size={20} color="#757575" />
                    </div>
                  </Valentine_Card>
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

export default Valentines_Collection;
