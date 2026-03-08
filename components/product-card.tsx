import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Check } from "lucide-react"
import { type Product, getStockStatus, WHATSAPP_NUMBER } from "@/lib/stock-config"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const stockStatus = getStockStatus(product.stock)
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(
    `Hi! I'd like to order: ${product.name} - Rs ${product.price}`
  )}`

  return (
    <Card className="overflow-hidden bg-card border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-sand">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {/* Stock Badge */}
        <Badge
          className={cn(
            "absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium",
            product.stock === 0
              ? "bg-destructive text-destructive-foreground"
              : product.stock <= 30
              ? "bg-papaya text-white"
              : "bg-leaf text-white"
          )}
        >
          {stockStatus.label}
        </Badge>
      </div>

      <CardContent className="p-6">
        {/* Product Name & Price */}
        <div className="relative mb-3">
          <h3 className="font-medium text-base md:text-lg text-charcoal pr-24 leading-snug">
            {product.name}
          </h3>
          <span className="absolute top-0 right-0 text-lg md:text-xl font-semibold text-papaya whitespace-nowrap">
            Rs {product.price.toLocaleString()}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Benefits */}
        <div className="space-y-1.5 mb-5">
          {product.benefits.slice(0, 3).map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-charcoal/80">
              <Check className="h-4 w-4 text-leaf flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Variants */}
        {product.variants && (
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs text-muted-foreground">Available in:</span>
            <div className="flex gap-1.5">
              {product.variants.map((variant) => (
                <div
                  key={variant.name}
                  className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: variant.color }}
                  title={variant.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Order Button */}
        <Button
          asChild
          className="w-full bg-leaf hover:bg-leaf/90 text-white rounded-full"
          disabled={product.stock === 0}
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            {product.stock === 0 ? "Out of Stock" : "Order Now"}
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
