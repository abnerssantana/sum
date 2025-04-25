import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function DownloadCta() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Download the App</h2>
            <p className="text-lg md:text-xl opacity-90">
              Send money smarter, safer, and faster. Experience the future of international money transfers today.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" className="transition hover:opacity-90">
                <Image
                  src="/apple.svg"
                  width={129}
                  height={43}
                  alt="Download on App Store"
                  className="h-12 w-auto"
                />
              </a>
              <a href="#" className="transition hover:opacity-90">
                <Image
                  src="/google.svg"
                  width={145}
                  height={44}
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-sm opacity-80">Available on the App Store. Android version coming soon.</p>
            </div>
          </div>
          <div className="relative mx-auto max-w-xs md:max-w-sm">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-secondary to-secondary/50 opacity-75 blur-lg"></div>
            <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=300"
                width={300}
                height={600}
                alt="SEND US MONEY App"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}