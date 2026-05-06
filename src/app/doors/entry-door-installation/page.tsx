import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entry Door Replacement Garland TX | Front Door Installation",
  description: "Entry doors for Heritage Crossing historic and Bradfield Estates traditional homes. Fiberglass, steel, and solid wood with multipoint locks. Hail-rated glass options. Free in-home estimate.",
  keywords: "entry doors Garland TX, front door replacement, door installation, fiberglass doors, steel doors",
};

export default function EntryDoorPage() {
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
            <li className="text-navy-900 font-medium">Entry Doors</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/doors/entry-doors-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Entry Door Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Transform your home&apos;s entrance with beautiful, secure, and energy-efficient entry doors.
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
                Make a Lasting First Impression
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Your entry door is more than just a functional barrier between your home and the outside world. 
                It is the first impression visitors have of your Garland home, a critical security feature 
                protecting your family and belongings, and a significant factor in your home&apos;s energy efficiency.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                A premium entry door from Andersen, Pella, JELD-WEN, or Marvin combines all three elements: 
                stunning aesthetics, robust security, and superior insulation, while requiring minimal 
                maintenance for decades. Whether you prefer the warmth of wood, the durability of fiberglass, 
                or the security of steel, we have options to match your style and budget.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Modern entry doors feature multi-point locking systems, reinforced frames, and insulated cores 
                that dramatically improve both security and energy efficiency compared to older doors. Many 
                Garland homeowners see noticeable reductions in drafts and energy costs after upgrading.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Entry Door Materials</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Fiberglass:</strong> Resists warping, rotting, and denting. Realistic wood grain textures. Low maintenance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Steel:</strong> Maximum security and excellent insulation. Most affordable option. Requires painting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Wood:</strong> Natural beauty and traditional charm. Premium option for distinctive homes.</span>
                </li>
              </ul>
              <h3 className="font-serif text-xl text-cream-100 mt-8 mb-4">Security Features</h3>
              <ul className="space-y-2 text-cream-200 text-sm">
                <li>- Multi-point locking systems</li>
                <li>- Reinforced steel frames</li>
                <li>- Impact-resistant glass options</li>
                <li>- Smart lock compatibility</li>
              </ul>
            </div>
          </div>

          {/* Material Deep Dive */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Picking the Right Entry Door for a Garland Home
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Fiberglass: The Default Pick</h3>
                <p>
                  Fiberglass is what we install most often in Garland. It doesn&apos;t expand or contract with the 100-degree summer-to-25-degree-winter temperature swing, it accepts wood-grain texturing that looks remarkably authentic, and it requires almost no maintenance over a 20-plus-year service life. Andersen&apos;s and JELD-WEN&apos;s fiberglass doors handle direct west-facing afternoon sun without warping, fading, or losing their gloss the way painted steel can.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Steel: Security and Value</h3>
                <p>
                  Steel doors are the right answer for Garland homes where security is the priority and budget matters. The 24-gauge skins on a quality steel door, paired with a polyurethane core and multi-point hardware, give a high security rating at a price below comparable fiberglass. The trade-off is that steel needs paint maintenance every 10 to 15 years, especially on west-facing exposures, and dings show more visibly than they do on textured fiberglass.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Wood: Architectural Statement</h3>
                <p>
                  Solid mahogany, knotty alder, and white oak doors remain the right pick for Garland custom homes and historic restorations where authenticity matters. Wood doors require a covered porch and a maintenance routine that includes refinishing every 3 to 5 years, but the look and feel are unmatched. We pair wood doors with a properly designed sill pan and rain gutter to extend service life.
                </p>
              </div>
            </div>
          </div>

          {/* Brand Showcase */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Premium Entry Door Brands
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Andersen</h3>
                <p className="text-navy-700 text-sm">
                  Fiberglass doors with Fibrex technology, beautiful designs, and superior durability.
                </p>
              </div>
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Pella</h3>
                <p className="text-navy-700 text-sm">
                  EnduraClad finish resists fading. Advanced security features and insulated cores.
                </p>
              </div>
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-xl text-navy-900 mb-3">JELD-WEN</h3>
                <p className="text-navy-700 text-sm">
                  Aurora fiberglass and AuraLast wood options at excellent value pricing.
                </p>
              </div>
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Marvin</h3>
                <p className="text-navy-700 text-sm">
                  Signature Collection with unlimited customization and premium craftsmanship.
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
                <h3 className="font-semibold text-navy-900 mb-2">How long does entry door replacement take?</h3>
                <p className="text-navy-700 text-sm">
                  Most entry door installations in Garland take 4 to 8 hours. Complex installations with 
                  sidelights or transoms may require a full day.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">What is the best entry door material for Texas weather?</h3>
                <p className="text-navy-700 text-sm">
                  Fiberglass and steel doors perform exceptionally well in Garland&apos;s climate. Both resist 
                  warping in temperature extremes and require minimal maintenance.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Do I need a permit to replace my entry door?</h3>
                <p className="text-navy-700 text-sm">
                  In most cases, replacing an entry door in an existing opening does not require a permit 
                  in Garland. We help navigate local requirements when needed.
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
            Ready to Transform Your Entrance?
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on entry door replacement in Garland, TX.
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
