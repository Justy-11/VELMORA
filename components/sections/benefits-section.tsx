import { Sun, Droplets, Leaf, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Sun,
    title: "Brightens Skin",
    description: "Helps to enhance your natural glow and promote a more radiant, even-looking complexion.",
    color: "bg-papaya/10 text-papaya"
  },
  {
    icon: Droplets,
    title: "Smooth Texture",
    description: "Experience silky smooth skin with our deeply hydrating and gentle exfoliating products.",
    color: "bg-leaf/10 text-leaf"
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Botanical extracts and natural ingredients you can trust.",
    color: "bg-papaya/10 text-papaya"
  },
  {
    icon: Sparkles,
    title: "Healthy Glow",
    description: "Reveal your skin's natural radiance with consistent use of our premium skincare range.",
    color: "bg-leaf/10 text-leaf"
  }
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-leaf font-medium tracking-wider uppercase text-sm mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4 text-balance">
            The VELMORA Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our products special and why thousands trust us for their skincare journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-5 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${benefit.color}`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-charcoal mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
