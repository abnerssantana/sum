// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DollarSign, Globe, Shield, Smartphone, Send, ChevronRight, Twitter, Linkedin, Instagram } from "lucide-react";
export default function Home() {
const [mounted, setMounted] = useState(false);
// Garante que animações funcionem apenas após o carregamento do componente no cliente
useEffect(() => {
setMounted(true);
}, []);
// Variantes de animação para elementos entrando na tela
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
// Variantes de animação para ícone de dinheiro
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
// Animação de entrada para componentes
const staggerContainer = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.2
}
}
};
// Animação de flutuação
const float = {
y: [0, -10, 0],
transition: {
duration: 3,
repeat: Infinity,
repeatType: "mirror",
ease: "easeInOut"
}
};
// Animação de pulso
const pulse = {
scale: [1, 1.05, 1],
transition: {
duration: 2,
repeat: Infinity,
repeatType: "mirror",
ease: "easeInOut"
}
};
return (
<div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 text-zinc-800 dark:text-zinc-100">
{/* Navbar */}
<header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
<div className="container mx-auto py-4 px-4">
<div className="flex items-center justify-between">
<motion.div
initial="hidden"
animate={mounted ? "visible" : "hidden"}
variants={moneyIconAnimation}
className="flex items-center gap-2"
>
<div className="relative w-10 h-10">
<Image
               src="/logo.png"
               alt="Send Us Money Logo"
               fill
               className="object-contain"
             />
</div>
<span className="font-bold text-xl">Send Us Money</span>
</motion.div>
<motion.nav
initial={{ opacity: 0 }}
animate={mounted ? { opacity: 1 } : { opacity: 0 }}
transition={{ duration: 0.5, delay: 0.2 }}
className="hidden md gap-8"
>
<a href="#features" className="text-white hover:text-green-200 transition-colors">Recursos</a>
<a href="#about" className="text-white hover:text-green-200 transition-colors">Sobre</a>
<a href="#testimonials" className="text-white hover:text-green-200 transition-colors">Depoimentos</a>
<a href="#contact" className="text-white hover:text-green-200 transition-colors">Contato</a>
</motion.nav>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-green-700 hover:bg-green-100 px-6 py-2 rounded-full font-medium transition-colors"
        >
          Começar Agora
        </motion.button>
      </div>
    </div>
  </header>

  {/* Hero Section com Imagem */}
  <section className="relative w-full min-h-[600px] flex items-center">
    {/* Imagem de fundo do Hero */}
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
          className="text-4xl md:text-6xl font-bold mb-6 font-sans"
        >
          Confiança em Cada Transação, Conveniência nas Suas Mãos.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-zinc-200 font-sans"
        >
          Envie dinheiro dos EUA para o Brasil de forma mais rápida, segura e com taxas mais baixas — impulsionado pela tecnologia blockchain.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition-colors flex items-center gap-2"
          >
            <span>Criar Conta</span>
            <ChevronRight size={20} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg transition-colors"
          >
            Saiba Mais
          </motion.button>
        </motion.div>
      </div>
    </div>
  </section>

  {/* Seção de App Download com animações */}
  <section className="py-16 overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col md:flex-row items-center gap-12"
      >
        <motion.div
          variants={fadeInUp}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 font-sans">
            Baixe Nosso App e Comece a Enviar
          </h2>
          <p className="text-lg mb-8 text-zinc-700 dark:text-zinc-300 font-sans">
            Nosso aplicativo está disponível nas principais lojas. Baixe agora e comece a aproveitar as vantagens de transferências rápidas e seguras para o Brasil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl transition-transform"
            >
              <div className="relative w-8 h-8">
                <Image 
                  src="/apple.svg" 
                  alt="App Store" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs">Baixar na</p>
                <p className="text-lg font-bold">App Store</p>
              </div>
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl transition-transform"
            >
              <div className="relative w-8 h-8">
                <Image 
                  src="/google.svg" 
                  alt="Google Play" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs">Baixar no</p>
                <p className="text-lg font-bold">Google Play</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          animate={mounted ? float : {}}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-[500px]">
            <div className="absolute top-0 -left-4 w-64 h-[500px] bg-green-500/20 rounded-3xl transform -rotate-6"></div>
            <motion.div 
              className="absolute top-0 left-0 w-64 h-[500px] bg-white dark:bg-zinc-800 rounded-3xl border-8 border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-2xl"
              animate={pulse}
            >
              <div className="absolute top-0 w-full h-16 bg-green-700 flex items-center justify-center">
                <span className="text-white font-bold">Send Us Money</span>
              </div>
              <div className="absolute top-16 w-full h-[calc(100%-16px)] flex flex-col items-center justify-center p-4">
                <DollarSign size={64} className="text-green-700 mb-6" />
                <div className="w-full h-12 bg-zinc-100 dark:bg-zinc-700 rounded-full mb-4"></div>
                <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-700 rounded-xl mb-4"></div>
                <div className="w-full h-12 bg-green-600 rounded-full text-white flex items-center justify-center">
                  Enviar Agora
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>

  {/* Seção de Recursos */}
  <section id="features" className="py-20 bg-zinc-50 dark:bg-zinc-900">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800 dark:text-zinc-100 font-sans">Por Que Escolher Send Us Money</h2>
        <p className="text-lg max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300 font-sans">
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
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 + 0.2 }}
              className="text-green-700 dark:text-green-500 mb-4"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-zinc-100 font-sans">{feature.title}</h3>
            <p className="text-zinc-700 dark:text-zinc-300 font-sans">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Seção Sobre */}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 font-sans">Sobre Nós</h2>
          <p className="text-lg mb-6 text-zinc-700 dark:text-zinc-300 font-sans">
            SEND US MONEY é uma solução financeira projetada para simplificar transferências internacionais de dinheiro. Nossa plataforma combina segurança, acessibilidade e usabilidade — dando a você controle total de suas finanças na palma da sua mão.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 font-sans">Nossa Missão</h2>
          <p className="text-lg mb-6 text-zinc-700 dark:text-zinc-300 font-sans">
            Tornar as transações financeiras globais simples, seguras e acessíveis — capacitando os usuários a gerenciar seu dinheiro com confiança, onde quer que estejam.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 font-sans">Nossa Visão</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 font-sans">
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
                whileHover={{ y: -5, scale: 1.05 }}
                className={cn(
                  "p-6 rounded-xl text-white text-center font-bold shadow-lg transform transition-all duration-300",
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

  {/* Depoimentos */}
  <section id="testimonials" className="py-20 bg-zinc-50 dark:bg-zinc-900">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800 dark:text-zinc-100 font-sans">O Que Estão Dizendo</h2>
        <p className="text-lg max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300 font-sans">
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
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col h-full">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                className="mb-4 text-green-600"
              >
                {"★".repeat(5)}
              </motion.div>
              <p className="italic mb-6 flex-grow text-zinc-700 dark:text-zinc-300 font-sans">"{testimonial.comment}"</p>
              <div>
                <p className="font-bold text-zinc-800 dark:text-zinc-100 font-sans">{testimonial.name}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-sans">{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Seção de Download do App com QR code */}
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-12 text-center shadow-xl text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans">Baixe o Aplicativo</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-sans">
          Envie dinheiro de forma mais inteligente, segura e rápida.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-4 rounded-2xl shadow-lg"
          >
            <div className="w-40 h-40 bg-zinc-200 rounded flex items-center justify-center">
              {/* Placeholder para QR code */}
              <span className="text-zinc-800 text-xs text-center">QR Code para<br/>download do app</span>
            </div>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row md:flex-col gap-4">
            <motion.a
              href="#"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl transition-transform"
            >
              <div className="relative w-8 h-8">
                <Image 
                  src="/apple.svg" 
                  alt="App Store" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs text-left">Baixar na</p>
                <p className="text-lg font-bold text-left">App Store</p>
              </div>
            </motion.a>
            
            <motion.a
              href="#"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl transition-transform"
            >
              <div className="relative w-8 h-8">
                <Image 
                  src="/google.svg" 
                  alt="Google Play" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs text-left">Baixar no</p>
                <p className="text-lg font-bold text-left">Google Play</p>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>

  {/* Seção CTA */}
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-green-700 text-white rounded-3xl p-12 text-center shadow-2xl"
      >
        <motion.div
          animate={pulse}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <DollarSign size={32} className="text-green-700" />
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans">Pronto para Começar?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-sans">
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
            className="px-6 py-3 rounded-full text-zinc-800 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-700 hover:bg-zinc-100 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Comece Agora
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-zinc-900 text-white py-12">
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
            <h3 className="text-xl font-bold font-sans">Send Us Money</h3>
          </div>
          <p className="max-w-xs text-zinc-300 font-sans">
            Confiança em cada transação, conveniência em suas mãos.
          </p>
          <p className="text-sm mt-4 text-zinc-300 font-sans">
            SEND US MONEY LLC<br />
            16192 Coastal Highway, Lewes, DE, 19958
          </p>
          
          <div className="flex gap-6 mt-4">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4 font-sans">Empresa</h4>
            <ul className="space-y-2 text-zinc-300 font-sans">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-sans">Produto</h4>
            <ul className="space-y-2 text-zinc-300 font-sans">
              <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-sans">Legal</h4>
            <ul className="space-y-2 text-zinc-300 font-sans">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-zinc-400 mb-4 md:mb-0 font-sans">&copy; 2025 Send Us Money. Todos os direitos reservados.</p>
        <p className="text-zinc-400 mb-4 md:mb-0 font-sans">Contato: support@sendusmoney.us</p>
      </div>
    </div>
  </footer>
</div>
);
}