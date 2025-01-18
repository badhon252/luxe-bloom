'use client';
import Image from "next/image";
import React, { useState } from "react";
import rose from "@/../Public/imge/rose.jpg";
import hoverImage from "@/../Public/imge/hover.jpg";
import Flex from "./Flex";
import { Heart } from "lucide-react";

const Valentine_Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full border-[1px] border-[#E6E6E6] relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Label */}
      <div className="flex items-center gap-x-[10px] absolute top-5 left-0">
        <p className="text-[9px] text-[#000000] font-normal leading-[11px] tracking-[1.2px] uppercase bg-[#E3CFCF] py-2 px-3">
          valentine's exclusive
        </p>
        <Heart size={20} color="#757575" />
      </div>

      {/* Product Image */}
      <div className="">
        <Image
          src={isHovered ? hoverImage : rose}
          alt="rose"
          width={639}
          height={639}
        />
      </div>

      {/* Product Details */}
      <div className="px-5 pb-3">
        <Flex className="justify-between mt-3">
          <div>
            <p className="text-[10px] text-[#000000] font-normal leading-[14px]">
              Amphora Porcelain Vase
            </p>
          </div>
          <div>
            <p className="text-[10px] text-[#757575] font-normal leading-[11px] tracking-[1.2px]">
              $429
            </p>
          </div>
        </Flex>
        <Flex className="items-center mt-2">
          <p className="text-[10px] text-[#757575] font-normal leading-[11px] tracking-[1.2px]">
            Porcelain
          </p>
          <p className="text-[10px] text-[#757575] font-normal leading-[11px] tracking-[1.2px]">
            . Red
          </p>
        </Flex>
        <ul className="mt-3 flex gap-2">
          {Array.from({ length: 3 }, (_, index) => (
            <li
              key={index}
              className="w-[19px] h-[19px] rounded-full bg-red-500"
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Valentine_Card;
