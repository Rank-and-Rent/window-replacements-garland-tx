import Header from "@/components/header";
import Footer from "@/components/footer";
import BrandLogos from "@/components/brand-logos";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/data";

export const metadata: Metadata = {
  title: "Window Installation Services Garland TX | All Window Types",
  description: "Professional window replacement in Garland, TX. Double-hung, casement, bay, bow, and all window styles. Andersen, Pella, JELD-WEN, Marvin. Free estimates. Call 972-734-3158.",
};

export default function WindowsIndexPage() {
  const windowServices = servicesData.filter(s => s.category === "Windows");

  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/windows/double-hung-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Professional installation of premium windows from Andersen, Pella, JELD-WEN, and Marvin. 
            Energy-efficient solutions for every home.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Windows Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-12 text-center">
            Our Window Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {windowServices.map((service) => (
              <Link
                key={service.slug}
                href={service.route}
                className="bg-white p-6 border-t-4 border-gold-500 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-xl text-navy-900 mb-3">{service.name}</h3>
                <p className="text-navy-700 text-sm mb-4">{service.short}</p>
                <span className="text-gold-500 text-sm font-medium">Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-12 text-center">
            Why Choose Us for Window Replacement
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">Premium Brands</h3>
              <p className="text-cream-200 text-sm">
                Andersen, Pella, JELD-WEN, and Marvin windows with full warranty support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">Energy Efficiency</h3>
              <p className="text-cream-200 text-sm">
                High-performance windows that reduce energy costs in Garland&apos;s hot Texas climate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">Free Estimates</h3>
              <p className="text-cream-200 text-sm">
                No-obligation consultations with detailed pricing and project timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
            Premium Window Brands We Install
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Choose from the finest window manufacturers for your Garland home.
          </p>
          <BrandLogos size="lg" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
            Ready to Upgrade Your Windows?
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Contact us today for a free in-home consultation and estimate. 
            Our experts will help you find the perfect windows for your Garland home.
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
