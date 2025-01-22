import CollectionBulder from '@/components/Collections/CollectionBulder'
import CollectionFooter from '@/components/Collections/CollectionFooter'
import CollectionPage from '@/components/Collections/collections-page'
import HeadingSection from '@/components/Collections/HeadingSection'
import React from 'react'

const page = () => {
  return (
    <div className='container '>
        <HeadingSection/>
        <CollectionPage/>
        <CollectionBulder/>
        <CollectionFooter/>
    </div>
  )
}

export default page          