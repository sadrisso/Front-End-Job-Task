import FreshProducts from "@/components/FreshProducts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-[#FFFFFF]">
        <FreshProducts />
      </div>
    </>
  );
}
