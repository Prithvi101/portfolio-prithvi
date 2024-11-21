import Blobs from "@/components/ui/Blobs/Blobs";
import Partcles from "@/components/ui/Partcles";
import Image from "next/image";
import React from "react";
import { prefix } from "../../../../prefix";

function Background() {
  return (
    <div className={"w-[100vw] h-[100vh] z-[-1] relative"}>
      <Image
        src={`${prefix}/skills-bokhe.svg`}
        width={1440}
        height={720}
        priority={true}
        alt="bokhe"
        className="z-[-1]  absolute top-[30%] left-[-30%]"
      ></Image>
      <Image
        alt="bokhe"
        src="/skills-bokhe.svg"
        width={1440}
        height={720}
        className="z-[-1] absolute bottom-[30%] right-[-30%]"
        priority={true}
      />
      <Image
        alt="background"
        src={"/grid.svg"}
        width={1440}
        height={720}
        priority={true}
        className="z-[-2] w-[100vw] h-[100vh]  absolute top-0 left-0 object-cover opacity-20"
      ></Image>
      <Partcles></Partcles>
    </div>
  );
}

export default Background;
