import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PopularDishes from "@/components/PopularDishes";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Categories />
      <PopularDishes />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Index;
