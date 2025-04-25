
// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
// Importando a biblioteca Framer Motion
// Nota: Você precisa adicionar isto ao package.json: "framer-motion": "^11.0.3"
export default function Home() {
const [mounted, setMounted] = useState(false);
// Garante que as animações só funcionem após o carregamento do componente no cliente
useEffect(() => {
setMounted(true);
}, []);
// Variantes de animação para elementos que entram na tela
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
// Variantes para animação do ícone de dinheiro
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
<div className="min-h-screen bg-gradient-to-b from-[#d1ffd1] to-white dark:from-[#0a3a0a] dark:to-[#072007] text-[#083208] dark:text-white">
{/* Navbar */}
<header className="container mx-auto py-6 px-4">
<div className="flex items-center justify-between">
<motion.div
initial="hidden"
animate={mounted ? "visible" : "hidden"}
variants={moneyIconAnimation}
className="flex items-center gap-2"
>
<div className="bg-[#0b8b0b] text-white p-4 rounded-full w-12 h-12 flex items-center justify-center">
<span className="text-3xl font-bold">S</span>
</div>
<h1 className="text-2xl font-bold">Send Us Money</h1>
</motion.div>
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex gap-8"
      >
        <a href="#features" className="hover:text-[#0b8b0b] transition-colors">Recursos</a>
        <a href="#about" className="hover:text-[#0b8b0b] transition-colors">Sobre</a>
        <a href="#testimonials" className="hover:text-[#0b8b0b] transition-colors">Depoimentos</a>
        <a href="#contact" className="hover:text-[#0b8b0b] transition-colors">Contato</a>
      </motion.nav>

      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-[#0b8b0b] hover:bg-[#097a09] text-white px-6 py-2 rounded-full transition-colors"
      >
        Comece Agora
      </motion.button>
    </div>
  </header>

  {/* Hero Section */}
  <section className="container mx-auto py-20 px-4 flex flex-col md:flex-row items-center">
    <motion.div 
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
      variants={fadeInUp}
      className="md:w-1/2 mb-10 md:mb-0"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Confiança em cada transação, praticidade na sua mão.
      </h1>
      <p className="text-lg md:text-xl mb-8 text-[#1c631c] dark:text-[#9ff29f]">
        Uma solução financeira que combina segurança, acessibilidade e facilidade de uso, oferecendo a confiança necessária para realizar transações com tranquilidade.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#0b8b0b] hover:bg-[#097a09] text-white px-8 py-3 rounded-full text-lg transition-colors">
          Crie sua conta
        </button>
        <button className="border-2 border-[#0b8b0b] text-[#0b8b0b] dark:text-white hover:bg-[#0b8b0b]/10 px-8 py-3 rounded-full text-lg transition-colors">
          Saiba mais
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
      <div className="relative w-80 h-80 bg-[#e9ffe9] dark:bg-[#0f4d0f] rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="text-[#0b8b0b] dark:text-white text-9xl font-bold">$</div>
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
          <div className="w-32 h-32 bg-[#0b8b0b]/20 dark:bg-[#0b8b0b]/40 rounded-full blur-xl"></div>
        </motion.div>
      </div>
    </motion.div>
  </section>

  {/* Features Section */}
  <section id="features" className="py-20 bg-[#f2fff2] dark:bg-[#072a07]">
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos Principais</h2>
        <p className="text-lg max-w-2xl mx-auto text-[#1c631c] dark:text-[#9ff29f]">
          Facilitamos suas transações financeiras globais com segurança, praticidade e acessibilidade.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Segurança em Primeiro Lugar",
            description: "Priorizamos a segurança e a transparência para garantir a confiança de nossos usuários.",
            icon: "🔒"
          },
          {
            title: "Praticidade Total",
            description: "Gerencie suas finanças de forma rápida e eficiente, onde quer que esteja.",
            icon: "📱"
          },
          {
            title: "Acessibilidade para Todos",
            description: "Serviços que atendem a todos, independentemente de localização ou habilidade técnica.",
            icon: "🌍"
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#0a3a0a] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-[#1c631c] dark:text-[#9ff29f]">{feature.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Missão</h2>
          <p className="text-lg mb-6 text-[#1c631c] dark:text-[#9ff29f]">
            Facilitar as transações financeiras globais com segurança, praticidade e acessibilidade, empoderando nossos usuários a gerenciar suas finanças com confiança e conveniência, onde quer que estejam.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Visão</h2>
          <p className="text-lg text-[#1c631c] dark:text-[#9ff29f]">
            Ser uma plataforma global de transações financeiras, reconhecida pela inovação, confiabilidade e simplicidade, permitindo que pessoas e empresas em todo o mundo realizem suas operações financeiras com facilidade e confiança, a qualquer momento e em qualquer lugar.
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
              { value: "Segurança", color: "bg-[#0b8b0b]" },
              { value: "Transparência", color: "bg-[#0a6b0a]" },
              { value: "Inovação", color: "bg-[#094b09]" },
              { value: "Praticidade", color: "bg-[#083b08]" },
              { value: "Acessibilidade", color: "bg-[#072b07]" },
              { value: "Inclusão", color: "bg-[#062106]" },
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
  <section id="testimonials" className="py-20 bg-[#f2fff2] dark:bg-[#072a07]">
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
        <p className="text-lg max-w-2xl mx-auto text-[#1c631c] dark:text-[#9ff29f]">
          A confiança de nossos usuários é nossa prioridade.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Ana Silva",
            position: "Empreendedora",
            comment: "Send Us Money revolucionou a forma como gerencio as finanças do meu negócio. Prático e seguro!"
          },
          {
            name: "Carlos Oliveira",
            position: "Viajante Frequente",
            comment: "Nunca mais me preocupei com câmbio ou taxas abusivas durante minhas viagens. Recomendo!"
          },
          {
            name: "Mariana Costa",
            position: "Profissional Autônoma",
            comment: "A plataforma é intuitiva e o suporte ao cliente é excepcional. Não troco por nenhuma outra."
          },
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#0a3a0a] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 text-[#0b8b0b]">
                {"★".repeat(5)}
              </div>
              <p className="italic mb-6 flex-grow text-[#1c631c] dark:text-[#9ff29f]">"{testimonial.comment}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-[#1c631c] dark:text-[#9ff29f]">{testimonial.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
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
        className="bg-[#0b8b0b] text-white rounded-3xl p-12 text-center shadow-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de usuários satisfeitos e experimente a forma mais segura e prática de gerenciar suas finanças.
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
            placeholder="Seu melhor e-mail" 
            className="px-6 py-3 rounded-full text-[#0b8b0b] focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-[#0b8b0b] hover:bg-[#f0fff0] px-8 py-3 rounded-full font-bold transition-colors">
            Começar agora
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-[#072007] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#0b8b0b] text-white p-3 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-xl font-bold">S</span>
            </div>
            <h3 className="text-xl font-bold">Send Us Money</h3>
          </div>
          <p className="max-w-xs text-[#9ff29f]">
            Confiança em cada transação, praticidade na sua mão.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-[#9ff29f]">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2 text-[#9ff29f]">
              <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-[#9ff29f]">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#0b8b0b] pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#9ff29f] mb-4 md:mb-0">&copy; 2025 Send Us Money. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="text-[#9ff29f] hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-[#9ff29f] hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-[#9ff29f] hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
</div>
);
}