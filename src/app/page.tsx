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
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "#FFFF00",
          zIndex: 1000,
        }}
        outerStyle={{
          border: "3px solid #fff",
          zIndex: 10000,
        }}
      />
      <Hero></Hero>
      <Skills></Skills>
      <Experience></Experience>
      <Resume></Resume>
      <Footer></Footer>
    </main>
  );
}
