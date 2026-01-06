import Link from "next/link";
import { servicesData, locationsData, brandsData } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const windowServices = servicesData.filter((s) => s.category === "Windows");
  const doorServices = servicesData.filter((s) => s.category === "Doors");
  const topLocations = locationsData.filter((l) => l.type === "city").slice(0, 8);

  return (
    <footer className="bg-navy-950 text-cream-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Windows */}
          <div>
            <h3 className="font-serif text-lg text-gold-500 mb-4">Windows</h3>
            <ul className="space-y-2">
              {windowServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.route}
                    className="text-cream-200 text-sm hover:text-gold-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Doors */}
          <div>
            <h3 className="font-serif text-lg text-gold-500 mb-4">Doors</h3>
            <ul className="space-y-2">
              {doorServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.route}
                    className="text-cream-200 text-sm hover:text-gold-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-serif text-lg text-gold-500 mb-4">Brands</h3>
            <ul className="space-y-2">
              {brandsData.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={brand.route}
                    className="text-cream-200 text-sm hover:text-gold-400 transition-colors"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-serif text-lg text-gold-500 mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {topLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={location.route}
                    className="text-cream-200 text-sm hover:text-gold-400 transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors"
                >
                  View All Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-gold-500 mb-4">Contact</h3>
            <div className="space-y-3 text-cream-200 text-sm mb-6">
              <p>
                <a
                  href="tel:972-734-3158"
                  className="hover:text-gold-400 transition-colors"
                >
                  (972) 734-3158
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@windowreplacementgarlandtx.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  contact@windowreplacementgarlandtx.com
                </a>
              </p>
              <address className="not-italic">
                350 Oaks Trl #220
                <br />
                Garland, TX 75043
              </address>
              <p>
                Open 24/7
                <br />
                Available for Emergency Service
              </p>
            </div>

            <h3 className="font-serif text-lg text-gold-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-cream-200 text-sm hover:text-gold-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cream-200 text-sm hover:text-gold-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-cream-200 text-sm hover:text-gold-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-cream-200 text-sm hover:text-gold-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-cream-200 text-sm hover:text-gold-400 transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="py-12 border-t border-navy-800 mt-12">
          <h3 className="font-serif text-xl text-gold-500 text-center mb-6">Find Us</h3>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8!2d-96.6285!3d32.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f5b5e1b5a6d%3A0x1234567890!2s350%20Oaks%20Trl%20%23220%2C%20Garland%2C%20TX%2075043!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Window Replacement Service of Garland location map"
            ></iframe>
          </div>
        </div>

        {/* Disclosure */}
        <div className="py-8 border-t border-navy-800">
          <p className="text-cream-300 text-xs text-center max-w-3xl mx-auto">
            Disclosure: This site routes inquiries to our chosen fulfillment partner for window and door 
            contractor matching and project coordination support.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/">
              <img
                src="/window-replacement-service-garland-tx.png"
                alt="Window Replacement Service of Garland"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-cream-300 text-sm text-center">
              &copy; {currentYear} Window Replacement Service of Garland. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
