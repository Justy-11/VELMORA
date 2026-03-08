import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Simply browse our products, click the 'Order Now' button on any product, and you'll be connected to us via WhatsApp. Let us know which products you'd like, your delivery address, and we'll take care of the rest!"
  },
  {
    question: "Do you deliver island-wide in Sri Lanka?",
    answer: "Yes! We deliver to all areas across Sri Lanka. Delivery times may vary depending on your location, but we typically dispatch orders within 1-2 business days."
  },
  {
    question: "Are your products authentic?",
    answer: "Absolutely! We guarantee 100% authentic products. All our skincare items are sourced directly from authorized distributors and come with original packaging and seals."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash on Delivery (COD) for your convenience. Bank transfers are also available for customers who prefer to pay in advance."
  },
  {
    question: "What if I receive a damaged product?",
    answer: "Customer satisfaction is our priority. If you receive a damaged or defective product, please contact us immediately via WhatsApp with photos, and we'll arrange a replacement or refund."
  },
  {
    question: "How long before I see results?",
    answer: "Results vary depending on individual skin types and conditions. Most customers begin to notice improvements within 2-4 weeks of consistent use. For best results, we recommend using products as directed daily."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-papaya font-medium tracking-wider uppercase text-sm mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common things our customers ask.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-charcoal hover:text-papaya hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
