import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluminum Window Replacement Garland TX | Durable, Modern Design",
  description: "Professional aluminum window replacement in Garland, TX. Sleek, durable aluminum windows with modern thermal efficiency. Andersen, Pella, JELD-WEN. Call 972-734-3158.",
  keywords: "aluminum windows Garland TX, aluminum replacement windows, durable windows, modern aluminum windows",
};

export default function AluminumWindows() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/materials" className="hover:text-gold-500">Materials</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Aluminum Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/window-types/aluminum-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Aluminum Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Sleek, durable performance with modern thermal efficiency and exceptional strength.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Exceptional Strength with Modern Efficiency
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern aluminum windows combine exceptional durability with advanced thermal break 
                technology to deliver superior performance for Garland homes. A thermal break is a 
                non-conductive material inserted between aluminum sections, creating an insulating 
                barrier that dramatically improves energy efficiency while maintaining aluminum&apos;s 
                sleek, contemporary appearance.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Aluminum&apos;s fundamental properties make it exceptionally well-suited for Garland&apos;s 
                climate. The material never rusts, rots, or warps, maintaining structural integrity 
                indefinitely. Aluminum windows resist impact damage from severe weather far better 
                than alternatives, making them ideal for Texas homes.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The material&apos;s ability to be extruded into thin, precise profiles creates narrow 
                sightlines that maximize glass area with minimal framing. Aluminum accepts a wide range 
                of exterior finishes, from natural silver tones to custom powder-coated colors that 
                match any architectural style.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Aluminum Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Exceptional Durability:</strong> Never rusts, rots, or warps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Thermal Break Technology:</strong> Advanced insulation for energy efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Sleek Design:</strong> Narrow sightlines maximize glass area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Impact Resistant:</strong> Superior strength for severe weather</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Custom Colors:</strong> Wide range of powder-coated finishes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Long Lasting:</strong> 40+ year lifespan with proper maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are aluminum windows energy efficient?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, modern aluminum windows with thermal break technology achieve energy efficiency 
                  comparable to vinyl windows. The thermal break prevents heat conduction through the 
                  metal, reducing heating and cooling costs by 25-35% in Garland&apos;s climate.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Do aluminum windows require maintenance?</h3>
                <p className="text-navy-700 text-sm">
                  Aluminum windows require periodic exterior refinishing (typically every 8-12 years) 
                  to maintain appearance. The frames themselves never corrode or degrade, and interior 
                  surfaces require only occasional cleaning.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are aluminum windows suitable for large openings?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, aluminum&apos;s strength enables larger window units and thinner sightlines than 
                  other materials. This makes aluminum ideal for maximizing views while maintaining 
                  structural stability in Garland homes.
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
            Experience the Aluminum Difference
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on aluminum window replacement in Garland, TX.
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
