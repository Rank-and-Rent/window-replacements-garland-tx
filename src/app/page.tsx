import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Brands from "@/components/brands";
import ServiceAreas from "@/components/service-areas";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Brands />
      <ServiceAreas />
      <CallToAction />
      <Footer />
    </main>
  );
}
