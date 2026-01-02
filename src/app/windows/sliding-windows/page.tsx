import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sliding Window Replacement Garland TX | Wide Opening Views",
  description: "Professional sliding window replacement in Garland, TX. Horizontal sliding design for wide openings. Perfect for modern homes. Andersen, Pella, JELD-WEN. Call 972-734-3158.",
  keywords: "sliding windows Garland TX, horizontal windows, wide windows, window replacement Garland",
};

export default function SlidingWindows() {
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
            <li className="text-navy-900 font-medium">Sliding Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/windows/double-hung-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Sliding Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Wide views and easy operation with smooth horizontal sliding action.
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
                Perfect for Wide Openings
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Sliding windows operate on a horizontal track, making them ideal for wide openings where 
                vertical-sliding windows would be impractical. One or both sashes glide smoothly side-to-side 
                on precision tracks, providing excellent ventilation without requiring any exterior clearance.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                For Garland homes with limited exterior space, such as those facing walkways, patios, or 
                landscaping features, sliding windows offer full functionality without swinging sashes that 
                could obstruct pathways. They are also excellent above kitchen counters and sinks where 
                protruding casement sashes might interfere with work areas.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Modern sliding windows from premium manufacturers feature robust roller mechanisms, 
                multi-point locks for security, and advanced weatherstripping for energy efficiency. 
                Many models offer both sashes operable, allowing you to control airflow direction.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Sliding Window Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">No Exterior Clearance:</strong> Opens without projecting outside</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Easy Operation:</strong> Smooth gliding action requires minimal effort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Wide Openings:</strong> Perfect for panoramic views and wide spans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Low Maintenance:</strong> Few moving parts for reliable operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Modern Look:</strong> Clean horizontal lines suit contemporary design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Budget-Friendly:</strong> Simple mechanism keeps costs competitive</span>
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
                <h3 className="font-semibold text-navy-900 mb-2">Are sliding windows as energy efficient as other types?</h3>
                <p className="text-navy-700 text-sm">
                  Modern sliding windows with quality weatherstripping achieve excellent energy ratings. 
                  While not quite as tight as compression-seal windows, they perform very well.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can both sashes of a sliding window move?</h3>
                <p className="text-navy-700 text-sm">
                  Many sliding windows feature two operable sashes that both glide on tracks, giving you 
                  flexibility in ventilation control. Single-slider options are also available.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How do I clean sliding windows?</h3>
                <p className="text-navy-700 text-sm">
                  Many sliding windows feature tilt-in sashes or removable sashes for easy cleaning 
                  from inside your home.
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
            Ready for Wide, Beautiful Views?
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on sliding window replacement in Garland, TX.
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
