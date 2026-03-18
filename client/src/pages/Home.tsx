/**
 * Design Philosophy: Minimalist Corporate Modern
 * - Clean, professional aesthetic with ample whitespace
 * - Blue (#0F3A7D) primary color for trust and technology
 * - Green (#10B981) accent for CTAs and highlights
 * - Poppins Bold for headings, Inter Regular for body text
 * - Smooth transitions and subtle animations
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
