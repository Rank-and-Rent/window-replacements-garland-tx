import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinyl Window Replacement Garland TX | Low Maintenance, Energy Efficient",
  description: "Professional vinyl window replacement in Garland, TX. Low-maintenance, energy-efficient vinyl windows with superior durability. Andersen, Pella, JELD-WEN. Call 972-734-3158.",
  keywords: "vinyl windows Garland TX, vinyl replacement windows, low maintenance windows, energy efficient vinyl windows",
};

export default function VinylWindows() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/materials" className="hover:text-gold-500">Materials</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Vinyl Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/window-types/vinyl-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Vinyl Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Low-maintenance excellence with superior energy performance and lasting durability.
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
                The Most Popular Window Material Choice
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Vinyl windows have become the most popular choice for Garland homeowners seeking 
                the perfect balance of performance, value, and low maintenance. Modern vinyl windows 
                feature multi-chambered frames that create superior thermal barriers, reducing heating 
                and cooling costs by 25-35% compared to older single-pane windows.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The smooth, non-porous vinyl surface requires virtually no maintenance—no painting, 
                staining, or refinishing ever needed. This makes vinyl windows ideal for busy Garland 
                families who want beautiful, efficient windows without the ongoing maintenance demands 
                of wood or the periodic painting required by aluminum.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Advanced manufacturing techniques create fusion-welded corners that are stronger than 
                mechanical fasteners, ensuring windows maintain their structural integrity for decades. 
                Modern vinyl formulations resist fading, warping, and cracking even in Garland&apos;s 
                intense Texas sun, providing lasting performance and appearance.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Vinyl Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Low Maintenance:</strong> Never needs painting or staining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Energy Efficient:</strong> Multi-chambered frames provide superior insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Durable:</strong> Resists fading, warping, and cracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Cost Effective:</strong> Excellent value for performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Versatile:</strong> Available in all window styles and colors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Long Lasting:</strong> 30-40 year lifespan with proper care</span>
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
                <h3 className="font-semibold text-navy-900 mb-2">Are vinyl windows suitable for Garland&apos;s climate?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, modern vinyl windows are specifically designed to handle Texas heat and sun. 
                  UV-resistant formulations prevent fading, and multi-chambered construction provides 
                  excellent thermal performance for Garland&apos;s hot summers and cool winters.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Do vinyl windows require maintenance?</h3>
                <p className="text-navy-700 text-sm">
                  Vinyl windows require virtually no maintenance. The smooth, non-porous surface 
                  resists dirt and staining. Occasional cleaning with soap and water is all that&apos;s 
                  needed—no painting, staining, or refinishing ever required.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How energy efficient are vinyl windows?</h3>
                <p className="text-navy-700 text-sm">
                  Vinyl windows with multi-chambered frames and Low-E glass can reduce heating and 
                  cooling costs by 25-35%. Many models qualify for ENERGY STAR certification and 
                  local energy rebates in Garland.
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
            Experience the Vinyl Difference
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on vinyl window replacement in Garland, TX.
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
