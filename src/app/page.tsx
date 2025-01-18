
import INthePress from '../components/INthePress'
import Valentines_Collection from '@/components/Sections/Valentines_Collection'
import Parisian_Hat_Boxes from '../components/Parisian_Hat_Boxes'
import Discover from '../components/Sections/Discover'
import HeroSection from '@/components/hero-section/hero-section'
import Who_we_are from '@/components/Sections/Who_we_are'
import BestSellerItems from '@/components/Sections/BestSellerItems'


const page = () => {
  return (
    <div>
      <HeroSection/>
      <INthePress/>
      <Valentines_Collection/>
      <Parisian_Hat_Boxes/>
      <Discover/>
      <BestSellerItems/>
      <Who_we_are/>
    </div>
  )
}

export default page

