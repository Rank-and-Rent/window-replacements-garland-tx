import Header from "@/components/header";
import Footer from "@/components/footer";
import BrandLogos from "@/components/brand-logos";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/data";

export const metadata: Metadata = {
  title: "Door Installation Services Garland TX | Entry & Patio Doors",
  description: "Door replacement in Garland: entry, patio, French, sliding, and storm doors built for the I-635 corridor noise, the Hwy 78 hail line, and the lake-air humidity off Lake Ray Hubbard.",
};

export default function DoorsIndexPage() {
  const doorServices = servicesData.filter(s => s.category === "Doors");

  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Doors</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/doors/entry-doors-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Door Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Professional installation of premium entry doors, patio doors, and more from top manufacturers.
            Transform your home&apos;s entrance with style and security.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Doors Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-12 text-center">
            Our Door Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doorServices.map((service) => (
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
            Why Choose Us for Door Replacement
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">Enhanced Security</h3>
              <p className="text-cream-200 text-sm">
                Modern doors with multi-point locking systems and reinforced frames protect your family.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">Curb Appeal</h3>
              <p className="text-cream-200 text-sm">
                Your front door is your home&apos;s first impression. Make it memorable with premium designs.
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
                Insulated cores and weatherstripping reduce energy loss and lower utility bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
            Premium Door Brands We Install
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Choose from the finest door manufacturers for your Garland home.
          </p>
          <BrandLogos size="lg" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
            Ready to Upgrade Your Doors?
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Contact us today for a free in-home consultation and estimate. 
            Our experts will help you find the perfect doors for your Garland home.
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
