import Header from "@/components/header";
import Footer from "@/components/footer";
import BrandLogos from "@/components/brand-logos";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Double-Hung Window Replacement Garland TX | Classic Vertical Sliding",
  description: "Double-hung windows for Bradfield Estates traditionals and Heritage Crossing historic homes. Tilt-in sashes clean from inside, ideal for two-story Naaman Forest builds. Andersen, Pella, Marvin.",
  keywords: "double hung windows Garland TX, vertical sliding windows, replacement windows, window installation Garland",
};

export default function DoubleHungWindows() {
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
            <li className="text-navy-900 font-medium">Double-Hung Windows</li>
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
            Double-Hung Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            The classic American window style with modern energy efficiency and easy-clean features.
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
                The Most Popular Window Style in America
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Double-hung windows have been the preferred choice for American homes for over two centuries, 
                and for good reason. With two operable sashes that slide vertically, these windows offer 
                unmatched versatility in ventilation control. Open just the top sash to let hot air escape, 
                just the bottom for a direct breeze, or both for maximum airflow.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern double-hung windows from Andersen, Pella, JELD-WEN, and Marvin have evolved far beyond 
                their traditional roots. Today&apos;s models feature tilt-in sashes that make cleaning both sides 
                of the glass from inside your Garland home effortless. Advanced weatherstripping and 
                multi-point locks create tight seals that dramatically improve energy efficiency.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The timeless aesthetics of double-hung windows complement virtually any architectural style, 
                from historic craftsman homes in older Garland neighborhoods to modern construction throughout 
                the Dallas-Fort Worth metroplex. Their familiar appearance maintains curb appeal while 
                delivering cutting-edge performance.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Double-Hung Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Versatile Ventilation:</strong> Open top, bottom, or both sashes for customized airflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Easy Cleaning:</strong> Tilt-in sashes allow cleaning both sides from inside</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Classic Beauty:</strong> Timeless design suits any architectural style</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Child Safety:</strong> Can ventilate with only top sash for peace of mind</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Screen-Friendly:</strong> Full screens remain in place while windows operate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">AC Compatible:</strong> Easy installation of window air conditioning units</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Brand Logos */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Premium Brands We Install
            </h2>
            <BrandLogos size="lg" />
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How long does double-hung window replacement take?</h3>
                <p className="text-navy-700 text-sm">
                  Most double-hung window replacements in Garland take 30-60 minutes per window. A typical 
                  whole-house project of 10-15 windows can be completed in 1-2 days.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are double-hung windows energy efficient?</h3>
                <p className="text-navy-700 text-sm">
                  Modern double-hung windows with Low-E glass and proper weatherstripping achieve excellent 
                  energy efficiency ratings. They perform best when both sashes are fully closed.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How much do double-hung windows cost in Garland?</h3>
                <p className="text-navy-700 text-sm">
                  Prices vary by brand, size, and features. Contact us for a free estimate tailored to your 
                  specific project requirements and preferences.
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
            Ready to Upgrade Your Windows?
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us today for a free consultation on double-hung window replacement in Garland, TX.
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
