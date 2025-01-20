import ProductPage from '@/components/cards/product-card'
import ProductFaq from '@/components/product/product-faq'
import ProductSlogan from '@/components/product/product-slogan'

export default function page() {
  return (
    <div>
      <ProductPage/>
      <ProductSlogan/>
      <ProductFaq/>
    </div>
  )
}
