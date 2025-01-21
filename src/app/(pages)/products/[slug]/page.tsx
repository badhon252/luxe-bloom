import ProductPage from '@/components/cards/product-card'
import ProductFaq from '@/components/product/product-faq'
import ProductSlogan from '@/components/product/product-slogan'
import Reviews from '@/components/product/ProductRating'
import ProductRecommendations from '@/components/product/ProductRecommendations'

export default function page() {
  return (
    <div>
      <ProductPage/>
      <ProductSlogan/>
      <ProductFaq/>
      <ProductRecommendations/>
      <Reviews/>
    </div>
  )
}
