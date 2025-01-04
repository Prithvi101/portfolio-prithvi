import ImageReveal from "@/components/util/ImageReveal/ImageReveal";
import TextReveal from "@/components/util/TextReveal/TextReveal";
import Image from "next/image";
import React from "react";

function Title() {
  return (
    <div className="flex flex-col justify-center leading-[4rem] gap-4 sm:gap-0">
      {/* Line One */}
      <div className="flex items-center justify-center gap-3 sm:flex-row flex-col">
        <TextReveal slide>
          <h1 className="hero-heading "> {"I’m Prithvi"}</h1>
        </TextReveal>
        <ImageReveal className=" sm:h-12 sm:w-28 h-16 w-48 overflow-hidden rounded-full flex items-center   relative">
          <Image
            src={"/hero-image.png"}
            width={800}
            height={200}
            alt="blob"
            priority
            className="  h-auto w-full  scale-110 object-fill  "
          ></Image>
        </ImageReveal>
      </div>
      <div className="flex ">
        <TextReveal slide>
          <h2 className="hero-heading">{"Software Engineer"}</h2>
        </TextReveal>
      </div>
    </div>
  );
}

export default Title;
