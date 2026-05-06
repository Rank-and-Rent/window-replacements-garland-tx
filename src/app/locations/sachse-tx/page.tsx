import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Sachse TX | Professional Installation Near Garland",
  description: "Window replacement in Sachse, TX. Garland-based crews running up Hwy 78 for Woodbridge, Hidden Creek, and the master-planned subdivisions on the Garland-Sachse line. Andersen, Pella, JELD-WEN.",
  keywords: "window replacement Sachse TX, Sachse windows, window installation Sachse",
};

export default function SachseWindowReplacement() {
  return (
    <main>
      <Header />
      
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-sachse-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Sachse, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Quality window solutions for Sachse&apos;s growing, family-oriented community.
          </p>
          <a href="tel:972-734-3158" className="btn-primary">
            Call 972-734-3158
          </a>
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Sachse&apos;s Trusted Window Service
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Sachse maintains its small-town character while growing into a thriving Dallas-area community. The combination 
                of excellent schools, convenient location between Garland and Wylie, and quality neighborhoods makes Sachse 
                an attractive place for families. Our window replacement services support Sachse homeowners who want to 
                improve their homes&apos; comfort, efficiency, and value through quality upgrades that fit within family budgets.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                As your Garland neighbors, we understand Sachse&apos;s community values and architectural styles. Whether you&apos;re 
                in an established neighborhood or newer development, we bring appropriate expertise for homes ranging from 
                1980s ranch styles to modern two-story construction. Sachse families appreciate our straightforward approach—
                honest assessments, fair pricing, and quality workmanship that delivers long-term value.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Sachse Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Local Service:</strong> Rapid response from nearby Garland</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Family Focus:</strong> Understanding busy household schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Savings:</strong> Reduce utility bills significantly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Quality Products:</strong> Premium brands at fair prices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Window Services for Sachse Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Established Neighborhood Updates</h3>
                <p className="text-navy-700 text-sm">
                  Many Sachse homes from the 1980s-90s need window replacement as original units reach end of life. We 
                  specialize in full-frame replacements that address structural issues while upgrading to modern energy 
                  efficiency. The transformation in comfort and utility bills makes window replacement one of the best 
                  home improvements for established Sachse neighborhoods.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">New Construction Upgrades</h3>
                <p className="text-navy-700 text-sm">
                  Newer Sachse homes sometimes come with builder-grade windows that don&apos;t meet homeowner expectations. 
                  We upgrade to premium brands with better hardware, improved energy performance, and enhanced durability. 
                  Even recent windows can be cost-effectively replaced if they&apos;re underperforming—the benefits justify 
                  the investment for discerning homeowners.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Serving Sachse with Integrity
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Join your Sachse neighbors who trust us for window replacement that delivers lasting value. Schedule your 
              free consultation today and experience the difference local expertise makes.
            </p>
            <a href="tel:972-734-3158" className="btn-primary">
              Call 972-734-3158
            </a>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}

