import Flex from "@/app/components/Flex";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const LoveByIconCard = () => {
  return (
    <div className="w-full text-center">
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src="/assets/imge/testimonial.png"
          width={125}
          height={125}
          alt="Love by icon"
        />
      </div>

      {/* Name */}
      <h2 className="text-sm md:text-base text-[#000000] font-normal leading-[24px] uppercase mt-5">
        GIGI HADID
      </h2>

      {/* Handle */}
      <h5 className="text-xs md:text-sm text-[#000000] font-normal leading-[14px] tracking-[1.4px] uppercase mt-[6px]">
        @gigihadid
      </h5>

      {/* Quote */}
      <p className="text-sm text-[#000000] font-normal leading-[19px] mt-[6px]">
        "Thank you for your kindness and generosity with your amazing flowers!
        Forever fan!"
      </p>

      {/* Stars */}
      <div className="flex justify-center gap-x-2 mt-[6px]">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className="">
            <FaStar className="text-[#D6B280]  text-2xl"  aria-label="Star rating"  />
          </span>
        ))}
      </div>
      <Flex className="items-center  gap-x-4 mt-4">
        <div>
            <Image
            src="/assets/imge/testimonial.png"
            width={60}
            height={60}
            alt="Love by icon"
          />
        </div>
        <div>
            <div className="flex justify-between">
                <h5>Gia Marble Vase</h5>
                <p>$689</p>
            </div>
            <h6>Handcarved Marble / White Roses</h6>
        </div>
      </Flex>
    </div>
  );
};

export default LoveByIconCard;
