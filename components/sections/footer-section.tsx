import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"
import { socialLinks } from "@/lib/stock-config"

// TikTok icon component since Lucide doesn't have one
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-to-order", label: "How to Order" },
  { href: "#faq", label: "FAQ" }
]

const socialIcons = [
  { href: socialLinks.instagram, icon: Instagram, label: "Instagram" },
  { href: socialLinks.tiktok, icon: TikTokIcon, label: "TikTok" },
  { href: socialLinks.whatsapp, icon: MessageCircle, label: "WhatsApp" }
]

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/images/velmora-logo.png"
              alt="VELMORA Natural Skincare"
              width={160}
              height={100}
              className="h-auto w-auto max-w-[160px] brightness-0 invert opacity-90"
            />
          </div>

          {/* Tagline */}
          <p className="text-sm text-white/70 mb-8 max-w-md">
            Velmora sources high-quality skincare products from trusted manufacturers.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-papaya transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-10">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-papaya transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-white/10 mb-8" />

          {/* Copyright */}
          <p className="text-sm text-white/60">
            &copy; {currentYear} VELMORA Skincare. All rights reserved.
          </p>
          <p className="text-xs text-white/40 mt-2">
            Premium Natural Skincare | Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  )
}
