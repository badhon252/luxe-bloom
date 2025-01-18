import React from "react";
import Container from "./Container";
import Section_Heading from "./Section_Heading";
import Flex from "./Flex";
import DiscoverCard from "./DiscoverCard";

const Discover = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-center mt-[74px]">
          <Section_Heading
            heading="Discover the world of Luxe Bloom"
            subheading=""
          />
        </div>
        <Flex className="mt-7">
          <div className="w-[25%]">
            {/* Passing a local image from the public directory */}
            <DiscoverCard
              imgsrc="/imge/hover_rose.jpg" // This is the correct path for a public folder image
              title="Rose"
            />
          </div>
          <div className="w-[25%]">
            {/* Example of passing another local or remote image */}
            <DiscoverCard
                imgsrc="/imge/hover_rose.jpg" 
              title="Lily"
            />
          </div>
          <div className="w-[25%]">
            <DiscoverCard
               imgsrc="/imge/hover_rose.jpg" 
              title="Tulip"
            />
          </div>
          <div className="w-[25%]">
            <DiscoverCard
               imgsrc="/imge/hover_rose.jpg" 
              title="Daisy"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Discover;
