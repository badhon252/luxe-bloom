import CollectionBulder from '@/components/Collections/CollectionBulder'
import CollectionRender from '@/components/Collections/CollectionRender'
import HeadingSection from '@/components/Collections/HeadingSection'
import React from 'react'

const page = () => {
  return (
    <div className='container '>
        <HeadingSection/>
        <CollectionRender/>
        <CollectionBulder/>
    </div>
  )
}

export default page          