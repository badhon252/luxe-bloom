'use client';

import Link from 'next/link';
import { Heart, User, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import NavbarDropdown from '../NavbarDropdwon/NavbarDropdwon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SignIn from '../Account/SignIn';
import CreateAccount from '../Account/CreateAccount';
import SearchOption from './search';
import { CartSheet } from '../cart/cart-sheet';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<'signIn' | 'createAccount'>('signIn');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 hover:bg-white/90 hover:backdrop-blur-sm pb-2 ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation for Desktop */}
          <div className="hidden md:flex space-x-8 text-sm">
            <Link href="/contact" className="hover:opacity-70 transition-opacity">CONTACT US</Link>
            <Link href="/boutiques" className="hover:opacity-70 transition-opacity">BOUTIQUES</Link>
          </div>

          {/* Center Logo */}
          <div className="flex-1 text-center">
            <Link href="/" className="text-base lg:text-3xl font-serif tracking-wider font-extrabold">LUXE BLOOM</Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-0 md:gap-4">
            <Link href="/wishlist" className="hover:opacity-70 transition-opacity">
              <Heart className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <SearchOption />
            </Link>

            {/* User Profile Modal Trigger */}
            <Sheet>
              <SheetTrigger>
                <User className="h-5 w-5 cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="w-full lg:min-w-[554px]">
                <div className="flex justify-center mt-10">
                  <div>
                    <div className="flex gap-14 mb-10">
                      <button
                        onClick={() => setActiveModal('signIn')}
                        className={`text-sm text-[#000000]/70 font-normal uppercase tracking-[1.4px] ${activeModal === 'signIn' && 'border-b-[2px] border-b-[#d8e437]'}`}
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => setActiveModal('createAccount')}
                        className={`text-sm text-[#000000]/70 font-normal uppercase tracking-[1.4px] ${activeModal === 'createAccount' && 'border-b-[2px] border-b-[#d8e437]'}`}
                      >
                        Create Account
                      </button>
                    </div>
                    <div className="mt-10 w-[300px] lg:w-[388px]">
                      {activeModal === 'signIn' ? <SignIn /> : <CreateAccount />}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Cart Sheet */}
            <CartSheet />
            
            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="block md:hidden p-2 rounded-md hover:bg-gray-200"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu (for smaller screens) */}
        {mobileMenuOpen && (
       <div>
         
           <div className="md:hidden fixed inset-0 bg-white h-screen z-50 p-4 space-y-4 shadow-md rounded-md">
            <Link href="/contact" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={closeMobileMenu}>CONTACT US</Link>
            <Link href="/boutiques" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={closeMobileMenu}>BOUTIQUES</Link>
            <Link href="/collections" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={closeMobileMenu}>FLOWERS</Link>
            <Link href="/valentines" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={closeMobileMenu}>VALENTINE`&apos;S DAY</Link>
            <Link href="/gifts" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={closeMobileMenu}>GIFTS</Link>
            <Link href="/explore" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={closeMobileMenu}>EXPLORE</Link>
            <div className="mt-4">
              <button onClick={() => setMobileMenuOpen(false)} className="text-lg w-full text-center p-2 bg-gray-300 rounded">
                Close Menu
              </button>
            </div>
          </div>
       </div>
        )} 

        {/* Secondary Navigation for Desktop */}
        <div className="hidden md:flex justify-center space-x-12 py-4 text-sm w-full">
          {['FLOWERS', 'VALENTINE\'S DAY', 'GIFTS', 'EXPLORE'].map((text, index) => (
            <HoverCard openDelay={100} closeDelay={100} key={index}>
              <HoverCardTrigger className="hover:opacity-70 transition-opacity">
                <Link href={`/${text.toLowerCase().replace('\'', '').replace(' ', '-')}`} className="hover:opacity-70 transition-opacity">
                  {text}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="relative">
                <div className="w-screen absolute left-[-270%] top-[-5px] border-none">
                  <NavbarDropdown />
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </nav>
  );
}
