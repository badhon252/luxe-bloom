import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import img from "@/../../Public/assets/image/product-faq.webp";

export default function ProductFaq() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center container mx-auto">
     
      <Accordion type="single" collapsible className="w-full md:w-[55%] flex-1 mx-32" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Description</AccordionTrigger>
          <AccordionContent>
            Exclusively designed for the season and nestled in our signature
            porcelain Thalia vase, this romantic arrangement brings together
            Eternity® Garden Roses, Dendrobium Orchids, and Dahlias, all
            hand-picked by botanical experts at our partner farms in Japan. A
            delightful pop of color, this arrangement merges the fleeting beauty
            of fresh flowers with the enduring magic of Venus et Fleur Eternity®
            blooms— it’s a timeless keepsake crafted to enchant for a year or
            more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Product Details</AccordionTrigger>
          <AccordionContent>
            <>
              <strong>Arrangement Size:</strong> 10&quot; x 10&quot; x 12&quot;
              <br>
                <strong>Product Weight:</strong> 4 lbs
                <br>
                  <strong>Material:</strong> Handcrafted Porcelain
                </br>
              </br>
              <strong>Disclaimer:</strong> Please note that variations will
              occur since all of our pieces are uniquely handmade by our partner
              artisans.
            </>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Product Care</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Keep the arrangement in a room-temperature environment.</li>
              <li>
                If dust collects with time, remove it lightly using a duster.
              </li>
              <li>
                Be mindful when carrying the arrangement; it&apos;s a very
                delicate product.
              </li>
              <li>Do not water the arrangement.</li>
              <li>Avoid exposure to direct sunlight.</li>
              <li>Don’t place objects on the flowers.</li>
              <li>
                Keep the flowers in the vase, they are secured there by expert
                florists and will ruin if removed.
              </li>
              <li>
                Avoid contact with light-colored fabric or surfaces as staining
                may occur.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex-1 w-full lg:w-[40%]">
        <Image
          src={img}
          alt="flower"
          width={1200}
          height={1200}
        />
      </div>
    </section>
  );
}
