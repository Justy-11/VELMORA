import { Leaf, Heart, Award, Sparkles } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Carefully selected botanical extracts"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Quality you can trust"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Authentic skincare products that truly work"
  },
  {
    icon: Sparkles,
    title: "Visible Results",
    description: "See the difference in weeks"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-papaya font-medium tracking-wider uppercase text-sm mb-4 block">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-6 text-balance">
            Beauty That Comes Naturally
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            VELMORA brings carefully selected skincare products to Sri Lanka with a focus on quality ingredients and affordable beauty. We believe everyone deserves access to premium skincare that truly works, without breaking the bank. The products we offer combine the power of nature with modern skincare science to deliver real results.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-leaf/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-leaf" />
              </div>
              <h3 className="font-medium text-charcoal mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
