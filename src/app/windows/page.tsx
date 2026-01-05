import Header from "@/components/header";
import Footer from "@/components/footer";
import MaterialsSection from "@/components/materials-section";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/data";

export const metadata: Metadata = {
  title: "Window Replacement Services Garland TX | All Styles & Materials",
  description: "Complete window replacement in Garland, TX. All window styles and materials from Andersen, Pella, JELD-WEN, Marvin. Culturally diverse solutions. Free estimates. Call 972-734-3158.",
  keywords: "window replacement Garland TX, window styles, window materials, vinyl windows, aluminum windows",
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
          style={{ backgroundImage: "url('/windows/double-hung-windows-garland-tx.webp')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Versatile window materials honoring Garland&apos;s diverse multicultural community.
            Adaptable designs that complement varied architectural styles and cultural preferences.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Window Styles Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-12 text-center">
            Window Styles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <MaterialsSection />

      {/* Why Choose Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-12 text-center">
            Why Garland Homeowners Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-serif text-xl text-gold-500 mb-3">Cultural Respect</h3>
              <p className="text-cream-200 text-sm">Window designs that honor diverse architectural traditions and community values.</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-gold-500 mb-3">Premium Brands</h3>
              <p className="text-cream-200 text-sm">Andersen, Pella, JELD-WEN, and Marvin windows trusted by diverse communities.</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-gold-500 mb-3">Universal Quality</h3>
              <p className="text-cream-200 text-sm">Performance standards that serve varied community needs and lifestyles.</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-gold-500 mb-3">Free Estimates</h3>
              <p className="text-cream-200 text-sm">Get a detailed quote for your window project at no cost or obligation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-4">
            Ready to Replace Your Windows?
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Garland window consultants respect your cultural preferences and help you find materials that honor diverse architectural styles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:972-734-3158" className="btn-primary">
              Call 972-734-3158
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
