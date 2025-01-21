import Image from 'next/image'
import React from 'react'
import icon1 from "@/../Public/assets/image/bulder2 (4).jpg"
import icon2 from "@/../Public/assets/image/bulder2 (3).jpg"
import icon3 from "@/../Public/assets/image/bulder2 (1).jpg"
import icon4 from "@/../Public/assets/image/bulder2 (2).jpg"

const CollectionBulder = () => {
  return (
    <section >
        <div className=' container flex justify-between flex-wrap md:flex-nowarp gap-y-4'>
            <div className='w-full md:w-[22%] text-center'>
                <div className='flex justify-center'>
                  <Image src={icon1} alt='' width={100} height={100} />
                </div>
                <h1 className='text-base text-[#000000] font-semibold mt-3'>FRESH, FRAGRANT BLOOMS</h1>
                <p className='text-sm text-[#000000]/70 font-normal mt-3'>Our eternity florals offer a fresh, delicate fragrance that surpasses traditional flowers.</p>
            </div>
            <div className='w-full md:w-[22%] text-center'>
                <div className='flex justify-center'>
                  <Image src={icon2} alt='' width={100} height={100} />
                </div>
                <h1 className='text-base text-[#000000] font-semibold mt-3'>SUSTAINABLE LUXURY</h1>
                <p className='text-sm text-[#000000]/70 font-normal mt-3'>We ship your arrangement in fully recyclable packaging. VEF eternity florals require no water or maintenance.</p>
            </div>
            <div className='w-full md:w-[22%] text-center'>
                <div className='flex justify-center'>
                  <Image src={icon3} alt='' width={100} height={100} />
                </div>
                <h1 className='text-base text-[#000000] font-semibold mt-3'>LASTS A YEAR OR MORE</h1>
                <p className='text-sm text-[#000000]/70 font-normal mt-3'>We are the original eternity flowers. Each blossom retains its beauty for one year or more.</p>
            </div>
            <div className='w-full md:w-[22%] text-center'>
                <div className='flex justify-center'>
                  <Image src={icon4} alt='' width={100} height={100} />
                </div>
                <h1 className='text-base text-[#000000] font-semibold mt-3'>WORLDWIDE DELIVERY</h1>
                <p className='text-sm text-[#000000]/70 font-normal mt-3'>Indulge in the luxury of VEF worldwide with international flower delivery.</p>
            </div>
        </div>
    </section>
  )
}

export default CollectionBulder