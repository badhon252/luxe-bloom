import React from "react";

const Who_we_are = () => {
  return (
    <div className="relative overflow-hidden ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://www.venusetfleur.com/cdn/shop/videos/c/vp/afe9d337a6ff4209a0b67b69e02128f4/afe9d337a6ff4209a0b67b69e02128f4.HD-720p-2.1Mbps-21242431.mp4?v"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto">
        <div className="relative flex justify-center ">
          <h2 className="text-[10px] text-[#FFFFFF] font-normal leading-[14px] tracking-[1.4px] uppercase pt-10">
            Who We Are
          </h2>
        </div>
        <div className="relative flex justify-center text-center mt-10">
          <div className="pb-[55px]">
            <h4 className="text-[20px] md:text-[28px] text-[#FFFFFF] font-normal leading-[50px] tracking-[-0.05px] uppercase">
              Pioneers of Eternity Flowers
            </h4>
            <h4 className="text-[20px] md:text-[28px] text-[#FFFFFF] font-normal leading-[50px] tracking-[-0.05px] uppercase">
              Luxury That Lasts All Year
            </h4>
            <h4 className="text-[20px] md:text-[28px] text-[#FFFFFF] font-normal leading-[50px] tracking-[-0.05px] uppercase">
              Craftsmanship in Every Petal
            </h4>
            <h4 className="text-[20px] md:text-[28px] text-[#FFFFFF] font-normal leading-[50px] tracking-[-0.05px] uppercase">
              Exclusively Made To Order
            </h4>
            <button className="text-[10px] text-[#FFFFFF] font-normal leading-[14px] tracking-[1.4px] uppercase   py-5 px-12 nd:px-[73px]   border-[1px] border-[#FFFFFF] hover:bg-[#6C1A19] hover:border-[#6C1A19] duration-300 mt-10 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who_we_are;
