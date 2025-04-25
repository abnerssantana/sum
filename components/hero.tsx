import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowRightCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary-700 text-white">
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
                    width={200}
                    height={90}
                    className="h-14 w-auto"
                  />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom relative py-16 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Trust in Every Transaction. <span className="gradient-text">Convenience</span> in Your Hands.
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Envie dinheiro dos EUA para o Brasil mais rápido, com mais segurança e com taxas mais baixas — com tecnologia blockchain.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-black font-semibold animated-border">
                Começar Agora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Saiba Mais
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="money-card p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">Enviando</p>
                      <p className="text-2xl font-bold">$500.00</p>
                    </div>
                    <div className="rounded-full bg-white/20 p-6 h-9 w-9 flex items-center justify-center">
                      <span className="text-xl">🇺🇸</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRightCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">Recebendo</p>
                      <p className="text-2xl font-bold">R$2,500.00</p>
                    </div>
                    <div className="rounded-full bg-white/20 p-6 h-9 w-9 flex items-center justify-center">
                      <span className="text-xl">🇧🇷</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs opacity-70 text-center">Taxa: $3.99 • Câmbio: 1 USD = 5.00 BRL</p>
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