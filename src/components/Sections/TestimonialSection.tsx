import Image from "next/image"
import {  Star } from 'lucide-react'
import Link from "next/link"

interface TestimonialProps {
  name: string
  handle: string
  quote: string
  productImage: string
  productLogo: string
  productName: string
  productDescription: string
  price: string
}

export default function Testimonial({
  name,
  handle,
  quote,
  productImage,
  productLogo,
  productName,
  productDescription,
  price,
}: TestimonialProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center mx-auto">
      <div className="w-24 h-24 mb-8">
        <Image
          src={productImage}
          alt={name}
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="font-serif text-xl tracking-wider mb-1">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{handle}</p>
      <p className="text-gray-800 italic mb-4 text-sm max-w-[280px] leading-relaxed">&quot;{quote}&quot;</p>
      <div className="flex gap-1 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <div className="flex items-stretch gap-4 border border-gray-200">
        <Link href={""} className="flex ">
        <div className="w-20 h-20 bg-[#f5f4f2] border-r flex-shrink-0">
          <Image
            src={productLogo}
            alt={productName}
            width={80}
            height={80}
            className="object-cover w-full h-full"
            />
        </div>
        <div className="text-left p-2">
          <h4 className="font-serif uppercase text-sm tracking-wider mb-1">{productName}</h4>
          <p className="text-xs text-gray-600 mb-1">{productDescription}</p>
          <p className="text-gray-900 text-sm">{price}</p>
        </div>
            </Link>
      </div>
    </div>
  )
}

