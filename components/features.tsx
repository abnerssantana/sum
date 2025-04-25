import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Globe, Languages, Smartphone, Zap, CreditCard } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-secondary" />,
      title: "Blockchain-Powered Transfers",
      description: "Faster, cheaper, and more secure money movement using cutting-edge blockchain technology.",
    },
    {
      icon: <Languages className="h-10 w-10 text-secondary" />,
      title: "Support in Portuguese",
      description: "In-language support for Brazilian-American users, making communication seamless.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-secondary" />,
      title: "Multi-Service Platform",
      description: "Includes travel, life, and commercial insurance all in one convenient platform.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-secondary" />,
      title: "Simple Interface",
      description: "Easy-to-use design with no learning curve, perfect for users of all technical abilities.",
    },
    {
      icon: <Shield className="h-10 w-10 text-secondary" />,
      title: "Bank-Level Security",
      description: "Advanced encryption and security protocols to keep your money and data safe.",
    },
    {
      icon: <Globe className="h-10 w-10 text-secondary" />,
      title: "Global Accessibility",
      description: "Access your account and send money from anywhere in the world, anytime.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground">
            SEND US MONEY is a financial solution designed to simplify international money transfers. Our platform
            combines security, affordability, and usability — giving you full control of your finances from the palm of
            your hand.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Why Choose SUM+</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-muted hover:border-secondary/20 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
