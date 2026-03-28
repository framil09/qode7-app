/**
 * Design Philosophy: Dark Teal Minimal
 * - Dark background (#0b0f1a / #111827) with teal (#1dc9a4) accents
 * - DM Sans for body, Space Mono for numbers/code
 * - Grid mesh backgrounds, radial glows, subtle borders
 * - Clean, professional, modern SaaS aesthetic
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ProdutosSection from "@/components/ProdutosSection";
import ComoFuncionaSection from "@/components/ComoFuncionaSection";
import AboutSection from "@/components/AboutSection";
import SegmentosSection from "@/components/SegmentosSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0b0f1a" }}>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <ProdutosSection />
        <ComoFuncionaSection />
        <AboutSection />
        <SegmentosSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
