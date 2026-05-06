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
          style={{ backgroundImage: "url('/doors/french-doors-garland-tx.webp')" }}
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
                French doors give a Garland home an unmistakable architectural moment. The double-leaf design with full-lite glass panels works in nearly every architectural context we see in this market, from a 1960s ranch in Eastern Hills opening to a back patio, to a custom-built two-story in Firewheel where the great room steps down to a covered loggia. We install them on patios, between formal living rooms and back yards, between primary suites and balconies, and in interior applications between studies, dining rooms, and great rooms where light flow and architectural transition matter.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern French doors from Andersen, Pella, JELD-WEN, and Marvin combine the look of the classic with serious modern performance. Multi-point compression hardware locks the doors at three or more points along the frame, completely changing the feel of operation versus the floppy single-deadbolt French doors many older Garland homes still have. Low-E coatings cut summer heat gain on west-facing patios, and laminated glass options provide both security and acoustic performance for homeowners on busier streets.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Configuration options include both doors active for full-width opening, one active with one fixed for daily use with occasional grand opening, inswing or outswing depending on porch and patio geometry, and a wide range of muntin patterns including six-lite, ten-lite, and full-lite. We help match grid pattern and frame proportion to the rest of the home.
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

          {/* Use Cases */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Where French Doors Work Best in Garland Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Living Room or Den to Patio</h3>
                <p className="mb-4">
                  The most common French-door application in Garland is converting a sliding glass door from the original construction to a hinged French-door pair. The grid pattern reads more architecturally than a slider, the operation feels solid, and proper compression weatherstripping keeps conditioned air inside even during the worst summer afternoons.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Primary Suite to Backyard</h3>
                <p>
                  In larger Garland homes, particularly newer Firewheel and Naaman Forest builds, primary suites often open to a private garden or pool deck. A pair of French doors with laminated glass adds privacy, security, and quiet to that transition.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Interior Study or Office</h3>
                <p className="mb-4">
                  Interior French doors are an increasingly common request as more Garland homeowners create dedicated home offices. Glass panels keep the room visually connected to the rest of the home while providing acoustic separation when the door is closed for calls.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Dining Room to Sunroom</h3>
                <p>
                  For Garland homes with attached sunrooms or screened porches, French doors create a beautiful transition that can be opened wide for entertaining or closed to maintain conditioned space inside the main house.
                </p>
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
