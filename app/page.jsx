import Hero from "@/components/sections/Hero/Hero.jsx";
import Projects from "@/components/sections/Projects/Projects.jsx";
import Bento from "@/components/sections/Bento/Bento.jsx";
import TechStack from "@/components/sections/TechStack/TechStack.jsx";
import Features from "@/components/sections/Features/Features.jsx";
import Testimonials from "@/components/sections/Testimonials/Testimonials.jsx";
import FAQ from "@/components/sections/FAQ/FAQ.jsx";
import Experience from "@/components/sections/Experience/Experience.jsx";

export default function Home() {
  return (
    <>
    <Hero/>
    <Experience/>
    <Projects/>
    <Bento/>
    <TechStack/>
    <Features/>
    <Testimonials/>
    <FAQ/>
    </>
  );
}
