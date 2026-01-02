import Header from "@/components/header";
import Footer from "@/components/footer";
import Brands from "@/components/brands";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { brandsData } from "@/data";

export const metadata: Metadata = {
  title: "Premium Window & Door Brands Garland TX | Andersen, Pella, JELD-WEN, Marvin",
  description: "Authorized dealer for Andersen, Pella, JELD-WEN, and Marvin windows and doors in Garland, TX. Premium quality with full warranty support. Call 972-734-3158.",
};

export default function BrandsIndexPage() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Brands</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/brands/andersen-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Premium Window & Door Brands
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            We partner with the industry&apos;s leading manufacturers to bring Garland homeowners
            the finest quality windows and doors available.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Prominent Brand Logos */}
      <Brands />

      {/* Brands Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-12 text-center">
            Our Partner Brands
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {brandsData.map((brand) => (
              <Link
                key={brand.slug}
                href={brand.route}
                className="bg-white p-8 border-t-4 border-gold-500 hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} windows and doors`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">{brand.name}</h3>
                <p className="text-navy-700 text-sm mb-4 line-clamp-4">{brand.description}</p>
                <span className="text-gold-500 font-medium">Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Premium Brands */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-12 text-center">
            Why Choose Premium Brands
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">Superior Energy Efficiency</h3>
              <p className="text-cream-200 text-sm">
                Premium brands use advanced glass coatings and insulation technology to significantly 
                reduce your energy bills in Garland&apos;s hot climate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">Comprehensive Warranties</h3>
              <p className="text-cream-200 text-sm">
                Top manufacturers stand behind their products with extensive warranty coverage 
                for peace of mind and long-term protection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">Texas-Tested Durability</h3>
              <p className="text-cream-200 text-sm">
                These products are designed to withstand extreme heat, UV exposure, and the 
                occasional severe weather that Texas brings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
            Find the Perfect Brand for Your Home
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Contact us for expert guidance on which brand best suits your Garland home, 
            budget, and style preferences.
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
