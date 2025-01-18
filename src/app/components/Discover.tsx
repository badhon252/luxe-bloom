import React from "react";
import Container from "./Container";
import Section_Heading from "./Section_Heading";
import Flex from "./Flex";
import DiscoverCard from "./DiscoverCard";

const Discover = () => {
  return (
    <section >
      <Container>
        <div className="flex justify-center mt-[74px]">
          <Section_Heading
            heading="Discover the world of Luxe Bloom"
            subheading=""
          />
        </div>
        <Flex className="mt-7 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[25%]">
            {/* Passing a local image from the public directory */}
            <DiscoverCard
              imgsrc="/imge/hover_rose.jpg" // Local image URL
              title="Rose"
            />
          </div>
          <div className="w-full md:w-[25%]">
            {/* Passing an image URL */}
            <DiscoverCard
              imgsrc="https://cdn.shopify.com/videos/c/o/v/4050546dbc2b4968a77f2a501ba1fd9e.mp4" // External image URL
              title="Lily"
            />
          </div>
          <div className="w-full md:w-[25%]">
            {/* Passing a video URL */}
            <DiscoverCard
              imgsrc="/imge/hover_rose.jpg" // External video URL
              title="Tulip"
            />
          </div>
          <div className="w-full md:w-[25%]">
            {/* Another local image */}
            <DiscoverCard
              imgsrc="/imge/hover_rose.jpg" // Local image URL
              title="Daisy"
            />
          </div>
        </Flex>
        
      </Container>
    </section>
  );
};

export default Discover;
