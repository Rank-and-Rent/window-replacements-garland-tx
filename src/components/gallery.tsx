const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Modern home with large picture windows",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Interior view of casement windows",
  },
  {
    src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Kitchen with double-hung windows",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Bedroom with sliding windows",
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Bay window installation",
  },
  {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Exterior view of home with new windows",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Awning windows in bathroom",
  },
  {
    src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Special shape window installation",
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Home office with picture windows",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Living room with bay windows",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Dining room with large windows",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    alt: "Contemporary home exterior",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-navy-900">
      <div className="px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-6 max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream-100">
            Get inspired
          </h2>
          <a href="#contact" className="btn-primary">
            VIEW GALLERY
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url('${image.src}')` }}
                role="img"
                aria-label={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
