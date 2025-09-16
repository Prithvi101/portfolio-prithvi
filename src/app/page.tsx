import Experience from "@/components/blocks/Experience/Experience";
import Footer from "@/components/blocks/Footer/Footer";
import Hero from "@/components/blocks/Hero/Hero";
import Resume from "@/components/blocks/Resume/Resume";
import Skills from "@/components/blocks/Skills/Skills";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <main className=" text-[#fff] ">
      <AnimatedCursor
        innerSize={13}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        showSystemCursor={true}
        innerStyle={{ backgroundColor: "#eab308", mixBlendMode: "exclusion" }}
      />
      <Hero></Hero>
      <Skills></Skills>
      <Experience></Experience>
      <Resume></Resume>
      <Footer></Footer>
    </main>
  );
}
