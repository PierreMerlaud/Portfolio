import React from "react"
import "./footer.css"
import {SiGithub} from "react-icons/si"
import {SiLinkedin} from "react-icons/si"
import {SiInstagram} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <ul className="permalink">
        <li><a href="#">ACCUEIL</a></li>
        <li><a href="#about">À PROPOS</a></li>
        <li><a href="#experience">COMPÉTENCES</a></li>
        <li><a href="#projets">PRATIQUE DU CODE</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/PierreMerlaud" target="_blank" rel="noopener, noreferrer"><SiGithub /></a>
        <a href="https://www.linkedin.com/in/pierre-merlaud-b09958183/" target="_blank" rel="noopener, noreferrer"><SiLinkedin /></a>
        <a href="https://www.instagram.com/pierom007/" target="_blank" rel="noopener, noreferrer"><SiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Pierre Merlaud. Tous droits réservés.</small>
      </div>
    </footer>
  )
}

export default Footer