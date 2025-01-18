import Image from 'next/image';
import React from 'react';
import heroimg from '@/../Public/imge/hero.jpg';

const Hero = () => {
  return (
    <section className="h-screen bg-[url('https://dailyblooms.com.au/cdn/shop/files/All-blooms-01.jpg?v=1694341071&width=3008')] bg-cover bg-center">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="mt-32">
            <h1 className="text-6xl font-serif mb-6">VENUS DOESN&apos;T MISS.</h1>
            <button className="bg-black text-white px-8 py-3 text-sm hover:bg-black/90 transition-colors">
              SHOP VALENTINE&apos;S GIFTS
            </button>
          </div>
        </div>
      </section>
  );
};

export default Hero;
