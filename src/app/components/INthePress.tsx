import React from "react";
import Image from "next/image";
import grouimag from "@/../Public/assets/imge/group-2.png";

const INthePress: React.FC = () => {
  return (
    <section className="overflow-hidden w-full">
      <h2 className="text-center text-[10px] text-[#A36968] font-normal leading-[14px] tracking-[1.4px] uppercase mt-[25px]">
        In The Press
      </h2>
      <div className="flex items-center gap-[100px] mt-6 animate-marquee ">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={grouimag}
              alt={`Press logo ${index + 1}`}
              width={116}
              height={30}
            />
          </div>
        ))}

        {[...Array(8)].map((_, index) => (
          <div key={`repeat-${index}`} className="flex-shrink-0">
            <Image
              src={grouimag}
              alt={`Press logo repeated ${index + 1}`}
              width={116}
              height={30}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default INthePress;
