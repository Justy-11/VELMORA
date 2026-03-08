// ===========================================
// VELMORA STOCK CONFIGURATION
// ===========================================
// Edit these values to update product stock levels
// No database required - just update and deploy
// ===========================================

export interface Product {
  id: string
  name: string
  price: number
  stock: number
  description: string
  benefits: string[]
  variants?: { name: string; color: string }[]
  image?: string
}

export const products: Product[] = [
  {
    id: "papaya-lotion",
    name: "RDL Papaya Whitening Hand & Body Lotion 600ml",
    price: 1800,
    stock: 40, // <-- Edit this number to update stock
    description: "Luxurious body lotion enriched with natural papaya extracts for radiant, glowing skin.",
    benefits: [
      "Deep moisturization",
      "Brightens skin tone",
      "Natural papaya extracts",
      "Smooth texture"
    ],
    variants: [
      { name: "Papaya Orange", color: "#FF8A3D" },
      { name: "Papaya Green", color: "#4CAF50" }
    ],
    image: "/images/products/papaya-lotion.jpg"
  },
  {
    id: "papaya-soap",
    name: "Silka Papaya whitening Soap 125g",
    price: 800,
    stock: 40, // <-- Edit this number to update stock
    description: "Gentle cleansing soap with papaya enzymes for naturally brighter skin.",
    benefits: [
      "Gentle cleansing",
      "Exfoliates dead skin",
      "Natural brightening",
      "Suitable for daily use"
    ],
    image: "/images/products/papaya-soap.jpg"
  },
  {
    id: "kojic-soap",
    name: "Kojic San Skin Lightening Soap 65g x 2 bars",
    price: 2000,
    stock: 40, // <-- Edit this number to update stock
    description: "Premium kojic acid formula to reduce dark spots and even out skin tone.",
    benefits: [
      "Reduces dark spots",
      "Evens skin tone",
      "Anti-aging properties",
      "Premium formula"
    ],
    image: "/images/products/kojic-soap.jpg"
  }
]

export const comingSoonProducts = [
  { name: "Vitamin C Serum", icon: "sparkles" },
  { name: "Glutathione Soap", icon: "droplet" },
  { name: "Face Wash", icon: "circle" },
  { name: "Body Scrub", icon: "star" }
]

// WhatsApp configuration
export const WHATSAPP_NUMBER = "+94771234567" // Replace with actual number
export const WHATSAPP_MESSAGE = "Hi! I'm interested in ordering VELMORA skincare products."

// Social media links
export const socialLinks = {
  instagram: "https://instagram.com/velmora",
  tiktok: "https://tiktok.com/@velmora",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}

// Helper function to get stock status
export function getStockStatus(stock: number): { label: string; color: string } {
  if (stock === 0) return { label: "Out of Stock", color: "text-destructive" }
  if (stock <= 10) return { label: "Almost Gone!", color: "text-papaya" }
  if (stock <= 30) return { label: "Limited Stock", color: "text-papaya" }
  return { label: "In Stock", color: "text-leaf" }
}
