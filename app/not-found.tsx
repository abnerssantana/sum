// app/not-found.tsx
'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home } from "lucide-react"

export default function NotFound() {
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

      <div className="container-custom relative flex-grow flex items-center justify-center py-16 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          {/* Stylized error number */}
          <div className="relative mb-8">
            <h1 className="text-[180px] font-bold text-white/10 leading-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl font-bold text-white">404</span>
            </div>
          </div>

          {/* Error message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-lg mx-auto mb-12">
            It looks like you've tried to access a page that doesn't exist or has been moved to another address.
          </p>

          {/* Action buttons - styled like hero buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="relative group bg-secondary hover:bg-secondary-600 text-white font-semibold overflow-hidden"
              asChild
            >
              <Link href="/">
                <span className="relative z-10 flex items-center">
                  Back to Home <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Gradiente animado da borda */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary-400 via-secondary-300 to-secondary-600 bg-[length:200%_200%] animate-gradient-x"></span>
                <span className="absolute inset-[1px] bg-secondary rounded-md"></span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white/10 hover:text-white relative group overflow-hidden"
              onClick={() => window.history.back()}
            >
              <span className="relative z-10">Go Back</span>
              {/* Efeito de brilho na borda ao passar o mouse */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/0 via-white/40 to-white/0 bg-[length:300%_100%] animate-shine"></span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom message */}
      <div className="container-custom relative z-10 text-center pb-12">
        <p className="text-white/70">
          Need help? Contact our support team at 
          <a 
            href="mailto:support@sendusmoney.us" 
            className="text-secondary hover:underline ml-1"
          >
            support@sendusmoney.us
          </a>
        </p>
      </div>
    </section>
  )
}