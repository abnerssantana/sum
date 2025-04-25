import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The app is a game changer. I send money in seconds and the fees are super low.",
      author: "Ana",
      location: "Florida",
      rating: 5,
    },
    {
      quote: "Customer support in Portuguese made me feel safe and understood.",
      author: "Marcos",
      location: "Massachusetts",
      rating: 5,
    },
    {
      quote: "I've tried many remittance apps, but SEND US MONEY is by far the most reliable and user-friendly.",
      author: "Carolina",
      location: "New Jersey",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What People Are Saying</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our users have to say about their experience with SEND US
            MONEY.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-2 border-muted hover:border-secondary/20 transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="border-t bg-muted/10 flex justify-between">
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.author[0]}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
