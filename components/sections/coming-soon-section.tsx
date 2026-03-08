import { Sparkles, Droplet, CircleDot, Star } from "lucide-react"

const upcomingProducts = [
  { name: "Vitamin C Serum", icon: Sparkles, description: "Powerful antioxidant protection" },
  { name: "Glutathione Soap", icon: Droplet, description: "Premium whitening formula" },
  { name: "Face Wash", icon: CircleDot, description: "Gentle daily cleanser" },
  { name: "Body Scrub", icon: Star, description: "Deep exfoliation treatment" }
]

export function ComingSoonSection() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-leaf font-medium tracking-wider uppercase text-sm mb-4 block">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4 text-balance">
            Expanding Our Range
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're working on bringing you more amazing products. Stay tuned for these exciting additions to the VELMORA family.
          </p>
        </div>

        {/* Upcoming Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {upcomingProducts.map((product) => (
            <div
              key={product.name}
              className="relative group p-6 bg-card rounded-2xl border-2 border-dashed border-border hover:border-papaya/50 transition-colors text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:bg-papaya/10 transition-colors">
                <product.icon className="w-6 h-6 text-muted-foreground group-hover:text-papaya transition-colors" />
              </div>
              <h3 className="font-medium text-charcoal mb-1">{product.name}</h3>
              <p className="text-xs text-muted-foreground">{product.description}</p>
              <span className="absolute top-3 right-3 text-xs font-medium text-papaya bg-papaya/10 px-2 py-0.5 rounded-full">
                Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
