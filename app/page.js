import AboutSection from "@/components/AboutSection";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import FreshProducts from "@/components/FreshProducts";
import PromoBanner from "@/components/PromoBanner";
import Testimonial from "@/components/Testimonial";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <div> 
          <Banner />
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
