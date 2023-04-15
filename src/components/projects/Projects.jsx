import React from "react"
import "./projects.css"
import retrovibe from "../../assets/retrovibe.png"
import extension from "../../assets/extension.png"
import reseau_social from "../../assets/reseau_social.png"
import pico from "../../assets/pico.png"
import Mer from "../../assets/Mer.jpg"
import {GrReactjs} from "react-icons/gr"
import {SiTailwindcss} from "react-icons/si"
import {FaLaravel} from "react-icons/fa"
import {GrMysql} from "react-icons/gr"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"
import {DiPhp} from "react-icons/di"
import {SiLua} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {AiOutlineLink} from "react-icons/ai"






const Projects = () => {

 
  return (
    <>
    <section id="projets">
      <h5>PRATIQUE DU CODE</h5>
      <h2>Projets</h2>

      <div className="container projets__container">
        <article className="projets__item">
        <div className="projets__item-image">
          <img src={retrovibe} alt="site_e_commerce" />
          <div className="new_div">
            <h5>Stack</h5>
          <div className="stack">
            <article className="front-1">
              <GrReactjs className="projets__details-icon" />
              <div className="">
              <h4>React-js</h4>
              </div>
            </article>

            <article className="front-1">
              <SiTailwindcss className="projets__details-icon" />
              <div className="">
              <h4>Tailwind</h4>
              </div>
            </article>

            <article className="front-1">
              <FaLaravel className="projets__details-icon" />
              <div className="">
              <h4>Laravel-php</h4>
              </div>
            </article>

            <article className="front-1">
              <GrMysql className="projets__details-icon" />
              <div className="">
              <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>


        </div>
        <h5>E-commerce</h5>
        <div className="projets__item-cta">
          <a href="https://github.com/PierreMerlaud/projet_collectif_vente_de_meubles-front-team_retrovibe"className="btn"target="_blank" rel="noreferrer"><BsGithub className="projets__details-icon" /></a>
          <a href="https://retrovibes.herokuapp.com/home"className="btn btn-primary"target="_blank" rel="noreferrer"><AiOutlineLink className="projets__details-icon" /></a>
        </div>
        </article>

        <article className="projets__item">
        <div className="projets__item-image">
          <img src={extension} alt="extension_chrome" />
          <div className="new_div">
            <h5>Stack</h5>
          <div className="stack">
            <article className="front-1">
              <AiFillHtml5 className="projets__details-icon" />
              <div className="">
              <h4>HTML</h4>
              </div>
            </article>

            <article className="front-1">
              <DiCss3 className="projets__details-icon" />
              <div className="">
              <h4>CSS</h4>
              </div>
            </article>

            <article className="front-1">
              <SiJavascript className="projets__details-icon" />
              <div className="">
              <h4>JavaScript</h4>
              </div>
            </article>

            {/* <article className="front-1">
              <GrMysql className="projets__details-icon" />
              <div className="">
              <h4>Combativité</h4>
              </div>
            </article> */}
          </div>
        </div>
        </div>
        <h5>Extension navigateur</h5>
        <div className="projets__item-cta">
          <a href="https://github.com/PierreMerlaud/Projet-Extension-Navigateur-Chrome"className="btn"target="_blank" rel="noreferrer"><BsGithub className="projets__details-icon" /></a>
        </div>
        </article>

        <article className="projets__item">
        <div className="projets__item-image">
          <img src={reseau_social} alt="" />
          <div className="new_div">
            <h5>Stack</h5>
          <div className="stack">
            <article className="front-1">
              <DiPhp className="projets__details-icon" />
              <div className="">
              <h4>php</h4>
              </div>
            </article>

            <article className="front-1">
              <GrMysql className="projets__details-icon" />
              <div className="">
              <h4>MySQL</h4>
              </div>
            </article>

            <article className="front-1">
              {/* <GrMysql className="projets__details-icon" /> */}
              <div className="">
              <h4>WAMP</h4>
              </div>
            </article>

            {/* <article className="front-1">
              <GrMysql className="projets__details-icon" />
              <div className="">
              <h4>Combativité</h4>
              </div>
            </article> */}
          </div>
        </div>
        </div>
        <h5>Réseau social</h5>
        <div className="projets__item-cta">
          <a href="https://github.com/PierreMerlaud/project_collectif_reseau_social_php"className="btn"target="_blank" rel="noreferrer"><BsGithub className="projets__details-icon" /></a>
        </div>
        </article>

        <article className="projets__item">
        <div className="projets__item-image">
          <img src={pico} alt="" />
          <div className="new_div">
            <h5>Stack</h5>
          <div className="stack">
            <article className="front-1">
              <SiLua className="projets__details-icon" />
              <div className="">
              <h4>Lua</h4>
              </div>
            </article>

            {/* <article className="front-1">
              <DiCss3 className="projets__details-icon" />
              <div className="">
              <h4>CSS</h4>
              </div>
            </article>

            <article className="front-1">
              <GrMysql className="projets__details-icon" />
              <div className="">
              <h4>CSS</h4>
              </div>
            </article>

            <article className="front-1">
              <GrMysql className="projets__details-icon" />
              <div className="">
              <h4>Combativité</h4>
              </div>
            </article> */}
          </div>
        </div>
        </div>
        <h5>Jeu-vidéo en 8 bits</h5>
        <div className="projets__item-cta">
          <a href="https://github.com/PierreMerlaud/projet-collectif---pico-8-gasrace"className="btn"target="_blank" rel="noreferrer"><BsGithub className="projets__details-icon" /></a>
        </div>
        </article>

        <article className="projets__item">
        <div className="projets__item-image">
          <img src={Mer} alt="" />
          <div className="new_div">
            <h5>Stack</h5>
          <div className="stack">
            <article className="front-1">
              <GrReactjs className="projets__details-icon" />
              <div className="">
              <h4>React-js</h4>
              </div>
            </article>

            <article className="front-1">
              <FaNodeJs className="projets__details-icon" />
              <div className="">
              <h4>Node-js</h4>
              </div>
            </article>

            {/* <article className="front-1">
              <GrMysql className="projets__details-icon" />
              <div className="">
              <h4></h4>
              </div>
            </article>

            <article className="front-1">
              <GrMysql className="projets__details-icon" />
              <div className="">
              <h4>Combativité</h4>
              </div>
            </article> */}
          </div>
        </div>
        </div>
        <h5>Site photographie</h5>
        <div className="projets__item-cta">
          <p className="btn">in progress</p>
          {/* <a href="https://travel-life-app.vercel.app/"className="btn btn-primary"target="_blank" rel="noreferrer">live projet</a> */}
        </div>
        </article>
      </div>
    </section>
    <div className="separation"></div>
    </>
  )
}

export default Projects;