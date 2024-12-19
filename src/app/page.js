import AboutUs from "@/components/aboutUs/AboutUs";
import FAQ from "@/components/faq/FAQ";
import FeatureSlide from "@/components/feature-slider/FeatureSlide";
import LogoSlider from "@/components/feature-slider/Slider";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/heroSection/Hero";
import HowItWork from "@/components/howitWorks/HowItWork";

import Solutions from "@/components/Solutions/Solutions";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    
     < div>
     <div className='max-w-[1240px] mx-auto pt-10 '>
      <Hero/>
      <FeatureSlide/>
      <LogoSlider/>
    </div>
      <AboutUs/>
      <Solutions/>
      <Testimonial/>
    <HowItWork/>
    <Gallery/>
    <FAQ/>
    
  
     </div>
  );
}
