import React from "react";
import Flex from "../Flex";
import Link from "next/link";

const LearnMore = () => {
  return (
    <section className="bg-[url('https://dailyblooms.com.au/cdn/shop/files/All-blooms-01.jpg?v=1694341071&width=3008')] bg-cover bg-center py-[100px] relative ">
      <div className="w-full h-full bg-[#000000]/20 absolute top-0 left-0 z-0  backdrop-blur-sm "></div>

      <div className="container mx-auto relative z-10 ">
        <Flex className="justify-between items-center relative ">
          <Link href="#">
            <div className=" hover:scale-95 duration-500">
              <h2 className="text-[28px] text-[#FFFFFF] font-normal leading-[40px] tracking-[-0.05px] uppercase">
                Eternity Flowers
              </h2>
            </div>
          </Link>
          <div className="border-r-[1px] border-[#FFFFFF] h-[512px]"></div>
          <Link href="#">
            <div  className=" hover:scale-95 duration-500" >
              <h2 className="text-[28px] text-[#FFFFFF] font-normal leading-[40px] tracking-[-0.05px] uppercase">
                Our Story
              </h2>
            </div>
          </Link>
          <div className="border-r-[1px] border-[#FFFFFF] h-[512px]"></div>
          <Link href="#">
            <div  className=" hover:scale-95 duration-500">
              <h2 className="text-[28px] text-[#FFFFFF] font-normal leading-[40px] tracking-[-0.05px] uppercase">
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
