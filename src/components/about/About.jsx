import React from "react"
import "./about.css"
import Champ from "../../assets/champ.jpg"
import PM from "../../assets/PM.png"
import {RxCounterClockwiseClock} from "react-icons/rx"
import {BsCaretRightSquareFill} from "react-icons/bs"
import {Gi3DStairs} from "react-icons/gi"



const About = () => {
  return (
    <>
    <section id="about">
      <h5>À PROPOS</h5>
      <h2>Parcours</h2>

      <div className="container about__container">
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="icon__h5">
                <h5>Passé</h5>
                <RxCounterClockwiseClock className="about__icon"/>
              </div>
              <p>Anciennement assistant caméra pendant 5 ans, puis caméraman en télévision durant 7 années, j'ai évolué dans un milieu où le sens du collectif est primordial. Ce métier m'a permis de développer un côté créatif et débrouillard. <br></br></p>
              
            </article>

            <article className="about__card">
              <div className="icon__h5">
                <h5>Présent</h5>
                <BsCaretRightSquareFill className="about__icon"/>                
              </div>
              <p>Etudiant en développement web front / full-stack chez Ada Tech School. Cette formation me permet de découvir le monde du code et de la tech en autonomie grâce à la pédagogie Montessori. L'accent est mis sur la communication et le travail en équipe. Je me concentre actuellement sur React-js et Node-js.</p>
            </article>

            <article className="about__card">
              <div className="icon__h5">
                <h5>Futur</h5>
                <Gi3DStairs className="about__icon"/>               
              </div>
              <p>En recherche d'une alternance à partir de juin 2023. Je suis impatient d'intégrer une équipe bienveillante avec laquelle poursuivre mon apprentissage en participant à des projets ambitieux et stimulants. </p>
            </article>
            <a href="#contact" className="btn btn-primary btn-contact">CONTACT</a>
          </div>

        </div>

        <div class="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={Champ} alt="About__Image" />
            </div>
            <div className="flip-box-back">
            <img className= "benny" src={PM} alt="About__Image" />
            </div>
          </div>
          <article className="about__card">
            <div className="icon__h5">
              <h5>Centres d'intérêt</h5>
              <Gi3DStairs className="about__icon"/>               
            </div>
            <p>Photographie argentique <br/>
               Cinéma <br/>
               Tennis / badminton <br/>
               Littérature
            </p>
              
            </article>
        </div>


        </div>
    </section>
    <div className="separation"></div>
    </>

  )
}

export default About