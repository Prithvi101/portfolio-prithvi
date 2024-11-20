import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

function RadialCard({
  Logo,
  title,
  color,
  image,
}: {
  Logo: IconType;
  title: string;
  color: string;
  image?: string;
}) {
  return (
    <div
      className={`w-[100%] h-[100%] flex  flex-col justify-center items-center     `}
    >
      <div className="card flex justify-center  items-center text-[2.5rem] aspect-[2/2] rounded-xl">
        {image ? (
          <Image
            alt=" card"
            src={image}
            width={200}
            height={200}
            className="w-full object-contain aspect-square p-2"
          ></Image>
        ) : (
          <Logo color={color} />
        )}
      </div>
      <div className="text-white text-center font-bold  flex justify-center items-center mt-2 text-[0.5rem] ">
        {title}
      </div>
    </div>
  );
}

export default RadialCard;
