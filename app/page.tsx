
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
    <div className="min-h-screen bg-gradient-to-b from-[#C1E6BB] to-white dark:from-[#18311D] dark:to-[#0c1a0f] text-[#18311D] dark:text-white">
      {/* Navbar */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={moneyIconAnimation}
            className="flex items-center gap-2"
          >
            <div className="bg-[#18311D] text-white p-4 rounded-full w-12 h-12 flex items-center justify-center">
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
            <a href="#features" className="hover:text-[#224933] transition-colors">Features</a>
            <a href="#about" className="hover:text-[#224933] transition-colors">About</a>
            <a href="#testimonials" className="hover:text-[#224933] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#224933] transition-colors">Contact</a>
          </motion.nav>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-[#18311D] hover:bg-[#224933] text-white px-6 py-2 rounded-full transition-colors"
          >
            Get Started
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
            Trust in Every Transaction, Convenience in Your Hands.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#224933] dark:text-[#C1E6BB]">
            Send money from the U.S. to Brazil faster, more securely, and with lower fees — powered by blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#18311D] hover:bg-[#224933] text-white px-8 py-3 rounded-full text-lg transition-colors flex items-center gap-2">
              <span>Create Account</span>
              <ChevronRight size={20} />
            </button>
            <button className="border-2 border-[#18311D] text-[#18311D] dark:text-white hover:bg-[#18311D]/10 px-8 py-3 rounded-full text-lg transition-colors">
              Learn More
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
          <div className="relative w-80 h-80 bg-[#C1E6BB] dark:bg-[#224933] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute w-full h-full flex items-center justify-center">
              <DollarSign size={120} className="text-[#18311D] dark:text-white" />
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
              <div className="w-32 h-32 bg-[#18311D]/20 dark:bg-[#18311D]/40 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#C1E6BB]/50 dark:bg-[#18311D]/70">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Send Us Money</h2>
            <p className="text-lg max-w-2xl mx-auto text-[#224933] dark:text-[#C1E6BB]">
              We make global financial transactions secure, practical, and accessible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Blockchain-Powered Transfers",
                description: "Faster, cheaper, and more secure money movement.",
                icon: <Send className="h-8 w-8" />
              },
              {
                title: "Portuguese Support",
                description: "In-language support for Brazilian-American users.",
                icon: <Globe className="h-8 w-8" />
              },
              {
                title: "Multi-Service Platform",
                description: "Includes travel, life, and commercial insurance.",
                icon: <Shield className="h-8 w-8" />
              },
              {
                title: "Simple Interface",
                description: "Easy-to-use design with no learning curve.",
                icon: <Smartphone className="h-8 w-8" />
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#224933] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="text-[#18311D] dark:text-white mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#224933] dark:text-[#C1E6BB]">{feature.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg mb-6 text-[#224933] dark:text-[#C1E6BB]">
                SEND US MONEY is a financial solution designed to simplify international money transfers. Our platform combines security, affordability, and usability — giving you full control of your finances from the palm of your hand.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6 text-[#224933] dark:text-[#C1E6BB]">
                To make global financial transactions simple, secure, and accessible — empowering users to manage their money confidently, wherever they are.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-[#224933] dark:text-[#C1E6BB]">
                To become the world's leading immigrant-focused financial platform, known for innovation, reliability, and simplicity.
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
                  { value: "Security", color: "bg-[#18311D]" },
                  { value: "Transparency", color: "bg-[#1a3720]" },
                  { value: "Innovation", color: "bg-[#1d3d22]" },
                  { value: "Practicality", color: "bg-[#1f4325]" },
                  { value: "Accessibility", color: "bg-[#224933]" },
                  { value: "Inclusion", color: "bg-[#254f37]" },
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
      <section id="testimonials" className="py-20 bg-[#C1E6BB]/50 dark:bg-[#18311D]/70">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
            <p className="text-lg max-w-2xl mx-auto text-[#224933] dark:text-[#C1E6BB]">
              Our users' trust is our priority.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Silva",
                location: "Florida",
                comment: "The app is a game changer. I send money in seconds and the fees are super low."
              },
              {
                name: "Marcos Oliveira",
                location: "Massachusetts",
                comment: "Customer support in Portuguese made me feel safe and understood."
              },
              {
                name: "Mariana Costa",
                location: "New Jersey",
                comment: "The platform is intuitive and the customer support is exceptional. I won't use anything else."
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#224933] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-[#18311D]">
                    {"★".repeat(5)}
                  </div>
                  <p className="italic mb-6 flex-grow text-[#224933] dark:text-[#C1E6BB]">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-[#224933] dark:text-[#C1E6BB]">{testimonial.location}</p>
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
            className="bg-[#C1E6BB]/50 dark:bg-[#224933] rounded-3xl p-12 text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download the App</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[#224933] dark:text-[#C1E6BB]">
              Send money smarter, safer, and faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#18311D] hover:bg-[#224933] text-white px-8 py-3 rounded-full font-bold transition-colors flex items-center justify-center gap-2">
                <span>Download on iOS</span>
              </button>
              <button className="border-2 border-[#18311D] text-[#18311D] dark:text-white hover:bg-[#18311D]/10 px-8 py-3 rounded-full font-bold transition-colors">
                Coming Soon on Android
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
            className="bg-[#18311D] text-white rounded-3xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users and experience the most secure and practical way to send money to Brazil.
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
                placeholder="Your best email"
                className="px-6 py-3 rounded-full text-[#18311D] focus:outline-none focus:ring-2 focus:ring-[#C1E6BB]"
              />
              <button className="bg-[#C1E6BB] text-[#18311D] hover:bg-[#afd6a8] px-8 py-3 rounded-full font-bold transition-colors">
                Get Started Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#18311D] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#224933] text-white p-3 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-xl font-bold">S</span>
                </div>
                <h3 className="text-xl font-bold">Send Us Money</h3>
              </div>
              <p className="max-w-xs text-[#C1E6BB]">
                Trust in every transaction, convenience in your hands.
              </p>
              <p className="text-sm mt-4 text-[#C1E6BB]">
                SEND US MONEY LLC<br />
                16192 Coastal Highway, Lewes, DE, 19958
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-[#C1E6BB]">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-[#C1E6BB]">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-[#C1E6BB]">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-[#224933] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#C1E6BB] mb-4 md:mb-0">&copy; 2025 Send Us Money. All rights reserved.</p>
            <p className="text-[#C1E6BB] mb-4 md:mb-0">Contact: support@sendusmoney.us</p>
            <div className="flex gap-6">
              <a href="#" className="text-[#C1E6BB] hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#C1E6BB] hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#C1E6BB] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}