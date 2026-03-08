import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProductsSection } from "@/components/sections/products-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { HowToOrderSection } from "@/components/sections/how-to-order-section"
import { ComingSoonSection } from "@/components/sections/coming-soon-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BenefitsSection />
        <HowToOrderSection />
        <ComingSoonSection />
        <FAQSection />
      </main>
      <FooterSection />
    </>
  )
}
