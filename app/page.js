import AboutSection from "@/components/AboutSection";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import FreshProducts from "@/components/FreshProducts";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <div>
          <Header />
        </div>

        <FreshProducts />

        <AboutSection />

        <div className="w-full">
          <PromoBanner />
        </div>

        <Testimonial /> 
        <Blog />
        <Footer />
      </div>
    </>
  );
}
