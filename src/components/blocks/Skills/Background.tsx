import Image from "next/image";
import React from "react";

function Background() {
  return (
    <>
      <Image
        src={"/skills-bokhe.svg"}
        width={980}
        height={600}
        alt="bokhe"
        className="z-[-1]  absolute top-[10%] left-[-30%] opacity-70 rotate-180"
      ></Image>
      <Image
        src={"/skills-bokhe.svg"}
        width={600}
        height={720}
        alt="bokhe"
        className="z-[-1]  absolute top-[-15%] right-[-20%] blur-3xl opacity-80 rotate-90"
      ></Image>
    </>
  );
}

export default Background;
