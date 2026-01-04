import Header from "@/components/header";
import Footer from "@/components/footer";
import Brands from "@/components/brands";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { brandsData } from "@/data";

export const metadata: Metadata = {
  title: "JELD-WEN Windows & Doors Garland TX",
  description: "JELD-WEN window and door replacement in Garland, TX. Quality and value with AuraLast wood protection. Wide selection of styles and price points. Call 972-734-3158.",
  keywords: "JELD-WEN windows Garland TX, JELD-WEN doors, AuraLast wood, window replacement Garland",
};

export default function JeldWenPage() {
  const brand = brandsData.find(b => b.slug === "jeld-wen-windows-doors");

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
            <li className="text-navy-900 font-medium">JELD-WEN</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div className="relative z-10 px-6 max-w-7xl mx-auto py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
                JELD-WEN Window & Door Replacement in Garland, TX
              </h1>
              <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                Quality and value from a global leader in window and door manufacturing.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Free Estimate
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md h-64 overflow-hidden rounded-lg bg-gray-700">
                <Image
                  src="/brands/jeld-wen-windows-garland-tx.webp"
                  alt="JELD-WEN windows and doors"
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
                src="/jeld-wen-windows-and-doors-garland-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-20 lg:h-24 w-auto mx-auto mb-4"
              />
              <h2 className="text-xl lg:text-2xl font-serif text-navy-900">Authorized JELD-WEN Dealer</h2>
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
                About JELD-WEN
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                {brand?.description}
              </p>
              <p className="text-navy-700 leading-relaxed">
                JELD-WEN&apos;s AuraLast wood protection technology ensures wood windows and doors resist 
                rot, fungal decay, and termite damage, making them an excellent choice for Garland&apos;s 
                humid climate. Their vinyl and aluminum-clad options provide maintenance-free alternatives 
                at competitive price points.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">JELD-WEN Products We Install</h3>
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
              Why Choose JELD-WEN for Your Garland Home
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Energy Efficiency</h3>
                <p className="text-navy-700 text-sm">
                  Low-E glass options and multi-chamber frames deliver excellent thermal performance.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Durability</h3>
                <p className="text-navy-700 text-sm">
                  AuraLast wood treatment protects against rot, decay, and termites in humid climates.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Value</h3>
                <p className="text-navy-700 text-sm">
                  Premium quality at competitive prices makes whole-house projects affordable.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Professional Installation</h3>
                <p className="text-navy-700 text-sm">
                  Our experienced installers ensure your JELD-WEN products perform as designed.
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
                <h3 className="font-semibold text-navy-900 mb-2">Is JELD-WEN a good value for Garland homeowners?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, JELD-WEN offers excellent quality at competitive prices, making them ideal for 
                  budget-conscious projects without sacrificing performance.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">What is AuraLast wood?</h3>
                <p className="text-navy-700 text-sm">
                  AuraLast is JELD-WEN&apos;s proprietary wood treatment that protects against rot, fungal 
                  decay, and termite damage, ideal for Texas&apos;s humid conditions.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">What warranty does JELD-WEN offer?</h3>
                <p className="text-navy-700 text-sm">
                  JELD-WEN offers various warranty options, typically including 20-year limited warranties 
                  on many product lines with coverage on materials and glass.
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
            Ready to Upgrade to JELD-WEN?
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on JELD-WEN windows and doors in Garland, TX.
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
