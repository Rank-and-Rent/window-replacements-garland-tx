import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement McKinney TX | Professional Installation",
  description: "Expert window replacement in McKinney, Texas. Historic homes and new construction. Premium windows. Call 972-734-3158.",
  keywords: "window replacement McKinney TX, McKinney windows, Collin County window installation",
};

export default function McKinneyWindowReplacement() {
  return (
    <main>
      <Header />
      
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/windows/double-hung-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in McKinney, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Quality window solutions for McKinney&apos;s historic charm and modern neighborhoods.
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
                McKinney&apos;s Window Service Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                McKinney masterfully blends historic preservation with modern growth. The charming downtown square showcases 
                19th-century architecture while surrounding neighborhoods span every era through today&apos;s luxury developments. 
                This architectural diversity requires versatile window expertise—understanding both preservation standards 
                for historic properties and performance expectations for contemporary homes.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We serve McKinney&apos;s entire architectural spectrum with appropriate solutions. Historic home windows require 
                careful matching of profiles and details while incorporating modern energy efficiency. Newer construction 
                benefits from premium brands and advanced glass technology. McKinney homeowners appreciate our ability to 
                navigate these varying requirements while delivering consistent quality across all applications.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">McKinney Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Historic Expertise:</strong> Preservation-appropriate solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Modern Performance:</strong> Energy-efficient technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Versatile Service:</strong> All architectural styles</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Serving McKinney with Expertise
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              From historic downtown to modern developments, we bring appropriate expertise to every McKinney home.
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

