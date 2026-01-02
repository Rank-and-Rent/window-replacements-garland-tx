import Link from "next/link";

const serviceAreas = [
  { name: "Garland", route: "/locations/garland-tx" },
  { name: "Dallas", route: "/locations/dallas-tx" },
  { name: "Richardson", route: "/locations/richardson-tx" },
  { name: "Rowlett", route: "/locations/rowlett-tx" },
  { name: "Sachse", route: "/locations/sachse-tx" },
  { name: "Wylie", route: "/locations/wylie-tx" },
  { name: "Rockwall", route: "/locations/rockwall-tx" },
  { name: "Mesquite", route: "/locations/mesquite-tx" },
  { name: "Plano", route: "/locations/plano-tx" },
  { name: "Murphy", route: "/locations/murphy-tx" },
  { name: "Allen", route: "/locations/allen-tx" },
  { name: "McKinney", route: "/locations/mckinney-tx" },
  { name: "Frisco", route: "/locations/frisco-tx" },
  { name: "Carrollton", route: "/locations/carrollton-tx" },
  { name: "Irving", route: "/locations/irving-tx" },
];

export default function ServiceAreas() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900">
      <div className="px-6 lg:px-12">
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream-100 mb-6">
            Service Areas
          </h2>
          <p className="text-cream-200 max-w-3xl mx-auto mb-8">
            We proudly serve homeowners throughout the greater Dallas-Fort Worth metroplex,
            providing expert window and door replacement services with the same level of
            quality and craftsmanship in every community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {serviceAreas.map((area, index) => (
            <Link
              key={index}
              href={area.route}
              className="group bg-navy-800 hover:bg-navy-700 transition-colors duration-300 p-6 text-center block"
            >
              <h3 className="text-cream-100 font-medium group-hover:text-gold-400 transition-colors text-lg">
                {area.name}, TX
              </h3>
              <p className="text-cream-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/locations" className="btn-outline-light">
            VIEW ALL SERVICE AREAS
          </Link>
        </div>
      </div>
    </section>
  );
}