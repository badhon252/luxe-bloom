import React from "react";
import Section_Heading from "./Section_Heading";
import Flex from "./Flex";
import Valentine_Card from "./Valentine_Card";
import Container from "./Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Valentines_Collection = () => {
  return (
    <section className=" ">
      <Container>
        <div className="mt-[55px] relative">
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
                    <Valentine_Card />
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

export default Valentines_Collection;
