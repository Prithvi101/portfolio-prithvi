import TextReveal from "@/components/util/TextReveal/TextReveal";
import React from "react";

function PageTitle({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <div>
      <TextReveal slide>
        <h2 className="text-4xl text-white/50">{line1}</h2>
      </TextReveal>
      <TextReveal slide>
        <h2 className="text-4xl">{line2}</h2>
      </TextReveal>
    </div>
  );
}

export default PageTitle;
