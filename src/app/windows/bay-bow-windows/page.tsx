import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bay & Bow Window Replacement Garland TX | Elegant Projecting Windows",
  description: "Professional bay and bow window replacement in Garland, TX. Multi-panel projecting windows that add space and character. Andersen, Pella, JELD-WEN. Call 972-734-3158.",
  keywords: "bay windows Garland TX, bow windows, projecting windows, window replacement Garland",
};

export default function BayBowWindows() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/windows" className="hover:text-gold-500">Windows</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Bay & Bow Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/windows/bay-bow-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Bay & Bow Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Add architectural drama, extra space, and panoramic views to your home.
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
                Transform Your Space with Projecting Windows
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Bay and bow windows project outward from your home, creating additional interior space 
                while dramatically increasing natural light from multiple angles. These architectural 
                features transform ordinary rooms into stunning focal points and add significant curb 
                appeal to any Garland home.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Bay windows typically consist of three panels: a large center picture window flanked by 
                operable casement or double-hung windows at angled sides. Bow windows feature four or 
                more panels arranged in a gentle curve. Both create cozy window seats, display areas, 
                or simply expand your living space.
              </p>
              <p className="text-navy-700 leading-relaxed">
                In Garland&apos;s real estate market, bay and bow windows are highly desirable features that 
                can increase your home&apos;s value. They are particularly stunning in living rooms, master 
                bedrooms, and dining areas where the extra space and light make the biggest impact.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Bay & Bow Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Extra Space:</strong> Projecting design adds usable interior area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Panoramic Views:</strong> Multiple angles expand your sightlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Maximum Light:</strong> Light enters from three or more directions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Curb Appeal:</strong> Dramatic architectural statement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Home Value:</strong> Desirable feature that increases worth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Ventilation:</strong> Side windows provide operable airflow</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bay vs Bow */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Bay vs. Bow: What&apos;s the Difference?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-4">Bay Windows</h3>
                <ul className="space-y-2 text-navy-700 text-sm">
                  <li>- Three panels at distinct angles (typically 30 or 45 degrees)</li>
                  <li>- More angular, geometric appearance</li>
                  <li>- Often larger projection from wall</li>
                  <li>- Better suited for traditional architecture</li>
                  <li>- Creates a defined window seat area</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-4">Bow Windows</h3>
                <ul className="space-y-2 text-navy-700 text-sm">
                  <li>- Four or more panels in a gentle curve</li>
                  <li>- Softer, more flowing appearance</li>
                  <li>- Creates wider panoramic views</li>
                  <li>- Complements both traditional and contemporary homes</li>
                  <li>- Provides more glass area overall</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Do bay and bow windows require special installation?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, proper structural support is essential. Our installers are experienced with the 
                  cables, braces, or knee brackets needed to support these projecting windows.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can I add a window seat with my bay window?</h3>
                <p className="text-navy-700 text-sm">
                  Absolutely. Bay windows are perfect for built-in seating or storage beneath. 
                  We can coordinate with carpenters to create the perfect finished look.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are bay and bow windows energy efficient?</h3>
                <p className="text-navy-700 text-sm">
                  Modern bay and bow windows from premium manufacturers achieve excellent energy ratings 
                  with Low-E glass and proper insulation around the projecting structure.
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
            Add Drama to Your Home
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on bay and bow window replacement in Garland, TX.
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
