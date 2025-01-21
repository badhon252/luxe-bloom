import ProductPage from '@/components/cards/product-card'
import AdoredCreations from '@/components/product/AdoredCreations'
import ProductFaq from '@/components/product/product-faq'
import ProductSlogan from '@/components/product/product-slogan'
import ReviewsSection from '@/components/product/ProductRating'
import ProductshipmentExperiance from '@/components/product/ProductshipmentExperiance'

export default function page() {
  return (
    <div>
      <ProductPage/>
      <ProductSlogan/>
      <ProductFaq/>
      <ProductshipmentExperiance/>
      <AdoredCreations/>
      <ReviewsSection/>
    </div>
  )
}
