import React from 'react'
import LoveByIconCard from '../Card/LoveByIconCard'

const Testimonials = () => {
  return (
    <section className='mt-[50px]'>
      <div className='flex justify-center'>
      <h2 className="text-[10px] text-[#000000] font-normal leading-[14px] tracking-[1.4px] uppercase ">
            Who We Are
          </h2>
      </div>
        <div className='flex justify-between mt-[35px]'>
          <div className='w-[20%]'>
            <LoveByIconCard/>
          </div>
          <div className='w-[20%]'>
            <LoveByIconCard/>
          </div>
          <div className='w-[20%]'>
            <LoveByIconCard/>
          </div>
        </div>
    </section>
  )
}

export default Testimonials