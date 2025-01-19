import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF9F8] py-12 px-4 ">
      <div className=" space-y-12  container mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center">
          <Image
            src="/assets/image/logo.webp"
            alt="Venus ET Fleur Logo"
            width={120}
            height={120}
            className="h-auto w-auto"
          />
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4 text-center">
          <h3 className="text-sm uppercase tracking-widest">Stay in touch</h3>
          <div className="mx-auto flex max-w-md items-center space-x-2 border-b border-gray-200">
            <Input
              type="email"
              placeholder="SIGN UP FOR EMAILS"
              className="border-0 bg-transparent px-0 focus-visible:ring-0"
            />
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="hover:bg-transparent"
            >
              →
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3 *:text-[8px]">
          {/* Information Column */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest">Information</h4>
            <nav className="flex flex-col space-y-2.5">
              <Link href="#" className="text-sm hover:underline">
                What Are Eternity Flowers?
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Blog
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Press
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Corporate Gifting Events
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Careers
              </Link>
            </nav>
          </div>

          {/* Help Column */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest">Help</h4>
            <nav className="flex flex-col space-y-2.5">
              <Link href="#" className="text-sm hover:underline">
                Shipping and Returns
              </Link>
              <Link href="#" className="text-sm hover:underline">
                FAQs
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Contact Us
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest">Social</h4>
            <nav className="flex flex-col space-y-2.5">
              <Link href="#" className="text-sm hover:underline">
                Instagram
              </Link>
              <Link href="#" className="text-sm hover:underline">
                TikTok
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Pinterest
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Youtube
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Facebook
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Twitter
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pt-8 text-xs sm:flex-row sm:space-y-0">
          <p>© 2025 LUXE - BLOOM| All rights reserved</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
            <span>-</span>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <span>-</span>
            <Link href="#" className="hover:underline">
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

