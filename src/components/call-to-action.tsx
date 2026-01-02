export default function CallToAction() {
  return (
    <section
      id="contact"
      className="relative py-32 lg:py-44"
      style={{
        backgroundImage:
          "url('/windows/double-hung-windows-garland-tx.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-950/60" />

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream-100 mb-6">
            Frame Every View with Purpose
          </h2>
          <p className="text-cream-200 text-lg mb-10 max-w-2xl mx-auto">
            Partner with Window Replacement Service of Garland to bring
            architectural vision to life — with expertly curated windows and
            doors that balance precision, performance, and striking design in
            every detail.
          </p>
          <a href="tel:972-734-3158" className="btn-primary">
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
