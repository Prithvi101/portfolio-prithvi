import React from "react";

function FooterCard({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <div className="flex flex-col max-w-44 cursor-pointer">
      <p className="text-[.75rem] font-bold">{title}</p>
      <p className="text-[.5rem] text-white/50">{subTitle}</p>
    </div>
  );
}

export default FooterCard;
