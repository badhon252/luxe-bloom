import React from "react";
import Flex from "../Flex";
import smallimage1 from "@/../Public/assets/image/smallimage1.jpg";
import Image from "next/image";

const ProductshipmentExperiance = () => {
  return (
    <section className="container px-4 md:px-8 lg:px-16">
      <div className="w-full pt-10 pb-[100px] bg-[#E5D9D3]">
        <h2 className="text-[28px] sm:text-[35px] md:text-[45px] text-[#000000]/70 text-center font-normal leading-[40px] tracking-[1.4px] uppercase">
          The Venus Experience
        </h2>
        <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#000000]/70 text-center font-normal leading-[19px] mt-[10px] max-w-[686px] mx-auto">
          Immerse in the luxury of our Eternity® flowers and home accents. Transform your spaces into realms of enduring elegance and memory.
        </p>
        <Flex className="flex-wrap md:flex-col lg:flex-row lg:gap-x-10 md:gap-y-10 gap-x-7 justify-between mt-7">
          {/* Column 1 */}
          <div className="w-full sm:w-[45%] md:w-full lg:w-[30%]">
            <div className="w-[55px] h-[55px] bg-white rounded-full mx-auto">
              <Image
                src={smallimage1}
                alt="smallimage1"
                width={70}
                height={70}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-[10px] sm:text-[12px] md:text-[14px] text-[#000000]/70 font-normal leading-[14px] tracking-[1.4px] uppercase text-center mt-3">
              Made To Order
            </p>
            <div className="w-[60%] border border-[#000000]/20 mx-auto mt-3"></div>
            <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#000000]/70 font-normal text-center mt-5 w-[90%] sm:w-[80%] md:w-[300px] mx-auto">
              Each arrangement is meticulously crafted by our skilled floral artists.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-[45%] md:w-full lg:w-[30%]">
            <div className="w-[55px] h-[55px] bg-white rounded-full mx-auto">
              <Image
                src={smallimage1}
                alt="smallimage1"
                width={70}
                height={70}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-[10px] sm:text-[12px] md:text-[14px] text-[#000000]/70 font-normal leading-[14px] tracking-[1.4px] uppercase text-center mt-3">
              Schedule Your Delivery
            </p>
            <div className="w-[60%] border border-[#000000]/20 mx-auto mt-3"></div>
            <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#000000]/70 font-normal text-center mt-5 w-[90%] sm:w-[80%] md:w-[300px] mx-auto">
              At checkout, schedule your delivery at your convenience.
            </p>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-[45%] md:w-full lg:w-[30%]">
            <div className="w-[55px] h-[55px] bg-white rounded-full mx-auto">
              <Image
                src={smallimage1}
                alt="smallimage1"
                width={70}
                height={70}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-[10px] sm:text-[12px] md:text-[14px] text-[#000000]/70 font-normal leading-[14px] tracking-[1.4px] uppercase text-center mt-3">
              Visit a Boutique
            </p>
            <div className="w-[60%] border border-[#000000]/20 mx-auto mt-3"></div>
            <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#000000]/70 font-normal text-center mt-5 w-[90%] sm:w-[80%] md:w-[300px] mx-auto">
              Visit one of our stores and discover a serene space of exquisite beauty.
            </p>
          </div>
        </Flex>
      </div>
    </section>
  );
};

export default ProductshipmentExperiance;
