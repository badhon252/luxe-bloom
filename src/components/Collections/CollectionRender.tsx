import React from 'react'
import Flex from '../Flex'
import { SlidersHorizontal } from 'lucide-react';

const CollectionRender = () => {
  return (
    <section>
        <div className='contiainer'>
            <div>
            <h1 className='text-[41px] text-[#000000] text-center font-normal tracking-[-0.5px] uppercase mt-[30px]'>Shop All Eternity Flowers</h1>
            <p className='text-[13px] text-[#000000] text-center font-normal leading-[20px] tracking-[1.4px]  mt-[6px]'>Explore our selection of Eternity® Flower bouquets and luxury flowers: real, preserved blooms crafted to last a year or more, bringing forever beauty and charm to any space.</p>
            </div>
            <Flex>
                <Flex className=' items-center gap-2 cursor-pointer'>
                    <p className='text-[10px] text-[#000000] font-normal tracking-[1.4px] uppercase'>Show Filters</p>
                    <span>
                    <SlidersHorizontal size={12} />
                    </span>
                </Flex>
                <div></div>
            </Flex>
        </div>
    </section>
  )
}

export default CollectionRender