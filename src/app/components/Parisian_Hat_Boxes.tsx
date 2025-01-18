import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import VeideoCard from "./VeideoCard";
import Image from "next/image";
<<<<<<< HEAD
import blur from "@/../Public/imge/blur.jpg";
=======
import blur from "@/../Public/assets/imge/blur.jpg";
>>>>>>> origin/main
import Heading from "./Heading";

const Parisian_Hat_Boxes = () => {
  return (
    <section className="mt-[65px]">
      <Container>
        <Flex className="justify-between flex-col md:flex-row">
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
        </Flex>
      </Container>
    </section>
  );
};

export default Parisian_Hat_Boxes;
