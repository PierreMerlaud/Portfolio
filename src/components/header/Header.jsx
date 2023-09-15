import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Me.jpg";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header id="accueil">
        <div className="container header__container">
          <div className="texte_header">
            <h1>Pierre Merlaud</h1>
            <h5 className="text-light">
              Apprenant développeur frontend / fullstack.
            </h5>
            <CTA />
          </div>

          <HeaderSocial />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
      <div className="separation"></div>
    </>
  );
};

export default Header;
