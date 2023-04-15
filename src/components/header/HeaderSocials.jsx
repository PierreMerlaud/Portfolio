import React from "react"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import{BsInstagram} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/PierreMerlaud" target="_blank" rel="noopener, noreferrer"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/pierre-merlaud-b09958183/" target="_blank" rel="noopener, noreferrer"><BsLinkedin/></a>
        <a href="https://www.instagram.com/pierom007/" target="_blank" rel="noopener, noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials