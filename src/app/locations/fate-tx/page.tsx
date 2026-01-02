import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Fate TX | Premium Installation Services",
  description: "Professional window replacement throughout Fate, TX. Serving all Fate neighborhoods. Andersen, Pella & Jeld-Wen authorized dealer. Expert service: 972-734-3158",
  keywords: "window replacement Fate TX, Fate window installation, Fate windows",
};

export default function FateWindowReplacement() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-fate-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Fate, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Serving Fate homeowners with premium window installation services from your trusted Garland-based experts.
          </p>
          <a href="tel:972-734-3158" className="btn-primary">
            Call 972-734-3158
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Expert Window Services Throughout Fate
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Fate's rapidly growing community features modern homes that benefit from our expertise in new construction window installations. We understand Fate's development patterns and provide solutions that complement contemporary architecture.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Our Garland-based team brings extensive experience and factory-trained expertise to every Fate project.
                We work with premium brands like Andersen, Pella, and Jeld-Wen to deliver windows that enhance your home's
                comfort, energy efficiency, and value.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-fate-tx.jpg"
                alt="Fate window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Premium Brands</h3>
              <p className="text-navy-700">
                Andersen, Pella, and Jeld-Wen windows backed by comprehensive warranties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Expert Installation</h3>
              <p className="text-navy-700">
                Factory-trained installers ensure perfect fit and maximum performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Energy Efficiency</h3>
              <p className="text-navy-700">
                Low-E glass and advanced technology reduce energy costs year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}