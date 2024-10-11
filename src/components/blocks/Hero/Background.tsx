import Blobs from "@/components/ui/Blobs/Blobs";
import Partcles from "@/components/ui/Partcles";
import Image from "next/image";
import React from "react";

function Background() {
  return (
    <div className={"w-[100vw] h-[100vh] z-[-1] relative"}>
      <Image
        src={"/blob.svg"}
        width={1440}
        height={720}
        className="z-[-1] w-[100vw] h-[100vh]  absolute top-0 left-0 object-cover opacity-80"
      ></Image>
      <Image
        src={"/grid.svg"}
        width={1440}
        height={720}
        className="z-[-2] w-[100vw] h-[100vh]  absolute top-0 left-0 object-cover opacity-50"
      ></Image>
      <Partcles></Partcles>
    </div>
  );
}

export default Background;
