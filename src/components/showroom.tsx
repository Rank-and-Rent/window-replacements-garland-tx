export default function Showroom() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="overflow-hidden">
            <div
              className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
              }}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy-900 leading-tight mb-8">
              Visit our Office in Garland, TX
            </h2>
            <div className="space-y-2 text-navy-700 mb-8">
              <p className="text-xl font-medium">350 Oaks Trl #220</p>
              <p className="text-xl font-medium">Garland, TX 75043</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=350+Oaks+Trl+%23220+Garland+TX+75043"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
