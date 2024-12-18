import AboutUs from "@/components/aboutUs/AboutUs";
import FeatureSlide from "@/components/feature-slider/FeatureSlide";
import LogoSlider from "@/components/feature-slider/Slider";
import Hero from "@/components/heroSection/Hero";
import Solutions from "@/components/Solutions/Solutions";

export default function Home() {
  return (
    
     < div>
     <div className='max-w-[1140px] mx-auto pt-10 '>
      <Hero/>
      <FeatureSlide/>
      <LogoSlider/>
    </div>
      <AboutUs/>
      <Solutions/>
  
     </div>
  );
}
