import Header from "@/components/header";
import Footer from "@/components/footer";
import BrandLogos from "@/components/brand-logos";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single-Hung Window Replacement Garland TX | Affordable Quality",
  description: "Single-hung windows for whole-home replacements across Camelot, Spring Park, and Heatherwood. Fixed upper sash keeps the price down on big projects. Andersen, Pella, JELD-WEN. Free measurement.",
  keywords: "single hung windows Garland TX, affordable windows, replacement windows, window installation Garland",
};

export default function SingleHungWindows() {
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
            <li className="text-navy-900 font-medium">Single-Hung Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/windows/single-hung-windows-garland-tx.webp')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Single-Hung Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Classic style and reliable performance at an affordable price point.
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
                Quality Windows at Value Pricing
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Single-hung windows offer the classic look of traditional double-hung windows with a 
                simpler, more cost-effective design. With a fixed upper sash and an operable lower sash, 
                these windows deliver excellent ventilation while reducing manufacturing complexity and cost.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                For Garland homeowners seeking to replace multiple windows on a budget, single-hung windows 
                from premium manufacturers like Andersen, Pella, and JELD-WEN provide exceptional value without 
                sacrificing quality or energy efficiency. Modern single-hung windows feature the same advanced 
                glass packages and weatherstripping as their double-hung counterparts.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The fewer moving parts in single-hung windows also mean less potential for mechanical issues
                over time. Many homeowners appreciate this simplicity, especially in upper-floor installations
                where the fixed top sash provides enhanced security while the bottom sash handles ventilation needs.
              </p>
            </div>

            {/* Brand Logos */}
            <div className="mt-12">
              <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-6 text-center">
                Premium Brands We Install
              </h3>
              <BrandLogos size="md" />
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Single-Hung Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Budget-Friendly:</strong> Lower cost than double-hung with similar appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Reliable Operation:</strong> Fewer moving parts mean less maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Classic Look:</strong> Traditional aesthetic suits most home styles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Secure Design:</strong> Fixed top sash adds security for upper floors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Energy Efficient:</strong> Same glass options as double-hung models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Easy Tilt-In:</strong> Many models feature tilt-in for easy cleaning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Single-Hung in Garland Homes */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              The Smart Pick for Many Garland Replacement Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Bedrooms and Secondary Rooms</h3>
                <p className="mb-4">
                  Single-hung windows make sense in bedrooms, hallways, and secondary spaces where the top sash is rarely if ever opened. The cost savings versus double-hungs across a 12-to-15-window whole-house package add up to a meaningful number, and the energy performance is essentially identical when both styles are properly sealed.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Two-Story Replacement</h3>
                <p>
                  On second-story openings in Garland two-stories, the fixed top sash of a single-hung is actually an advantage: it&apos;s less to maintain, less to weatherstrip, and one fewer thing to break or fail. Every Andersen, Pella, and JELD-WEN single-hung we install includes the same Low-E glass options offered on the double-hung version.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Rental Property and Investment Homes</h3>
                <p className="mb-4">
                  For Garland homeowners with rental properties, single-hungs strike the right balance between durability, simplicity, and cost. There&apos;s less hardware to fail, no upper-sash mechanism for tenants to misuse, and replacement parts are widely available across all the major brands.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Mixed-Style Projects</h3>
                <p>
                  Many of our Garland whole-house replacement projects use single-hungs in secondary rooms and double-hungs in primary spaces, balancing budget and function. The exterior appearance is virtually identical from the curb, so curb appeal is preserved without paying for the second operable sash where it isn&apos;t needed.
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
                <h3 className="font-semibold text-navy-900 mb-2">What is the difference between single-hung and double-hung windows?</h3>
                <p className="text-navy-700 text-sm">
                  Single-hung windows have a fixed top sash with only the bottom sash moving, while double-hung 
                  windows have two operable sashes. Both offer similar aesthetics and energy efficiency.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are single-hung windows as energy efficient as double-hung?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, single-hung windows can achieve the same energy ratings. With one fewer operable sash, 
                  some single-hung models actually seal slightly better since there are fewer potential air gaps.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can I clean single-hung windows from inside?</h3>
                <p className="text-navy-700 text-sm">
                  Many modern single-hung windows feature a tilt-in lower sash for easy interior cleaning. 
                  The fixed upper sash may require exterior access for cleaning.
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
            Get Quality Windows at a Great Price
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free estimate on single-hung window replacement in Garland, TX.
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
