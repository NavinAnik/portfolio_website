import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Research from "@/components/sections/Research";
import IndustryProjects from "@/components/sections/IndustryProjects";
import Skills from "@/components/sections/Skills";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <IndustryProjects />
      <Research />
      <Skills />
      <BlogPreview />
      <Contact />
    </>
  );
}
