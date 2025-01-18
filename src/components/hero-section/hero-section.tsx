import Hero from '@/app/components/Hero'
import {Navbar} from '@/components/navbar/header-navbar'

export default function HeroSection() {
  return (
    <div className=''>
        <Navbar/>
        {/* Hero Section */}
        <Hero/>
    </div>
  )
}
