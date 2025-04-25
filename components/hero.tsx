import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowRightCircle, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[url('/hero.jpg')] bg-cover bg-center text-white flex flex-col justify-between">
         {/* Overlay de gradiente sobre a imagem de fundo */}
         <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-700/55 mix-blend-multiply"></div>
      {/* Decoração de fundo */}
      <div className="absolute inset-0 pattern-dots text-white/10 mix-blend-overlay"></div>
      <div className="blur-blob w-[500px] h-[500px] -top-20 -left-20 bg-secondary-500/20"></div>
      <div className="blur-blob w-[600px] h-[600px] -bottom-60 -right-20 bg-primary-300/10"></div>
      {/* Cabeçalho com Logo */}
      <div className="container-custom relative z-10">
        <div className="py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="SEND US MONEY Logo"
                  width={250}
                  height={120}
                  className="h-14 w-auto"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom relative py-16 md:py-28 flex-grow flex items-center">
        <div className="grid gap-8 md:grid-cols-2 items-center w-full">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Trust in Every Transaction. <br />Convenience in Your Hands.
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Send money from the US to Brazil faster, more securely, and with lower fees — using blockchain technology.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="relative group bg-secondary hover:bg-secondary-600 text-white font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Gradiente animado da borda */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary-400 via-secondary-300 to-secondary-600 bg-[length:200%_200%] animate-gradient-x"></span>
                <span className="absolute inset-[1px] bg-secondary rounded-md"></span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white/10 hover:text-white relative group overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                {/* Efeito de brilho na borda ao passar o mouse */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/0 via-white/40 to-white/0 bg-[length:300%_100%] animate-shine"></span>
              </Button>
            </div>
          </div>

          <div className="relative animate-float flex justify-end">
            <div className="relative w-full max-w-md">
              <div className="money-card p-6 backdrop-blur-md border border-white/20 shadow-xl">
                {/* Gradiente animado na borda */}
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-secondary via-white/30 to-primary bg-[length:200%_200%] animate-gradient-x -z-10"></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">Sending</p>
                      <p className="text-2xl font-bold">$500.00</p>
                    </div>
                    <div className="rounded-md bg-white/20 p-2 h-10 w-10 flex items-center justify-center shadow-inner">
                      <span className="text-base font-bold">USD</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRightCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">Receiving</p>
                      <p className="text-2xl font-bold">R$2840,90</p>
                    </div>
                    <div className="rounded-md bg-white/20 p-2 h-10 w-10 flex items-center justify-center shadow-inner">
                      <span className="text-base font-bold">BRL</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs opacity-70 text-center">Fee: $3.99 • Exchange Rate: 1 USD = 5,68 BRL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão de rolagem animado */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div className="relative">
          <ChevronDown className="h-8 w-8 animate-bounce" />
          <div className="absolute inset-0 rounded-full bg-white/10 -z-10 scale-75 animate-ping"></div>
        </div>

      </div>
    </section>
  )
}