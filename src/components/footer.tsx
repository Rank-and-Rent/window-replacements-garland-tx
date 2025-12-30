import Link from "next/link";

const siteLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#services" },
  { name: "Brands", href: "#brands" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Request Service", href: "#contact" },
  { name: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100 py-16 lg:py-20">
      <div className="px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Site Links */}
          <div>
            <h3 className="font-serif text-xl text-gold-500 mb-6">Site</h3>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl text-gold-500 mb-6">Contact</h3>
            <div className="space-y-4 text-cream-200">
              <p>
                350 Oaks Trl #220
                <br />
                Garland, TX 75043
              </p>
              <p>
                <a
                  href="tel:972-734-3158"
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  (972) 734-3158
                </a>
              </p>
            </div>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="font-serif text-xl text-gold-500 mb-6">
              Our Partner Brands
            </h3>
            <div className="space-y-6">
              <div className="border-2 border-gold-500 px-4 py-2 inline-block bg-navy-900">
                <span
                  className="text-gold-500 text-xl font-bold italic"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  WRG
                </span>
              </div>
              <p className="text-cream-200 text-sm">Garland, TX</p>
              <div className="flex flex-wrap gap-6 mt-4">
                <span className="text-cream-300 text-sm">Andersen</span>
                <span className="text-cream-300 text-sm">Pella</span>
                <span className="text-cream-300 text-sm">Jeld-Wen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-800 max-w-7xl mx-auto">
          <p className="text-cream-300 text-sm text-center">
            &copy; {new Date().getFullYear()} Window Replacement Service of
            Garland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
