import React from 'react';
import Image from 'next/image';

import slide5 from '@/../Public/assets/image/slide5.jpg';

const AdoredCreations = () => {
  return (
    <div className="container mx-auto">
      {/* Heading Section */}
      <h1 className="text-[45px] md:text-[65px] text-[#C4B0A9] font-normal text-center mt-8">
        Uncover Our Most Adored Creations
      </h1>
      <p className="text-[10px] text-[#000000] text-center font-normal leading-3 tracking-[1.4px] uppercase underline mt-4 cursor-pointer">
        Explore Top Gifts
      </p>

      {/* Marquee Animation */}
      <div className="relative overflow-hidden mt-10">
        <div className="flex items-center animate-marquee space-x-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={slide5} // Use the same image
                alt={`slide${index + 1}`}
                width={300}
                height={300} // Ensures consistent height
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdoredCreations;
