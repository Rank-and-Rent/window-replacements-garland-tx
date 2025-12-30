export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream-100">
      <div className="px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy-900 leading-tight mb-8">
              Garland&apos;s Premier Source for Quality Window Replacements
            </h2>
            <div className="space-y-6 text-navy-700 leading-relaxed">
              <p>
                Since opening our doors, Window Replacement Service of Garland
                has delivered high-end window and door solutions for
                Garland&apos;s most distinctive homes. From custom ranch estates
                to modern city residences, we partner with architects, builders,
                and homeowners to provide curated products, expert guidance, and
                elevated service — ensuring every detail reflects your vision
                and stands the test of time.
              </p>
              <p>
                We exclusively install windows from industry-leading
                manufacturers including Andersen, Pella, and Jeld-Wen. This
                careful brand selection guarantees our customers receive only
                the highest quality products backed by comprehensive warranties
                and proven performance in the demanding Texas climate.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden">
            <div
              className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
