import Hero from "@/app/components/Hero";
import { Navbar } from "@/components/navbar/header-navbar";
import { PromotionalCarousel } from "../Sections/PromotionalCarousel";

export default function HeroSection() {
  return (
    <div className="">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      <PromotionalCarousel />
    </div>
  );
}
