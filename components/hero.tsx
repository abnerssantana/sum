import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowRightCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/80 text-white">
      {/* Header with Logo */}
      <div className="container-custom relative z-10">
        <div className="py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-lg p-1">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="SEND US MONEY Logo"
                    width={40}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <span className="font-bold text-xl md:text-2xl">SEND US MONEY</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
      <div className="container-custom relative py-16 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Trust in Every Transaction. Convenience in Your Hands.
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Send money from the U.S. to Brazil faster, more securely, and with lower fees — powered by blockchain
              technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-semibold">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-secondary to-secondary/50 opacity-75 blur"></div>
              <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">Sending</p>
                      <p className="text-2xl font-bold">$500.00</p>
                    </div>
                    <div className="rounded-full bg-white/20 p-2">
                      <span className="text-xl">🇺🇸</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRightCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">Receiving</p>
                      <p className="text-2xl font-bold">R$2,500.00</p>
                    </div>
                    <div className="rounded-full bg-white/20 p-2">
                      <span className="text-xl">🇧🇷</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs opacity-70 text-center">Fee: $3.99 • Rate: 1 USD = 5.00 BRL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
