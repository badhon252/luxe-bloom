"use client";
import Image from "next/image";
import React, { useState } from "react";


interface DiscoverCardProps {
  imgsrc: string;
  title: string;
}

import rose from "@/../Public/assets/imge/rose.jpg";

const DiscoverCard: React.FC<DiscoverCardProps> = ({ imgsrc, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full border-[1px] border-[#E6E6E6] relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div
        className={`relative transition-all duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image src={imgsrc} alt={title} width={639} height={639} />
      </div>

      {/* Gradient Hover Layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#B37676] via-[#8C4F4F] to-[#B37676] transition-opacity duration-500 ${
          isHovered ? "opacity-80" : "opacity-0"
        }`}
      ></div>

      {/* Text */}
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <p className="text-[50px] text-[#FFFFFF] font-normal leading-[44px] tracking-[-3px] uppercase transition-opacity duration-500">
          {title}
        </p>
      </div>
    </div>
  );
};

export default DiscoverCard;
