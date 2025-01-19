import Hero from "@/components/hero-section/Hero";
import { PromotionalCarousel } from "../Sections/PromotionalCarousel";

export default function HeroSection() {
  return (
    <div className="mt-[-5rem]">
      {/* Hero Section */}
      <Hero />
      <PromotionalCarousel />
    </div>
  );
}
