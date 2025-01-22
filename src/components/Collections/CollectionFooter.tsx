import Image from "next/image";
import React from "react";
import slide4 from "@/../Public/assets/image/slide4.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CollectionFooter = () => {
  return (
    <section className="mt-[50px] relative">
      {/* Content Section */}
      <div className="container flex flex-wrap lg:flex-nowrap gap-10 items-center px-4 lg:px-0">
        <div className="w-full lg:w-[618px] h-[300px] lg:h-[554px] relative">
          <Image
            src={slide4}
            alt="Flowers that last a year or more"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="text-[15px] text-[#000000] font-semibold capitalize">
              Flowers That Last A Year Or More
            </h2>
            <p className="text-[15px] text-[#000000] font-normal">
              Our Eternity® Flowers are meticulously preserved using innovative
              techniques that maintain their natural beauty, softness, and
              delicate fragrance. These flowers that last a year require no
              water or maintenance, making them a luxurious and sustainable
              choice for your home or gifting needs.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="text-[15px] text-[#000000] font-semibold capitalize">
              Worldwide Flower Delivery
            </h4>
            <p className="text-[15px] text-[#000000] font-normal">
              Enjoy the convenience of international flower delivery with our
              carefully packaged arrangements, designed to arrive in perfect
              condition. With options like express and standard shipping, you
              can share the luxury of forever flowers anywhere in the world.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="text-[15px] text-[#000000] font-semibold capitalize">
              Sustainable Luxury
            </h4>
            <p className="text-[15px] text-[#000000] font-normal">
              Our preserved flowers are shipped in fully recyclable packaging,
              making them an eco-conscious choice. By choosing flowers that last
              all year, you reduce waste while enjoying year-round elegance.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="text-[15px] text-[#000000] font-semibold capitalize">
              What Makes Our Flowers Special?
            </h4>
            <p className="text-[15px] text-[#000000] font-normal">
              Venus et Fleur takes pride in being the original creator of
              eternal flowers, ensuring that every arrangement retains its
              vibrant colors and soft textures for over a year. These flowers
              offer a unique combination of beauty and practicality, requiring
              no water, sunlight, or maintenance. The result is effortless
              elegance that lasts far beyond the typical lifespan of fresh
              flowers.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="text-[15px] text-[#000000] font-semibold capitalize">
              A Variety of Eternal Flowers
            </h4>
            <p className="text-[15px] text-[#000000] font-normal">
              Our collection features stunning roses in classic red, blush pink,
              and over 20 shades, symbolizing timeless love. Lush hydrangeas add
              elegance, while mixed florals create vibrant, unique displays.
              Soft, romantic peonies complete the selection, offering charm and
              sophistication for any occasion.
            </p>
          </div>
          <button className="text-[15px] text-[#000000] font-normal mt-5 underline">
            View More
          </button>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="py-10 bg-[#F5F4F2] w-full">
        <div className="container  mx-auto lg:pl-[200px]">
          <h3 className="text-[25px] text-[#000000]/90 font-semibold tracking-[1.5px] capitalize text-center lg:text-left">
            Frequently Asked Questions
          </h3>
          <Accordion
            type="single"
            collapsible
            className="w-full lg:w-[60%] mt-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[12px] text-[#000000]/90 font-normal uppercase tracking-[1.5px]">
                What makes Venus et Fleur Valentine&apos;s Day gifts unique?
              </AccordionTrigger>
              <AccordionContent>
                Our Valentine&apos;s Day gifts combine timeless luxury with
                thoughtful design. Featuring Eternity® Flowers and Roses
                preserved to last over a year, customizable arrangements, and
                premium packaging, every gift is crafted to create lasting
                memories.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[12px] text-[#000000]/90 font-normal uppercase tracking-[1.5px]">
                Can I personalize my Valentine&apos;s Day gift?
              </AccordionTrigger>
              <AccordionContent>
                Yes, personalization options are available for most gifts.
                Customize your arrangement with rose colors, initials, custom
                messages, or unique patterns to make your gift truly special.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[12px] text-[#000000]/90 font-normal uppercase tracking-[1.5px]">
                Do you offer same-day delivery for Valentine&apos;s Day?
              </AccordionTrigger>
              <AccordionContent>
                Yes, same-day hand delivery is available in most NY and NJ
                postcodes on Valentine&apos;s Day. Place your order by 2 PM EST
                on February 14 to ensure on-time delivery.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[12px] text-[#000000]/90 font-normal uppercase tracking-[1.5px]">
                When is the last day to order for Valentine&apos;s Day delivery?
              </AccordionTrigger>
              <AccordionContent>
                Standard Shipping: Order by February 7 for on-time delivery.
                Express Shipping: Order by February 11 for delivery by February
                13. Overnight Shipping: Order by February 13 for delivery on
                Valentine&apos;s Day. Same-Day Hand Delivery: Available in
                select NY and NJ postcodes on February 14 until 2 PM EST.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[12px] text-[#000000]/90 font-normal uppercase tracking-[1.5px]">
                Can I add a message to my Valentine&apos;s Day order?
              </AccordionTrigger>
              <AccordionContent>
                Yes, every order can include a personalized message card, making
                your gift even more meaningful.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-[12px] text-[#000000]/90 font-normal uppercase tracking-[1.5px]">
                What if my Valentine&apos;s Day gift doesn&apos;t arrive on
                time?
              </AccordionTrigger>
              <AccordionContent>
                Our team is committed to ensuring on-time delivery for
                Valentine&apos;s Day. If there&apos;s an issue with your order,
                our customer service team will assist promptly to resolve it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CollectionFooter;
