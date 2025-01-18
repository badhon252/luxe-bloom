import Image from 'next/image';
import React from 'react';
import heroimg from '@/../Public/imge/hero.jpg';

const Hero = () => {
  return (
    <section>
      <div className=''>
        <Image 
          src={heroimg} 
          alt="Hero Image" 
          width={1920} // Adjust the original width
          height={500} // Adjust the original height
          layout="responsive" 
          objectFit="cover" 
          priority 
          
        />
      </div>
    </section>
  );
};

export default Hero;
