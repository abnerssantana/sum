import Hero from "@/components/hero";
import Features from "@/components/features";
import Mission from "@/components/mission";
import Testimonials from "@/components/testimonials";
import DownloadCta from "@/components/download-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Mission />
      <Testimonials />
      <DownloadCta />
      <Footer />
    </main>
  );
}
