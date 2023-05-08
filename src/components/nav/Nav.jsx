import React from "react";
import "./nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { BsPerson } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { HiComputerDesktop } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#accueil"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <TiHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BsPerson />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <SlBookOpen />
      </a>
      <a
        href="#projets"
        onClick={() => setActiveNav("#projets")}
        className={activeNav === "#projets" ? "active" : ""}
      >
        <HiComputerDesktop />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <HiOutlineChatBubbleLeftRight />
      </a>
    </nav>
  );
};

export default Nav;
