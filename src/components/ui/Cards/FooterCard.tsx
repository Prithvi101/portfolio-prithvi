import React from "react";

function FooterCard({
  title,
  subTitle,
  onClick,
}: {
  title: string;
  subTitle: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="flex flex-col max-w-44 cursor-pointer">
      <p className="text-[.75rem] font-bold">{title}</p>
      <p className="text-[.5rem] text-white/50">{subTitle}</p>
    </div>
  );
}

export default FooterCard;
