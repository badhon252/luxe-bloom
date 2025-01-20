import React from "react";
import Flex from "../Flex";
import Link from "next/link";

const LearnMore = () => {
  return (
    <section className="bg-[url('https://dailyblooms.com.au/cdn/shop/files/All-blooms-01.jpg?v=1694341071&width=3008')] bg-cover bg-center py-[50px] md:py-[150px] relative">
      {/* Background Overlay */}
      <div className="w-full h-full bg-[#000000]/20 absolute top-0 left-0 z-0 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <Flex 
          className="flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-0 relative"
        >
          {/* Eternity Flowers */}
          <Link href="#">
            <div className="hover:scale-95 duration-500 text-center md:text-left">
              <h2 className="text-[20px] md:text-[28px] text-[#FFFFFF] font-normal leading-[30px] md:leading-[40px] tracking-[-0.05px] uppercase">
                Eternity Flowers
              </h2>
            </div>
          </Link>

          {/* Vertical Divider */}
          <div className="hidden md:block border-r-[1px] border-[#FFFFFF] h-[200px] md:h-[512px]"></div>

          {/* Our Story */}
          <Link href="#">
            <div className="hover:scale-95 duration-500 text-center md:text-left">
              <h2 className="text-[20px] md:text-[28px] text-[#FFFFFF] font-normal leading-[30px] md:leading-[40px] tracking-[-0.05px] uppercase">
                Our Story
              </h2>
            </div>
          </Link>

          {/* Vertical Divider */}
          <div className="hidden md:block border-r-[1px] border-[#FFFFFF] h-[200px] md:h-[512px]"></div>

          {/* FAQs */}
          <Link href="#">
            <div className="hover:scale-95 duration-500 text-center md:text-left">
              <h2 className="text-[20px] md:text-[28px] text-[#FFFFFF] font-normal leading-[30px] md:leading-[40px] tracking-[-0.05px] uppercase">
                FAQs
              </h2>
            </div>
          </Link>
        </Flex>
      </div>
    </section>
  );
};

export default LearnMore;
