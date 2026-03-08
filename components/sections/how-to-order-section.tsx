import { Button } from "@/components/ui/button"
import { MessageCircle, ShoppingBag, Send, Truck } from "lucide-react"
import { socialLinks } from "@/lib/stock-config"

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Choose Your Products",
    description: "Browse our selection and pick the products that suit your skin type and goals."
  },
  {
    number: "02",
    icon: Send,
    title: "Send WhatsApp Message",
    description: "Click the order button to send us a message with your selected products."
  },
  {
    number: "03",
    icon: Truck,
    title: "Island-wide Delivery",
    description: "We deliver across Sri Lanka. Your products will arrive safely at your doorstep."
  }
]

export function HowToOrderSection() {
  return (
    <section id="how-to-order" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-papaya font-medium tracking-wider uppercase text-sm mb-4 block">
            Easy Ordering
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4 text-balance">
            How to Order
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting your favorite VELMORA products is simple and convenient. Just follow these easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              {/* Step Number */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-papaya flex items-center justify-center shadow-lg shadow-papaya/25">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <span className="text-xs font-medium text-papaya tracking-wider">STEP {step.number}</span>
              <h3 className="font-medium text-lg text-charcoal mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Large CTA Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-leaf hover:bg-leaf/90 text-white px-10 py-7 text-lg rounded-full shadow-lg shadow-leaf/25 transition-all hover:shadow-xl hover:shadow-leaf/30"
          >
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-6 w-6" />
              Order via WhatsApp
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            We typically respond within minutes during business hours
          </p>
        </div>
      </div>
    </section>
  )
}
