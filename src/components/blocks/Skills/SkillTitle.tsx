import TextReveal from "@/components/util/TextReveal/TextReveal";
import React from "react";

function SkillTitle() {
  return (
    <div>
      <TextReveal slide>
        <h2 className="text-4xl text-white/50">My</h2>
      </TextReveal>
      <TextReveal slide>
        <h2 className="text-4xl">Skillset</h2>
      </TextReveal>
    </div>
  );
}

export default SkillTitle;
