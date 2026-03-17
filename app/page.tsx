import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import IndustryProjects from "@/components/sections/IndustryProjects";
import AcademicProjects from "@/components/sections/AcademicProjects";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <IndustryProjects />
      <AcademicProjects />
      <Research />
      <Skills />
      <Contact />
    </>
  );
}
