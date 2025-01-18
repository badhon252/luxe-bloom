"use client"

import Link from "next/link"
// import Image from "next/image"
import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import { useEffect, useState } from "react"
// import logo from '@/../Public/assets/imge/logo.webp'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[rgb(193,178,215)]/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex space-x-8 text-sm">
            
            <Link href="#" className="hover:opacity-70 transition-opacity">
              CONTACT US
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              BOUTIQUES
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex-1 md:flex-none text-center">
            <Link href="/" className="text-2xl font-serif tracking-wider">
             {/* <Image src={logo} alt="Logo" width={100} height={100} /> */}
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Heart className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Search className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <User className="h-5 w-5" />
            </Link>
            <Link href="#" className="flex items-center hover:opacity-70 transition-opacity">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-1 text-sm">2</span>
            </Link>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="hidden md:flex justify-center space-x-12 py-4 text-sm">
          <Link href="#" className="hover:opacity-70 transition-opacity">
            FLOWERS
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            VALENTINE&apos;S DAY
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            GIFTS
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            EXPLORE
          </Link>
        </div>
      </div>
    </nav>
  )
}

