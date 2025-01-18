import React from 'react'

const Heading = ({title,subtitle}: {title: string,subtitle: string}) => {
  return (
    <div>
        <h2 className='text-[27.25px] text-[#000000] font-normal leading-[40px] tracking-[-0.5px] uppercase'>{title}</h2>
        <p className='text-[10px] text-[#000000] font-normal leading-[14px] tracking-[1.4px] uppercase mt-[6px]'>{subtitle}</p>
        <button className='text-[10px] text-[#FFFFFF] font-normal leading-[14px] tracking-[1.4px] uppercase   py-5 px-[68px] bg-[#000000] mt-[22px]'>SHOP NOW</button>
    </div>
  )
}

export default Heading