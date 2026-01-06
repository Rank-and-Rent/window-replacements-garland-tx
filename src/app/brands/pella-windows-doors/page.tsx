import Header from "@/components/header";
import Footer from "@/components/footer";
import Brands from "@/components/brands";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { brandsData } from "@/data";

export const metadata: Metadata = {
  title: "Pella Windows & Doors Garland TX",
  description: "Pella window and door replacement in Garland, TX. Industry leader since 1925. InsulShield glass, EnduraClad exteriors. Call 972-734-3158.",
  keywords: "Pella windows Garland TX, Pella doors, InsulShield glass, window replacement Garland",
  alternates: {
    canonical: 'https://windowreplacementgarlandtx.com/brands/pella-windows-doors',
  },
};

export default function PellaPage() {
  const brand = brandsData.find(b => b.slug === "pella-windows-doors");

  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/brands" className="hover:text-gold-500">Brands</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Pella</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div className="relative z-10 px-6 max-w-7xl mx-auto py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
                Pella Window & Door Replacement in Garland, TX
              </h1>
              <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                Industry leader in innovation and customization since 1925.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Free Estimate
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md h-64 overflow-hidden rounded-lg bg-gray-700">
                <Image
                  src="/brands/pella-windows-garland-tx.jpg"
                  alt="Pella windows and doors"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Brand Logo */}
      <section className="py-16 lg:py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <img
                src="/pella-windows-and-doors-garland-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-20 lg:h-24 w-auto mx-auto mb-4"
              />
              <h2 className="text-xl lg:text-2xl font-serif text-navy-900">Authorized Pella Dealer</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                About Pella
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                {brand?.description}
              </p>
              <p className="text-navy-700 leading-relaxed">
                Pella&apos;s InsulShield glass technology offers multiple performance levels to match your 
                specific needs and budget. Their EnduraClad exterior finish resists fading and scratching 
                even in Garland&apos;s intense Texas sun, ensuring your windows look beautiful for decades.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Pella Products We Install</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gold-400 font-semibold mb-3">Windows</h4>
                  <ul className="space-y-2 text-cream-200 text-sm">
                    <li><Link href="/windows/double-hung-windows" className="hover:text-gold-400 transition-colors">- Double-Hung</Link></li>
                    <li><Link href="/windows/single-hung-windows" className="hover:text-gold-400 transition-colors">- Single-Hung</Link></li>
                    <li><Link href="/windows/casement-windows" className="hover:text-gold-400 transition-colors">- Casement</Link></li>
                    <li><Link href="/windows/awning-windows" className="hover:text-gold-400 transition-colors">- Awning</Link></li>
                    <li><Link href="/windows/sliding-windows" className="hover:text-gold-400 transition-colors">- Sliding</Link></li>
                    <li><Link href="/windows/picture-windows" className="hover:text-gold-400 transition-colors">- Picture</Link></li>
                    <li><Link href="/windows/bay-bow-windows" className="hover:text-gold-400 transition-colors">- Bay & Bow</Link></li>
                    <li><Link href="/windows/special-shape-windows" className="hover:text-gold-400 transition-colors">- Specialty Shapes</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gold-400 font-semibold mb-3">Doors</h4>
                  <ul className="space-y-2 text-cream-200 text-sm">
                    <li><Link href="/doors/entry-door-installation" className="hover:text-gold-400 transition-colors">- Entry Doors</Link></li>
                    <li><Link href="/doors/patio-door-installation" className="hover:text-gold-400 transition-colors">- Patio Doors</Link></li>
                    <li><Link href="/doors/french-door-installation" className="hover:text-gold-400 transition-colors">- French Doors</Link></li>
                    <li><Link href="/doors/sliding-glass-door-installation" className="hover:text-gold-400 transition-colors">- Sliding Doors</Link></li>
                    <li><Link href="/doors/storm-door-installation" className="hover:text-gold-400 transition-colors">- Storm Doors</Link></li>
                    <li><Link href="/doors/custom-door-installation" className="hover:text-gold-400 transition-colors">- Custom Doors</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Why Choose Pella for Your Garland Home
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Energy Efficiency</h3>
                <p className="text-navy-700 text-sm">
                  InsulShield glass packages deliver exceptional thermal performance for Texas climates.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Durability</h3>
                <p className="text-navy-700 text-sm">
                  EnduraClad finish resists fading, scratching, and UV damage in intense sunlight.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Aesthetic Excellence</h3>
                <p className="text-navy-700 text-sm">
                  Extensive customization options including between-the-glass blinds and shades.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Professional Installation</h3>
                <p className="text-navy-700 text-sm">
                  Our certified installers ensure optimal performance and warranty protection.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">What makes Pella a good choice for Garland homes?</h3>
                <p className="text-navy-700 text-sm">
                  Pella products are designed with hot climates in mind. Their InsulShield glass and 
                  EnduraClad exteriors provide excellent performance in Garland&apos;s challenging weather.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">What is InsulShield glass?</h3>
                <p className="text-navy-700 text-sm">
                  InsulShield is Pella&apos;s proprietary line of high-performance glass packages offering 
                  different levels of energy efficiency to match your specific needs.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">What warranty does Pella offer?</h3>
                <p className="text-navy-700 text-sm">
                  Pella offers a limited lifetime warranty on many products, with comprehensive coverage 
                  on materials, glass, and workmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-semibold text-cream-100 mb-6">
            Ready to Upgrade to Pella?
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on Pella windows and doors in Garland, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
            </Link>
            <a href="tel:972-734-3158" className="btn-outline-light">
              Call 972-734-3158
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
