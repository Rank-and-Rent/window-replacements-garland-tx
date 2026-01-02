import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <Header />

      <section className="min-h-[70vh] flex items-center justify-center bg-cream-100 pt-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="font-serif text-9xl font-bold text-navy-900 mb-4">404</h1>
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Sorry, we could not find the page you are looking for. It may have been moved or 
            no longer exists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-primary">
              Go Home
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-navy-200 pt-8">
            <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link href="/windows" className="text-gold-500 hover:text-gold-600">
                Windows
              </Link>
              <Link href="/doors" className="text-gold-500 hover:text-gold-600">
                Doors
              </Link>
              <Link href="/brands" className="text-gold-500 hover:text-gold-600">
                Brands
              </Link>
              <Link href="/locations" className="text-gold-500 hover:text-gold-600">
                Locations
              </Link>
              <Link href="/windows/double-hung-windows" className="text-gold-500 hover:text-gold-600">
                Double-Hung Windows
              </Link>
              <Link href="/doors/entry-door-installation" className="text-gold-500 hover:text-gold-600">
                Entry Doors
              </Link>
              <Link href="/about" className="text-gold-500 hover:text-gold-600">
                About Us
              </Link>
              <Link href="/contact" className="text-gold-500 hover:text-gold-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
