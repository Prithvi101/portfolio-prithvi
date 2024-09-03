import Hero from "@/components/blocks/Hero";
import Partcles from "@/components/ui/Partcles";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[100vh]  flex-col items-center ">
      <Hero></Hero>
      <Hero></Hero>

      <Hero></Hero>
    </main>
  );
}
