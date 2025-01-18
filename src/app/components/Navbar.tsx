import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "@/../Public/imge/logo.png.png"
import Image from 'next/image'

const Navbar = () => {
  return (

    <nav className='bg-[#ECE7E3] py-3 sticky  top-0 z-50'>

        <Container>
            <Flex className='justify-between'>
                <div>
                    <ul className='flex gap-[24px]'>
                        <li className='text-[9px] text-[#000000] font-normal leading-[11px] tracking-[1.2px] uppercase'>Enable Accessibility</li>
                        <li className='text-[9px] text-[#000000] font-normal leading-[11px] tracking-[1.2px] uppercase'>Contact Us</li>
                        <li className='text-[9px] text-[#000000] font-normal leading-[11px] tracking-[1.2px] uppercase'>Boutiques</li>
                    </ul>
                </div>
                <div>
                <ul className='flex gap-[24px]'>
                        <li className='text-[9px] text-[#000000] font-normal leading-[11px] tracking-[1.2px] uppercase'>Wishlist</li>
                        <li className='text-[9px] text-[#000000] font-normal leading-[11px] tracking-[1.2px] uppercase'>Search</li>
                        <li className='text-[9px] text-[#000000] font-normal leading-[11px] tracking-[1.2px] uppercase'>Account</li>
                        <li className='text-[9px] text-[#000000] font-normal leading-[11px] tracking-[1.2px] uppercase'>Cart</li>
                    </ul>
                </div>
            </Flex>
            <div className='flex justify-center mt-3'>
               <Image src={logo} alt="" width={300} height={100}/>
            </div>
            <Flex className='justify-center mt-3'>
                <ul className='flex gap-[200px] cursor-pointer '>
                <li className='text-[10px] text-[#000000] font-normal leading-[11px] tracking-[1.4px] uppercase hover:underline duration-300'>Flowers</li>
                <li className='text-[10px] text-[#000000] font-normal leading-[11px] tracking-[1.4px] uppercase hover:underline duration-300'>Valentine&apos;s Day</li>
                <li className='text-[10px] text-[#000000] font-normal leading-[11px] tracking-[1.4px] uppercase hover:underline duration-300'>Gifts</li>
                <li className='text-[10px] text-[#000000] font-normal leading-[11px] tracking-[1.4px] uppercase hover:underline duration-300'>Explore</li>
                </ul>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar