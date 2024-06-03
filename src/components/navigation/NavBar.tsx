"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";

const NavBar: React.FC = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const [navColor, setNavColor] = useState<boolean>(false);
  const navData = [
    { to: "/", icon: AiOutlineHome, text: "Home" },
    { to: "/about", icon: AiOutlineUser, text: "About" },
    { to: "/work", icon: AiOutlineFundProjectionScreen, text: "Work" },
    { to: "/resume", icon: CgFileDocument, text: "Resume" },
  ];

  return (
    <nav className={`w-[100%] fixed top-0`}>
      <div className="flex w-full  justify-end pt-4 px-8 fixed">
        {navData.map((e) => (
          <NavItem
            key={e.text}
            to={e.to}
            active={e.text == "Home"}
            icon={<e.icon></e.icon>}
            text={e.text}
          />
        ))}
      </div>
    </nav>
  );
};

interface NavItemProps {
  to: string;
  icon: JSX.Element;
  text: string;
  setExpand?: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  icon,
  text,
  setExpand,
  active,
}) => (
  <Link
    href={to}
    className={
      "text-white hover:text-gray-300  flex items-center py-2 px-4 gap-4  text-xl " +
      (active ? "button-89" : "")
    }
  >
    <div className="flex items-center justify-center text-white gap-4">
      {icon} {text}
    </div>
  </Link>
);

export default NavBar;
