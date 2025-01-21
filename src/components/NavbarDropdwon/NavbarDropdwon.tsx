import React from 'react';
import Image from 'next/image';
import mini from "@/../public/assets/image/mini_rose.jpg"; // Ensure correct path and lowercase 'public'

const NavbarDropdown = () => {
  return (
    <section className=' bg-white py-14'>
      <div className="container ">
        <div className='flex gap-x-16 justify-center '>
          <div className="w-[110px] h-[110px]  ">
          <Image
              src={mini}
              alt="Rounded image"
              width={100}
              height={100}
              className="w-full h-full rounded-full object-cover "
            />
            <p className='text-[14px] text-[#000000]/70 font-normal leading-[14px] tracking-[1.4px] uppercase mt-3 text-center'>rose</p>
          </div>
          <div className="w-[110px] h-[110px]  ">
          <Image
              src={mini}
              alt="Rounded image"
              width={100}
              height={100}
              className="w-full h-full rounded-full object-cover "
            />
            <p className='text-[14px] text-[#000000]/70 font-normal leading-[14px] tracking-[1.4px] uppercase mt-3 text-center'>rose</p>

          </div>
          <div className="w-[110px] h-[110px]  ">
          <Image
              src={mini}
              alt="Rounded image"
              width={100}
              height={100}
              className="w-full h-full rounded-full object-cover "
            />
            <p className='text-[14px] text-[#000000]/70 font-normal leading-[14px] tracking-[1.4px] uppercase mt-3 text-center'>rose</p>

          </div>
          <div className="w-[110px] h-[110px]  ">
          <Image
              src={mini}
              alt="Rounded image"
              width={100}
              height={100}
              className="w-full h-full rounded-full object-cover "
            />
            <p className='text-[14px] text-[#000000]/70 font-normal leading-[14px] tracking-[1.4px] uppercase mt-3 text-center'>rose</p>

          </div>
        </div>
        <div className='border border-[#000000]/50 w-[60%] mx-auto mt-12 '></div>
        {/* ============list================= */}
        <div className=' flex gap-x-[276px] justify-center mt-7'>
            <div>
                <ul className='flex flex-col gap-y-5'>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                </ul>
            </div>
            <div>
            <ul className='flex flex-col gap-y-5'>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>flowers by vessel</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                </ul>
            </div>
            <div>
            <ul className='flex flex-col gap-y-5'>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>bespoke collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                </ul>
            </div>
            <div>
            <ul className='flex flex-col gap-y-5'>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>by occasion</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                    <li className='text-[12px] text-[#000000]/70 font-normal leading-[14px] uppercase'>all collections</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarDropdown;
