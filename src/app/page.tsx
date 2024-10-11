import Hero from "@/components/blocks/Hero/Hero";
import Skills from "@/components/blocks/Skills/Skills";
import Partcles from "@/components/ui/Partcles";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
      <Hero></Hero>
      <Skills></Skills>
    </main>
  );
}
