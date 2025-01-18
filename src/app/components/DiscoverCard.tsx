"use client";
import Image from "next/image";
import React, { useState } from "react";
import rose from "@/../Public/assets/imge/rose.jpg";

const DiscoverCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered)
  return (
    <div
      className="w-full border-[1px] border-[#E6E6E6] relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative">
        <Image src={rose} alt="rose" width={639} height={639} />
      </div>

      {/* Hover Layer */}
      <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

      {/* Text */}
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <p className="text-[50px] text-red-600 group-hover:text-black font-normal leading-[44px] tracking-[-3px] uppercase transition-colors duration-300">
          rose
        </p>
      </div>
    </div>
  );
};

export default DiscoverCard;
