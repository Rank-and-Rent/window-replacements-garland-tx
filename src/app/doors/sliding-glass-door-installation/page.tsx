import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sliding Glass Door Replacement Garland TX | Space-Saving Design",
  description: "Professional sliding glass door replacement in Garland, TX. Space-saving operation with expansive glass panels. Andersen, Pella, JELD-WEN. Call 972-734-3158.",
  keywords: "sliding glass doors Garland TX, slider doors, patio sliders, door replacement Garland",
};

export default function SlidingGlassDoorPage() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/doors" className="hover:text-gold-500">Doors</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Sliding Glass Doors</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/doors/sliding-glass-doors-garland-tx.avif')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Sliding Glass Door Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Maximize natural light and space with smooth-gliding sliding glass doors.
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
                Space-Smart Design, Maximum Views
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Sliding glass doors are the ultimate space-saving solution for connecting indoor and 
                outdoor living areas. Operating on smooth tracks, they require no floor clearance for 
                swinging panels, making them ideal for rooms with furniture near the door opening or 
                compact patios and decks.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern sliding glass doors feature large glass panels that flood interiors with natural 
                light while framing outdoor views. Premium models from Andersen, Pella, and JELD-WEN 
                glide effortlessly on precision-engineered tracks and seal tightly when closed for 
                excellent energy efficiency.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Available in two, three, or four-panel configurations, sliding glass doors can span wide 
                openings that would be impractical with hinged doors. Some models offer panels that stack 
                to one side, creating nearly unobstructed openings between indoor and outdoor spaces.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Sliding Glass Door Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Space Efficient:</strong> No swing clearance needed for operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Maximum Glass:</strong> Large panels maximize light and views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Easy Operation:</strong> Smooth gliding action requires little effort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Wide Spans:</strong> Multi-panel options for extra-wide openings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Contemporary Look:</strong> Clean lines suit modern architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Value:</strong> Often more affordable than hinged alternatives</span>
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
                <h3 className="font-semibold text-navy-900 mb-2">How wide can sliding glass doors be?</h3>
                <p className="text-navy-700 text-sm">
                  Multi-panel sliding doors can span 8 to 16 feet or more, depending on the manufacturer 
                  and configuration. Three and four-panel options are available for extra-wide openings.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are sliding glass doors energy efficient?</h3>
                <p className="text-navy-700 text-sm">
                  Modern sliding glass doors with Low-E glass and proper weatherstripping achieve excellent 
                  energy ratings. Quality track systems create tight seals when closed.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How do I maintain sliding glass doors?</h3>
                <p className="text-navy-700 text-sm">
                  Keep tracks clean and free of debris. Occasionally lubricate rollers and tracks. 
                  Clean glass and weatherstripping regularly for optimal performance.
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
            Ready for Effortless Access?
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on sliding glass door replacement in Garland, TX.
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
