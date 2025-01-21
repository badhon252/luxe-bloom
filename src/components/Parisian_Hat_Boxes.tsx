import React from "react";
import VeideoCard from "./cards/VeideoCard";
import Image from "next/image";
import blur from "@/../Public/assets/image/blur.jpg";
import Heading from "./Heading";

const Parisian_Hat_Boxes = () => {
  return (
    <section className="mt-[65px] max-w-[80vw] mx-auto">
      <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-[48%]">
            <VeideoCard />
            <div className="mt-3">
            <Heading
              title="Timeless Long Stems"
              subtitle="Crafted to leave them lovestruck"
            />
            </div>
          </div>
          <div className="w-full md:w-[48%] pt-[100px]">
            <Heading
              title="Timeless Long Stems"
              subtitle="Crafted to leave them lovestruck"
            />
            <div className="mt-4">
              <Image
                src={blur}
                alt="rose"
                width={639}
                height={942}
                className="w-full"
              />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Parisian_Hat_Boxes;
