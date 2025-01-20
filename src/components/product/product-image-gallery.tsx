"use client";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { ProductImage } from "@/types/product"; // Adjust path as needed

interface ProductImageGalleryProps {
  images: ProductImage[];
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  return (
    <Carousel
      opts={{
        loop: false, // Consider loop: true if you want infinite loop
        align: "center",
      }}
      className="w-full"
    >
      {images.map((image) => (
        <CarouselItem key={"image.url"}>
          <Image
            src={image.url}
            alt={image.alt}
            width={500}
            height={500}
            className="object-contain"
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
}