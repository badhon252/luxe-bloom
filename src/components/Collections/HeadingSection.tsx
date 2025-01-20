import React from 'react'
import collection3 from "@/../Public/assets/image/collection3.webp"

import Image from 'next/image'

const HeadingSection = () => {
  return (
    <div className='mt-[103px]' >
        <Image src={collection3} alt="collection1" width={1000} height={1000} className='w-full' />
    </div>
  )
}

export default HeadingSection