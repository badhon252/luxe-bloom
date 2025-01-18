import React from 'react'
import Container from './Container'
import Section_Heading from './Section_Heading'
import Flex from './Flex'
import DiscoverCard from './DiscoverCard'

const Discover = () => {
  return (
    <section>
        <Container>
            <div className='flex justify-center mt-[74px]'>
                <Section_Heading heading="Discover the world of Luxe Bloom" subheading="" />
            </div>
             <Flex>
                <div className='w-[25%]'>
                    <DiscoverCard/>
                </div>
                <div className='w-[25%]'></div>
                <div className='w-[25%]'></div>
                <div className='w-[25%]'></div>
             </Flex>
        </Container>
    </section>
  )
}

export default Discover