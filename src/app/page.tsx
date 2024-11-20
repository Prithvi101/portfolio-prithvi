import Experience from "@/components/blocks/Experience/Experience";
import Footer from "@/components/blocks/Footer/Footer";
import Hero from "@/components/blocks/Hero/Hero";
import Resume from "@/components/blocks/Resume/Resume";
import Skills from "@/components/blocks/Skills/Skills";

export default function Home() {
  return (
    <main className=" ">
      <Hero></Hero>
      <Skills></Skills>
      <Experience></Experience>
      <Resume></Resume>
      <Footer></Footer>
    </main>
  );
}
