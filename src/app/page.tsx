import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import BrandsSection from "@/components/home/BrandsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import LocationSection from "@/components/home/LocationSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <BrandsSection />
      <WhyChooseUs />
      <Testimonials />
      <GalleryPreview />
      <LocationSection />
    </div>
  );
}
