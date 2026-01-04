import Header from "@/components/header";
import Footer from "@/components/footer";
import Brands from "@/components/brands";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { brandsData } from "@/data";

export const metadata: Metadata = {
  title: "Andersen Windows & Doors Garland TX",
  description: "Andersen window and door replacement in Garland, TX. Over 120 years of quality and innovation. Fibrex composite frames, Low-E glass. Call 972-734-3158.",
  keywords: "Andersen windows Garland TX, Andersen doors, Fibrex windows, window replacement Garland",
};

export default function AndersenPage() {
  const brand = brandsData.find(b => b.slug === "andersen-windows-doors");

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
            <li className="text-navy-900 font-medium">Andersen</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div className="relative z-10 px-6 max-w-7xl mx-auto py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
                Andersen Window & Door Replacement in Garland, TX
              </h1>
              <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                Over 120 years of quality, innovation, and craftsmanship.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Free Estimate
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md h-64 overflow-hidden rounded-lg bg-gray-700">
                <Image
                  src="/brands/andersen-windows-garland-tx.jpg"
                  alt="Andersen windows and doors"
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
                src="/andersen-windows-and-doors-garland-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-20 lg:h-24 w-auto mx-auto mb-4"
              />
              <h2 className="text-xl lg:text-2xl font-serif text-navy-900">Authorized Andersen Dealer</h2>
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
                About Andersen
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                {brand?.description}
              </p>
              <p className="text-navy-700 leading-relaxed">
                Andersen&apos;s commitment to innovation has produced breakthrough technologies like 
                Fibrex composite material, which combines the strength of wood with the low-maintenance 
                benefits of vinyl. Their Low-E4 glass packages provide exceptional energy efficiency, 
                making Andersen windows ideal for Garland&apos;s challenging climate.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Andersen Products We Install</h3>
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
              Why Choose Andersen for Your Garland Home
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Energy Efficiency</h3>
                <p className="text-navy-700 text-sm">
                  Low-E4 glass and Fibrex frames reduce heating and cooling costs year-round.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Durability</h3>
                <p className="text-navy-700 text-sm">
                  Built to withstand Texas heat, UV exposure, and severe weather conditions.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Aesthetic Excellence</h3>
                <p className="text-navy-700 text-sm">
                  Numerous styles and finishes to complement any architectural style.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">Professional Installation</h3>
                <p className="text-navy-700 text-sm">
                  Our certified installers ensure optimal performance for decades.
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
                <h3 className="font-semibold text-navy-900 mb-2">What makes Andersen a good choice for Garland homes?</h3>
                <p className="text-navy-700 text-sm">
                  Andersen windows and doors are engineered for hot climates like Garland, with superior 
                  energy efficiency to reduce cooling costs and durability to withstand intense sun.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How long do Andersen windows last?</h3>
                <p className="text-navy-700 text-sm">
                  Andersen windows typically last 30-50 years or more with proper maintenance. 
                  Their comprehensive warranties provide long-term peace of mind.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">What warranty does Andersen offer?</h3>
                <p className="text-navy-700 text-sm">
                  Andersen provides comprehensive warranty coverage, typically including 20-year limited 
                  warranties on many products. Specifics vary by product line.
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
            Ready to Upgrade to Andersen?
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on Andersen windows and doors in Garland, TX.
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
