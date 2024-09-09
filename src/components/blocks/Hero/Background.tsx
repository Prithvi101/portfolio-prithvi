import Blobs from "@/components/ui/Blobs/Blobs";
import Partcles from "@/components/ui/Partcles";
import React from "react";

function Background() {
  return (
    <div className={"w-full h-full z-[-1] relative"}>
      <Partcles></Partcles>
    </div>
  );
}

export default Background;
