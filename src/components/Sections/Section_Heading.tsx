import React from 'react'

const Section_Heading = ({heading,subheading}: {heading: string,subheading: string}) => {
  return (
    <>
     <h2 className='text-[16px] md:text-[21.74px] text-[#000000] leading-[34px]  tracking-[-0.2px] uppercase'>{heading}</h2>
     {subheading &&  <h5 className='text-[10px] text-[#000000] font-normal leading-[14px] tracking-[1.4px] uppercase mt-1'>{subheading}</h5>}
    </>
  )
}

export default Section_Heading