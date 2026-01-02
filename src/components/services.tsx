import Link from "next/link";

const windowTypes = [
  {
    name: "Double-Hung Windows",
    slug: "double-hung-windows",
    description:
      "Classic versatility with two operable sashes that slide vertically. Perfect for traditional Texas homes, offering excellent ventilation control and easy cleaning from inside your home.",
    image: "/windows/double-hung-windows-garland-tx.jpg",
  },
  {
    name: "Single-Hung Windows",
    slug: "single-hung-windows",
    description:
      "An economical choice featuring a fixed upper sash and operable lower sash. Ideal for bedrooms and living spaces where simplicity and reliability meet energy efficiency.",
    image: "/windows/single-hung-windows-garland-tx.webp",
  },
  {
    name: "Casement Windows",
    slug: "casement-windows",
    description:
      "Hinged windows that swing outward for maximum ventilation and unobstructed views. Their tight seal makes them exceptionally energy-efficient for Garland's hot summers.",
    image: "/windows/casement-windows-garland-tx.jpg",
  },
  {
    name: "Awning Windows",
    slug: "awning-windows",
    description:
      "Hinged at the top, these windows open outward from the bottom. Perfect for Texas weather as they allow ventilation even during light rain while maintaining security.",
    image: "/windows/awning-windows-garland-tx.jpg",
  },
];

const windowTypesRow2 = [
  {
    name: "Sliding Windows",
    slug: "sliding-windows",
    image: "/windows/sliding-windows-garland-tx.jpg",
  },
  {
    name: "Picture Windows",
    slug: "picture-windows",
    image: "/windows/picture-windows-garland-tx.jpg",
  },
  {
    name: "Bay & Bow Windows",
    slug: "bay-bow-windows",
    image: "/windows/bay-bow-windows-garland-tx.jpg",
  },
  {
    name: "Special Shape Windows",
    slug: "special-shape-windows",
    image: "/windows/special-shape-windows-garland-tx.jpg",
  },
];

export default function Services() {
  return (
    <section id="services">

      {/* Products Content Section */}
      <div className="py-20 lg:py-28 bg-cream-100">
        <div className="px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy-900 mb-8">
              Products built to last
            </h2>
            <p className="text-navy-700 leading-relaxed mb-10 max-w-3xl mx-auto">
              At Window Replacement Service of Garland, we believe lasting
              performance begins with exceptional partnerships. That&apos;s why
              we align with the industry&apos;s most respected manufacturers —
              brands known for innovation, craftsmanship, and timeless design.
              Our carefully curated selection of windows and doors is built to
              meet Texas&apos;s demands while elevating the architectural
              character of every home. Backed by responsive support and expert
              insight, each product is made to perform beautifully for years to
              come.
            </p>
            <Link href="/brands" className="btn-primary">
              VIEW PRODUCTS
            </Link>
          </div>
        </div>
      </div>

      {/* Window Types Grid */}
      <div className="py-20 lg:py-28 bg-navy-900">
        <div className="px-6 lg:px-12">
          <div className="text-center mb-16 max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream-100 mb-6">
              Window Styles We Install
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto">
              We install a complete range of window types to match your
              home&apos;s architecture and your lifestyle needs. Each style is
              available from our trusted brand partners: Andersen, Pella, and
              Jeld-Wen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {windowTypes.map((window, index) => (
              <Link
                key={index}
                href={`/windows/${window.slug}`}
                className="group relative overflow-hidden bg-navy-800 block cursor-pointer"
              >
                <div
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${window.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-cream-100 font-serif text-xl font-medium group-hover:text-gold-400 transition-colors">
                    {window.name}
                  </h3>
                  <p className="text-cream-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-6">
            {windowTypesRow2.map((window, index) => (
              <Link
                key={index}
                href={`/windows/${window.slug}`}
                className="group relative overflow-hidden bg-navy-800 block cursor-pointer"
              >
                <div
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${window.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-cream-100 font-serif text-xl font-medium group-hover:text-gold-400 transition-colors">
                    {window.name}
                  </h3>
                  <p className="text-cream-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
