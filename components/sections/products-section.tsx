import { products } from "@/lib/stock-config"
import { ProductCard } from "@/components/product-card"
import { AlertCircle } from "lucide-react"

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-papaya font-medium tracking-wider uppercase text-sm mb-4 block">
            Shop Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4 text-balance">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium skincare products, carefully selected to help bring out your natural glow.
          </p>
        </div>

        {/* Limited Stock Notice */}
        <div className="flex items-center justify-center gap-2 mb-10 text-papaya">
          <AlertCircle className="h-5 w-5" />
          <span className="text-sm font-medium">Limited Stock Available - Order Now!</span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
