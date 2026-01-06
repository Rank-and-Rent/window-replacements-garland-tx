import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { servicesData } from "@/data";

export const metadata: Metadata = {
  title: "Window Materials Garland TX | Vinyl, Aluminum, Fiberglass, Wood Windows",
  description: "Choose the perfect window material for your Garland home. Vinyl, aluminum, fiberglass, Fibrex, wood-clad, and wood windows. Expert guidance. Free estimates. Call 972-734-3158.",
  keywords: "window materials Garland TX, vinyl windows, aluminum windows, fiberglass windows, wood windows, Fibrex windows",
  alternates: {
    canonical: 'https://windowreplacementgarlandtx.com/materials',
  },
};

export default function MaterialsIndexPage() {
  const materialServices = servicesData.filter(s => s.category === "Materials");

  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Materials</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/window-types/vinyl-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Materials in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Choose from premium window materials designed for Garland&apos;s climate.
            Each material offers unique benefits in durability, energy efficiency, and aesthetic appeal.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-12 text-center">
            Our Window Materials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialServices.map((material) => {
              // Map material slugs to image paths
              const imageMap: Record<string, string> = {
                'vinyl-windows': '/window-types/vinyl-garland-tx.jpg',
                'aluminum-windows': '/window-types/aluminum-garland-tx.jpg',
                'fibrex-windows': '/window-types/fibrex-garland-tx.jpg',
                'fiberglass-windows': '/window-types/fiberglass-garland-tx.jpg',
                'wood-clad-windows': '/window-types/wood-clad-garland-tx.jpg',
                'wood-windows': '/window-types/wood-garland-tx.jpg',
              };
              
              return (
                <Link
                  key={material.slug}
                  href={material.route}
                  className="bg-white p-6 border-t-4 border-gold-500 hover:shadow-lg transition-shadow"
                >
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-200">
                    <Image
                      src={imageMap[material.slug] || '/window-types/vinyl-garland-tx.jpg'}
                      alt={`${material.name} in Garland, TX`}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-navy-900 mb-3">{material.name}</h3>
                  <p className="text-navy-700 text-sm mb-4">{material.short}</p>
                  <span className="text-gold-500 text-sm font-medium">Learn More</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-12 text-center">
            Why Material Choice Matters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gold-500 mb-3">Energy Efficiency</h3>
              <p className="text-cream-200 text-sm">The right material can significantly reduce your cooling costs in Garland&apos;s hot summers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gold-500 mb-3">Durability</h3>
              <p className="text-cream-200 text-sm">Materials are tested to withstand Texas weather, UV exposure, and temperature extremes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gold-500 mb-3">Low Maintenance</h3>
              <p className="text-cream-200 text-sm">Many modern materials require minimal upkeep, saving you time and money.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gold-500 mb-3">Curb Appeal</h3>
              <p className="text-cream-200 text-sm">Each material offers unique aesthetic qualities to enhance your home&apos;s appearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Comparison */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-12 text-center">
            Material Comparison Guide
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-navy-900 text-cream-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-serif">Material</th>
                    <th className="px-6 py-4 text-center font-serif">Energy Efficiency</th>
                    <th className="px-6 py-4 text-center font-serif">Durability</th>
                    <th className="px-6 py-4 text-center font-serif">Maintenance</th>
                    <th className="px-6 py-4 text-center font-serif">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-cream-100">
                    <td className="px-6 py-4 font-medium text-navy-900">Vinyl</td>
                    <td className="px-6 py-4 text-center text-navy-700">Excellent</td>
                    <td className="px-6 py-4 text-center text-navy-700">Very Good</td>
                    <td className="px-6 py-4 text-center text-navy-700">Minimal</td>
                    <td className="px-6 py-4 text-center text-navy-700">$$</td>
                  </tr>
                  <tr className="hover:bg-cream-100">
                    <td className="px-6 py-4 font-medium text-navy-900">Aluminum</td>
                    <td className="px-6 py-4 text-center text-navy-700">Good</td>
                    <td className="px-6 py-4 text-center text-navy-700">Excellent</td>
                    <td className="px-6 py-4 text-center text-navy-700">Low</td>
                    <td className="px-6 py-4 text-center text-navy-700">$$</td>
                  </tr>
                  <tr className="hover:bg-cream-100">
                    <td className="px-6 py-4 font-medium text-navy-900">Fibrex</td>
                    <td className="px-6 py-4 text-center text-navy-700">Excellent</td>
                    <td className="px-6 py-4 text-center text-navy-700">Excellent</td>
                    <td className="px-6 py-4 text-center text-navy-700">Low</td>
                    <td className="px-6 py-4 text-center text-navy-700">$$$</td>
                  </tr>
                  <tr className="hover:bg-cream-100">
                    <td className="px-6 py-4 font-medium text-navy-900">Fiberglass</td>
                    <td className="px-6 py-4 text-center text-navy-700">Excellent</td>
                    <td className="px-6 py-4 text-center text-navy-700">Excellent</td>
                    <td className="px-6 py-4 text-center text-navy-700">Low</td>
                    <td className="px-6 py-4 text-center text-navy-700">$$$</td>
                  </tr>
                  <tr className="hover:bg-cream-100">
                    <td className="px-6 py-4 font-medium text-navy-900">Wood Clad</td>
                    <td className="px-6 py-4 text-center text-navy-700">Excellent</td>
                    <td className="px-6 py-4 text-center text-navy-700">Very Good</td>
                    <td className="px-6 py-4 text-center text-navy-700">Moderate</td>
                    <td className="px-6 py-4 text-center text-navy-700">$$$$</td>
                  </tr>
                  <tr className="hover:bg-cream-100">
                    <td className="px-6 py-4 font-medium text-navy-900">Wood</td>
                    <td className="px-6 py-4 text-center text-navy-700">Excellent</td>
                    <td className="px-6 py-4 text-center text-navy-700">Good</td>
                    <td className="px-6 py-4 text-center text-navy-700">Regular</td>
                    <td className="px-6 py-4 text-center text-navy-700">$$$$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
            Need Help Choosing the Right Material?
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Our Garland window experts will help you select the perfect material based on your 
            budget, style preferences, and home&apos;s specific needs. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
            </Link>
            <a href="tel:972-734-3158" className="btn-outline">
              Call 972-734-3158
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
