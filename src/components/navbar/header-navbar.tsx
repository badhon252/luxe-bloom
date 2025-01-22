'use client';

import Link from 'next/link';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import NavbarDropdown from '../NavbarDropdwon/NavbarDropdwon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SignIn from '../Account/SignIn';
import CreateAccount from '../Account/CreateAccount';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<'signIn' | 'createAccount'>('signIn'); // Track active modal state

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
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
            <Link
              href="/"
              className="text-3xl font-serif tracking-wider font-extrabold"
            >
              LUXE BLOOM
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
            <Sheet>
              <SheetTrigger>
                <User className="h-5 w-5 cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="w-full lg:min-w-[554px]">
                <div className="flex justify-center mt-10">
                  <div>
                    {/* Modal Selection */}
                    <div className="flex gap-14 mb-10">
                      <button
                        onClick={() => setActiveModal('signIn')}
                        className={`text-sm text-[#000000]/70 font-normal uppercase tracking-[1.4px] ${
                          activeModal === 'signIn' &&
                          'border-b-[2px] border-b-[#d8e437]'
                        }`}
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => setActiveModal('createAccount')}
                        className={`text-sm text-[#000000]/70 font-normal uppercase tracking-[1.4px] ${
                          activeModal === 'createAccount' &&
                          'border-b-[2px] border-b-[#d8e437]'
                        }`}
                      >
                        Create Account
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="mt-10 w-[300px] lg:w-[388px]">
                      {activeModal === 'signIn' ? <SignIn /> : <CreateAccount />}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link
              href="#"
              className="flex items-center hover:opacity-70 transition-opacity"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-1 text-sm">2</span>
            </Link>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="hidden md:flex justify-center space-x-12 py-4 text-sm">
          {['FLOWERS', "VALENTINE'S DAY", 'GIFTS', 'EXPLORE'].map((item, index) => (
            <HoverCard key={index} openDelay={100} closeDelay={100}>
              <HoverCardTrigger className="hover:opacity-70 transition-opacity">
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="w-screen">
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
