import { Button } from "@/components/ui/button"

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To make global financial transactions simple, secure, and accessible — empowering users to manage their
              money confidently, wherever they are.
            </p>
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90">Learn More About Us</Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-muted">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To become the world's leading immigrant-focused financial platform, known for innovation, reliability, and
              simplicity.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl text-primary mb-2">100K+</h3>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl text-primary mb-2">$50M+</h3>
                <p className="text-sm text-muted-foreground">Monthly Transfers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl text-primary mb-2">4.9/5</h3>
                <p className="text-sm text-muted-foreground">App Store Rating</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl text-primary mb-2">24/7</h3>
                <p className="text-sm text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
