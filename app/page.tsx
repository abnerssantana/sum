// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DollarSign, Globe, Shield, Smartphone, Send, ChevronRight, Twitter, Linkedin, Instagram } from "lucide-react";
export default function Home() {
  const [mounted, setMounted] = useState(false);
  // Ensures animations only work after component loads on client
  useEffect(() => {
    setMounted(true);
  }, []);
  // Animation variants for elements entering the screen
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  // Animation variants for money icon
  const moneyIconAnimation = {
    hidden: { scale: 0, rotate: -30 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900 text-zinc-800 dark:text-zinc-100">
      {/* Navbar */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={moneyIconAnimation}
            className="flex items-center gap-2"
          >
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Send Us Money Logo"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex gap-8"
          >
            <a href="#features" className="text-zinc-700 hover:text-green-700 dark:text-zinc-300 dark:hover:text-green-400 transition-colors">Features</a>
            <a href="#about" className="text-zinc-700 hover:text-green-700 dark:text-zinc-300 dark:hover:text-green-400 transition-colors">About</a>
            <a href="#testimonials" className="text-zinc-700 hover:text-green-700 dark:text-zinc-300 dark:hover:text-green-400 transition-colors">Testimonials</a>
            <a href="#contact" className="text-zinc-700 hover:text-green-700 dark:text-zinc-300 dark:hover:text-green-400 transition-colors">Contact</a>
          </motion.nav>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative w-full min-h-[600px] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-zinc-900/70 z-10"></div>
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 z-20 text-white">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Trust in Every Transaction, Convenience in Your Hands.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 text-zinc-200"
            >
              Send money from the U.S. to Brazil faster, more securely, and with lower fees — powered by blockchain technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition-colors flex items-center gap-2">
                <span>Create Account</span>
                <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section with animation */}
      <section className="container mx-auto py-20 px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeInUp}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">
            Transferências Inteligentes para seu País
          </h2>
          <p className="text-lg md:text-xl mb-8 text-zinc-700 dark:text-zinc-300">
            Nossa plataforma combina tecnologia blockchain com simplicidade e segurança, oferecendo as melhores taxas do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full text-lg transition-colors flex items-center gap-2">
              <span>Criar Conta</span>
              <ChevronRight size={20} />
            </button>
            <button className="border-2 border-zinc-700 text-zinc-700 dark:border-zinc-300 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-8 py-3 rounded-full text-lg transition-colors">
              Saiba Mais
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
              }
            }
          }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-80 h-80 bg-zinc-200 dark:bg-zinc-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute w-full h-full flex items-center justify-center">
              <DollarSign size={120} className="text-green-700 dark:text-green-500" />
            </div>
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="w-32 h-32 bg-green-600/20 dark:bg-green-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-zinc-100 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">Por Que Escolher Send Us Money</h2>
            <p className="text-lg max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
              Tornamos transações financeiras globais seguras, práticas e acessíveis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transferências via Blockchain",
                description: "Movimento de dinheiro mais rápido, barato e seguro.",
                icon: <Send className="h-8 w-8" />
              },
              {
                title: "Suporte em Português",
                description: "Atendimento no idioma para brasileiros nos EUA.",
                icon: <Globe className="h-8 w-8" />
              },
              {
                title: "Plataforma Multi-Serviço",
                description: "Inclui seguro de viagem, vida e comercial.",
                icon: <Shield className="h-8 w-8" />
              },
              {
                title: "Interface Simples",
                description: "Design fácil de usar sem curva de aprendizado.",
                icon: <Smartphone className="h-8 w-8" />
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="text-green-700 dark:text-green-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-zinc-100">{feature.title}</h3>
                <p className="text-zinc-700 dark:text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">Sobre Nós</h2>
              <p className="text-lg mb-6 text-zinc-700 dark:text-zinc-300">
                SEND US MONEY é uma solução financeira projetada para simplificar transferências internacionais de dinheiro. Nossa plataforma combina segurança, acessibilidade e usabilidade — dando a você controle total de suas finanças na palma da sua mão.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">Nossa Missão</h2>
              <p className="text-lg mb-6 text-zinc-700 dark:text-zinc-300">
                Tornar as transações financeiras globais simples, seguras e acessíveis — capacitando os usuários a gerenciar seu dinheiro com confiança, onde quer que estejam.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">Nossa Visão</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                Tornar-se a principal plataforma financeira focada em imigrantes do mundo, conhecida por inovação, confiabilidade e simplicidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "Segurança", color: "bg-green-700" },
                  { value: "Transparência", color: "bg-green-600" },
                  { value: "Inovação", color: "bg-green-600" },
                  { value: "Praticidade", color: "bg-green-700" },
                  { value: "Acessibilidade", color: "bg-green-800" },
                  { value: "Inclusão", color: "bg-green-800" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={cn(
                      "p-6 rounded-xl text-white text-center font-bold shadow-lg",
                      item.color
                    )}
                  >
                    {item.value}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-zinc-100 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">O Que Estão Dizendo</h2>
            <p className="text-lg max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
              A confiança dos nossos usuários é nossa prioridade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Silva",
                location: "Flórida",
                comment: "O aplicativo é revolucionário. Envio dinheiro em segundos e as taxas são super baixas."
              },
              {
                name: "Marcos Oliveira",
                location: "Massachusetts",
                comment: "Atendimento em português me fez sentir seguro e compreendido."
              },
              {
                name: "Mariana Costa",
                location: "Nova Jersey",
                comment: "A plataforma é intuitiva e o suporte ao cliente é excepcional. Não vou usar mais nada."
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-green-600">
                    {"★".repeat(5)}
                  </div>
                  <p className="italic mb-6 flex-grow text-zinc-700 dark:text-zinc-300">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-bold text-zinc-800 dark:text-zinc-100">{testimonial.name}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-100 dark:bg-zinc-700 rounded-3xl p-12 text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">Baixe o Aplicativo</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
              Envie dinheiro de forma mais inteligente, segura e rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-bold transition-colors flex items-center justify-center gap-2">
                <span>Download para iOS</span>
              </button>
              <button className="border-2 border-zinc-700 text-zinc-700 dark:border-zinc-300 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-600 px-8 py-3 rounded-full font-bold transition-colors">
                Em breve para Android
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-700 text-white rounded-3xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Começar?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de usuários satisfeitos e experimente a maneira mais segura e prática de enviar dinheiro para o Brasil.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                placeholder="Seu melhor email"
                className="px-6 py-3 rounded-full text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300"
              />
              <button className="bg-white text-green-700 hover:bg-zinc-100 px-8 py-3 rounded-full font-bold transition-colors">
                Comece Agora
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="Send Us Money Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Send Us Money</h3>
              </div>
              <p className="max-w-xs text-zinc-300">
                Confiança em cada transação, conveniência em suas mãos.
              </p>
              <p className="text-sm mt-4 text-zinc-300">
                SEND US MONEY LLC<br />
                16192 Coastal Highway, Lewes, DE, 19958
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Empresa</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Produto</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 mb-4 md:mb-0">&copy; 2025 Send Us Money. Todos os direitos reservados.</p>
            <p className="text-zinc-400 mb-4 md:mb-0">Contato: support@sendusmoney.us</p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}