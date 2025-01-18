import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import INthePress from './components/INthePress'
import Valentines_Collection from './components/Valentines_Collection'
import Parisian_Hat_Boxes from './components/Parisian_Hat_Boxes'
import Discover from './components/Discover'


const page = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <INthePress/>
      <Valentines_Collection/>
      <Parisian_Hat_Boxes/>
      <Discover/>
    </div>
  )
}

export default page

