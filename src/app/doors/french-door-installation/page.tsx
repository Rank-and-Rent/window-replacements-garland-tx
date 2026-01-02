import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "French Door Replacement Garland TX | Elegant Double Doors",
  description: "Professional French door replacement in Garland, TX. Classic double doors with glass panels for elegant transitions. Andersen, Pella, JELD-WEN, Marvin. Call 972-734-3158.",
  keywords: "French doors Garland TX, double doors, glass panel doors, door replacement Garland",
};

export default function FrenchDoorPage() {
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
            <li className="text-navy-900 font-medium">French Doors</li>
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
            French Door Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Timeless elegance with classic double door design and beautiful glass panels.
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
                Classic Beauty That Never Goes Out of Style
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                French doors have graced elegant homes for centuries, and their timeless appeal shows no 
                signs of fading. These classic double doors feature glass panels that allow natural light 
                to flow between spaces while creating a grand, welcoming entrance to patios, gardens, 
                or between interior rooms.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern French doors from premium manufacturers combine traditional aesthetics with 
                contemporary performance. Advanced glass technologies block UV rays and reduce heat 
                transfer, while multi-point locking systems provide the security Garland homeowners 
                expect from their exterior doors.
              </p>
              <p className="text-navy-700 leading-relaxed">
                French doors are available in a variety of configurations: both doors active, one active 
                with one fixed, inswing or outswing, and with various muntin patterns to match your 
                home&apos;s architectural style.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">French Door Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Elegant Design:</strong> Classic beauty that complements any home style</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Natural Light:</strong> Glass panels maximize daylight between spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Wide Opening:</strong> Both doors open for generous passage width</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Versatile:</strong> Perfect for exterior or interior applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Home Value:</strong> Desirable feature that increases appeal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Customizable:</strong> Various glass and muntin options available</span>
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
                <h3 className="font-semibold text-navy-900 mb-2">Should French doors swing in or out?</h3>
                <p className="text-navy-700 text-sm">
                  Exterior French doors typically swing outward to maximize interior floor space and improve 
                  weather sealing. Interior French doors usually swing inward or can be configured either way.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are French doors secure?</h3>
                <p className="text-navy-700 text-sm">
                  Modern French doors feature multi-point locking systems and tempered or laminated glass 
                  for excellent security. Reinforced frames and quality hardware add protection.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can French doors be energy efficient?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, premium French doors with Low-E glass, proper weatherstripping, and insulated frames 
                  achieve excellent energy efficiency ratings suitable for Garland&apos;s climate.
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
            Add Timeless Elegance to Your Home
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on French door replacement in Garland, TX.
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
