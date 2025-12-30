import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Sunnyvale TX | Professional Installation",
  description: "Expert window replacement in Sunnyvale, Texas. Small-town charm, quality service, energy-efficient windows. Call 972-734-3158.",
  keywords: "window replacement Sunnyvale TX, Sunnyvale windows, window installation",
};

export default function SunnyvaleWindowReplacement() {
  return (
    <main>
      <Header />
      
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Sunnyvale, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Quality window solutions for Sunnyvale&apos;s close-knit community.
          </p>
          <a href="tel:972-734-3158" className="btn-primary">
            Call 972-734-3158
          </a>
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Sunnyvale&apos;s Window Service Experts
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Sunnyvale maintains its small-town character while providing easy access to Dallas opportunities. This 
                tight-knit community values quality workmanship and personal service—expectations we meet through honest 
                assessments, fair pricing, and professional installation. As your nearby Garland neighbors, we understand 
                Sunnyvale&apos;s community values and bring that same integrity to every window replacement project.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Whether you&apos;re updating an established Sunnyvale home or maintaining newer construction, we provide 
                window solutions that enhance comfort, reduce energy costs, and improve your home&apos;s appearance. Sunnyvale 
                homeowners appreciate our straightforward approach—no pressure sales, just honest expertise helping you 
                make informed decisions about your window replacement needs.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Sunnyvale Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Local Service:</strong> Quick response from Garland</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Honest Approach:</strong> Straightforward assessments and pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Quality Products:</strong> Premium brands at fair prices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Serving Sunnyvale with Integrity
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Experience the difference that local, honest service makes. Call today for your free consultation.
            </p>
            <a href="tel:972-734-3158" className="btn-primary">
              Call 972-734-3158
            </a>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}

