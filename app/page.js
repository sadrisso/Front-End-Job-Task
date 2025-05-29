import AboutSection from "@/components/AboutSection";
import FreshProducts from "@/components/FreshProducts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";

export default function Home() {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <div className="bg-[url('https://i.ibb.co/pBXVnvPn/heroBg.webp')] bg-cover bg-center">
          <Header />
          <Hero />
        </div>

        <FreshProducts />

        <AboutSection />

        <div className="w-full">
          <PromoBanner />
        </div>
      </div>
    </>
  );
}
