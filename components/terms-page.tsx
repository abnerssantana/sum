import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import Head from "next/head"

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Use & Privacy Policy | SEND US MONEY</title>
        <meta name="description" content="SEND US MONEY LLC Terms of Use and Privacy Policy. Learn about your rights and our obligations regarding our money transfer services." />
        <meta name="keywords" content="terms of use, privacy policy, SEND US MONEY, money transfer, remittance, data privacy" />
        <meta name="author" content="SEND US MONEY LLC" />
        <meta property="og:title" content="Terms of Use & Privacy Policy | SEND US MONEY" />
        <meta property="og:description" content="SEND US MONEY LLC Terms of Use and Privacy Policy. Learn about your rights and our obligations regarding our money transfer services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sendusmoney.us/terms" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Use & Privacy Policy | SEND US MONEY" />
        <meta name="twitter:description" content="SEND US MONEY LLC Terms of Use and Privacy Policy. Learn about your rights and our obligations regarding our money transfer services." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
      </Head>
      <main className="min-h-screen bg-muted/30">
        {/* Header */}
        <header className="bg-primary text-white py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Logo on the left */}
              <div className="flex-shrink-0 md:w-1/4">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo.png"
                    alt="SEND US MONEY Logo"
                    width={140}
                    height={60}
                    className="h-14 w-auto"
                    priority
                  />
                </Link>
              </div>
              
              {/* Title and subtitle centered */}
              <div className="flex-grow md:w-2/4 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Use & Privacy Policy</h1>
                <p className="text-lg opacity-90">Important information about your rights and our obligations.</p>
              </div>
              
              {/* Empty space to balance layout */}
              <div className="hidden md:block md:w-1/4"></div>
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Sidebar Navigation */}
              <div className="md:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>Contents</CardTitle>
                    <CardDescription>Navigate to different sections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      <a href="#terms" className="block p-2 hover:bg-muted rounded-md text-primary font-medium">Terms of Use</a>
                      <a href="#privacy" className="block p-2 hover:bg-muted rounded-md text-primary font-medium">Privacy Policy</a>
                      <Link href="/" className="block p-2 hover:bg-muted rounded-md text-muted-foreground">
                        Return to Home
                      </Link>
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                {/* Terms of Use Section */}
                <Card id="terms" className="scroll-mt-8">
                  <CardHeader className="border-b">
                    <CardTitle className="text-2xl text-primary">Terms of Use</CardTitle>
                    <CardDescription>Effective Date: April 25, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <p>Welcome to SEND US MONEY LLC. By accessing or using our mobile application or website ("Platform"), you agree to be bound by these Terms of Use. If you do not agree, do not use our Platform.</p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary">1. Company Information</h3>
                      <p>SEND US MONEY LLC<br />
                        16192 Coastal Highway, Lewes, DE, 19958</p>

                      <h3 className="text-lg font-semibold text-primary">2. Services</h3>
                      <p>We provide international money transfer services from the United States to select countries, along with access to travel, life, and commercial insurance services.</p>

                      <h3 className="text-lg font-semibold text-primary">3. Eligibility</h3>
                      <p>You must be at least 18 years old and reside in the U.S. to use our services.</p>

                      <h3 className="text-lg font-semibold text-primary">4. Account Registration</h3>
                      <p>You agree to provide accurate and complete information when creating your account and to keep this information updated.</p>

                      <h3 className="text-lg font-semibold text-primary">5. User Conduct</h3>
                      <p>You may not:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Violate any laws or regulations.</li>
                        <li>Use the service for illegal or fraudulent purposes.</li>
                        <li>Interfere with the Platform's functionality or security.</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-primary">6. Fees and Charges</h3>
                      <p>Fees may apply to transactions and will be disclosed before you confirm a transfer.</p>

                      <h3 className="text-lg font-semibold text-primary">7. Intellectual Property</h3>
                      <p>All content on our Platform is the property of SEND US MONEY LLC and is protected by intellectual property laws.</p>

                      <h3 className="text-lg font-semibold text-primary">8. Termination</h3>
                      <p>We reserve the right to suspend or terminate your access if you violate these Terms.</p>

                      <h3 className="text-lg font-semibold text-primary">9. Disclaimers and Limitation of Liability</h3>
                      <p>We do not guarantee uninterrupted or error-free operation. Our liability is limited to the maximum extent permitted by law.</p>

                      <h3 className="text-lg font-semibold text-primary">10. Governing Law</h3>
                      <p>These Terms are governed by the laws of the State of Delaware.</p>

                      <h3 className="text-lg font-semibold text-primary">11. Contact</h3>
                      <p>For questions: support@sendusmoney.us</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Privacy Policy Section */}
                <Card id="privacy" className="scroll-mt-8">
                  <CardHeader className="border-b">
                    <CardTitle className="text-2xl text-primary">Privacy Policy</CardTitle>
                    <CardDescription>Effective Date: April 25, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <p>SEND US MONEY LLC respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.</p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary">1. Information We Collect</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Personal identifiers (name, email, phone number)</li>
                        <li>Transaction data</li>
                        <li>Government-issued identification (if required for KYC/AML purposes)</li>
                        <li>Location data (only when necessary to comply with regulations)</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-primary">2. How We Use Your Information</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>To process and complete remittance transactions</li>
                        <li>To verify identity and comply with legal obligations</li>
                        <li>To improve our services and user experience</li>
                        <li>To detect and prevent fraud</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-primary">3. Data Sharing and Disclosure</h3>
                      <p>We may share your data with:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Regulatory authorities, as required by law</li>
                        <li>Payment processors and banking partners</li>
                        <li>Service providers acting on our behalf</li>
                      </ul>
                      <p>We do not sell or rent your personal information to third parties.</p>

                      <h3 className="text-lg font-semibold text-primary">4. Data Security</h3>
                      <p>We implement reasonable administrative, technical, and physical safeguards to protect your information.</p>

                      <h3 className="text-lg font-semibold text-primary">5. Your Rights</h3>
                      <p>You may request access, correction, or deletion of your data by contacting us at support@sendusmoney.us.</p>

                      <h3 className="text-lg font-semibold text-primary">6. Children's Privacy</h3>
                      <p>Our services are not intended for users under 18 years of age.</p>

                      <h3 className="text-lg font-semibold text-primary">7. International Data Transfers</h3>
                      <p>As a U.S.-based company, your data may be processed in the United States.</p>

                      <h3 className="text-lg font-semibold text-primary">8. Changes to This Policy</h3>
                      <p>We may update this policy from time to time. Changes will be notified through the app or our website.</p>

                      <h3 className="text-lg font-semibold text-primary">9. Contact Us</h3>
                      <p>SEND US MONEY LLC<br />
                        16192 Coastal Highway, Lewes, DE, 19958<br />
                        Email: support@sendusmoney.us</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center pt-8">
                  <Button size="lg" asChild>
                    <Link href="/">
                      Return to Home
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}