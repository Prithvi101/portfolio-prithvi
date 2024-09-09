import React from "react";

function NavBar() {
  return (
    <div className="fixed bg-black/50 bottom-4 px-4 py-2 rounded-full text-[0.8rem] font-light left-[50%] translate-x-[-50%]   ">
      <ul className="flex gap-4 justify-evenly">
        <li>Skills</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}

export default NavBar;
