import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { socialLinks } from "@/lib/stock-config"

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 flex items-center justify-center overflow-hidden bg-cream">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-papaya/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-leaf/20 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="VELMORA Natural Skincare"
              width={360}
              height={220}
              className="h-auto w-auto max-w-[320px] md:max-w-[420px]"
              priority
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-charcoal mb-6 text-balance">
            Natural Glow Starts Here
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed text-pretty">
            Premium skincare products carefully selected to help your skin glow naturally.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-papaya hover:bg-papaya/90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-papaya/25 transition-all hover:shadow-xl hover:shadow-papaya/30"
            >
              <Link href="#products">View Products</Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-leaf text-leaf hover:bg-leaf hover:text-white px-8 py-6 text-lg rounded-full transition-all"
            >
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--sand)"
          />
        </svg>
      </div>
    </section>
  )
}
