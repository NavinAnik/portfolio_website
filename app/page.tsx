import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import News from "@/components/sections/News";
import Experience from "@/components/sections/Experience";
import IndustryProjects from "@/components/sections/IndustryProjects";
import AcademicProjects from "@/components/sections/AcademicProjects";
import Research from "@/components/sections/Research";
import Writing from "@/components/sections/Writing";
import Skills from "@/components/sections/Skills";
import Personal from "@/components/sections/Personal";
import Contact from "@/components/sections/Contact";
import { fetchInstagramPhotos } from "@/lib/instagram";

export default async function Home() {
  const igPhotos = await fetchInstagramPhotos();
  return (
    <>
      <Hero />
      <About />
      <News />
      <Research />
      <Writing />
      <AcademicProjects />
      <Experience />
      <IndustryProjects />
      <Skills />
      <Personal igPhotos={igPhotos} />
      <Contact />
    </>
  );
}
