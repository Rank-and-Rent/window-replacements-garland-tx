import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Showroom from "@/components/showroom";
import Gallery from "@/components/gallery";
import Services from "@/components/services";
import Brands from "@/components/brands";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Showroom />
      <Gallery />
      <Services />
      <Brands />
      <CallToAction />
      <Footer />
    </main>
  );
}
