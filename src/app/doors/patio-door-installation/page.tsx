import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patio Door Replacement Garland TX | Indoor-Outdoor Living",
  description: "Professional patio door replacement in Garland, TX. Sliding and hinged patio doors for seamless indoor-outdoor access. Andersen, Pella, JELD-WEN. Call 972-734-3158.",
  keywords: "patio doors Garland TX, sliding patio doors, hinged patio doors, door replacement Garland",
};

export default function PatioDoorPage() {
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
            <li className="text-navy-900 font-medium">Patio Doors</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/doors/patio-doors-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Patio Door Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Connect your indoor and outdoor living spaces with beautiful, functional patio doors.
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
                Seamless Indoor-Outdoor Living
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                The patio door is one of the hardest-working openings in a Garland home. It opens and closes thousands of times a year, takes the worst of the west-facing afternoon sun, and is the largest single source of heat gain on most floor plans. The original aluminum sliders that came in a 1980s tract home, or the early vinyl sliders installed in 1990s and 2000s subdivisions, almost universally need replacement by their 20-year mark. Drag, draft, and failed weatherstripping are the telltale signs.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern patio doors from Andersen, Pella, JELD-WEN, and Marvin operate on completely different mechanical principles than the originals. Andersen&apos;s 200 and 400 Series sliders glide on tandem stainless rollers that don&apos;t bind. Pella&apos;s Lifestyle and Reserve sliders use a self-contained track and brush-seal weatherstripping that performs through Garland&apos;s 100-degree summers. Hinged patio doors with multi-point compression hardware lock the slab tight against weatherstripping at three or four points, transforming both energy performance and security.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Glass packages matter enormously on patio doors because of the surface area. Low-E366 and SunDefense glass packages cut solar heat gain dramatically on west-facing patios, and laminated acoustic interlayers reduce highway noise on Garland homes near I-635, I-30, or Hwy 78.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Patio Door Options</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Sliding:</strong> Glide on tracks for space-efficient operation. No floor clearance needed.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Hinged:</strong> Swing open like traditional doors. Available single or double configuration.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">French Style:</strong> Classic divided glass panels with elegant hardware.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Contemporary:</strong> Minimalist frames with maximum glass area.</span>
                </li>
              </ul>
              <h3 className="font-serif text-xl text-cream-100 mt-8 mb-4">Key Features</h3>
              <ul className="space-y-2 text-cream-200 text-sm">
                <li>- Large glass panels for maximum light</li>
                <li>- Energy-efficient Low-E glass</li>
                <li>- Multi-point locking systems</li>
                <li>- Smooth, quiet operation</li>
              </ul>
            </div>
          </div>

          {/* Sliding vs Hinged Deep Dive */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Sliding vs Hinged: How to Choose
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Pick Sliding When...</h3>
                <p className="mb-4">
                  The patio side of the room is tight on swing space, the door is in heavy daily use, or you want maximum glass area for a panoramic view. Sliding doors don&apos;t require any clearance for the swing arc, which matters when furniture sits close to the door or when the patio is narrow.
                </p>
                <p>
                  We typically recommend Andersen&apos;s 200 and 400 Series, Pella Lifestyle and Reserve, JELD-WEN Premium Vinyl, and Marvin Elevate sliders for Garland homes. All four operate on smooth tandem rollers and use compression weatherstripping that holds up through Texas heat cycles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Pick Hinged When...</h3>
                <p className="mb-4">
                  Architectural intent calls for a more traditional look, you want the multi-point security that swing doors offer, or you frequently want to open both leaves wide for entertaining. Hinged French-style and single-leaf patio doors lock at three or more points along the frame, which improves both performance and security.
                </p>
                <p>
                  Hinged patio doors do need swing clearance — typically 32 to 36 inches inside or outside the door, depending on which way it swings. We help homeowners decide between inswing and outswing based on furniture layout and patio geometry.
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
                <h3 className="font-semibold text-navy-900 mb-2">What is the difference between sliding and hinged patio doors?</h3>
                <p className="text-navy-700 text-sm">
                  Sliding doors glide horizontally on tracks and require no floor clearance. Hinged doors 
                  swing open like traditional doors and typically offer wider openings when fully open.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are patio doors energy efficient?</h3>
                <p className="text-navy-700 text-sm">
                  Modern patio doors with Low-E glass and proper weatherstripping achieve excellent energy 
                  efficiency. They are designed to handle Garland&apos;s temperature extremes.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How secure are patio doors?</h3>
                <p className="text-navy-700 text-sm">
                  Premium patio doors feature multi-point locking systems, tempered or laminated glass, 
                  and reinforced frames for excellent security.
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
            Open Up Your Living Space
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on patio door replacement in Garland, TX.
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
