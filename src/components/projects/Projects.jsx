import React from "react";
import "./projects.css";
import retrovibe from "../../assets/retrovibe.png";
import extension from "../../assets/extension.png";
import reseau_social from "../../assets/reseau_social.png";
import pico from "../../assets/pico.png";
import Mer from "../../assets/Mer.jpg";
import neverleak from "../../assets/neverleak.png";
import sitephoto1 from "../../assets/site-photo1.png";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { SiLua } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import ProjectsModele from "../projectsModele";

const Projects = () => {
  return (
    <>
      <section id="projets">
        <h5>PRATIQUE DU CODE</h5>
        <h2>Projets</h2>

        <div className="container projets__container">
          <ProjectsModele
            stackText="STACK"
            srcImage={retrovibe}
            altImage="site_e_commerce"
            stack1="React-js"
            stack2="Tailwind"
            stack3="Laravel-Php"
            stack4="MySql"
            icon1={<GrReactjs className="projets__details-icon" />}
            icon2={<SiTailwindcss className="projets__details-icon" />}
            icon3={<FaLaravel className="projets__details-icon" />}
            icon4={<GrMysql className="projets__details-icon" />}
            theme={
              <h5>
                E-commerce <br />
                (2023)
              </h5>
            }
            projectGit={
              <a
                href="https://github.com/PierreMerlaud/projet_collectif_vente_de_meubles-front-team_retrovibe"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="projets__details-icon" />
              </a>
            }
            projectButton={
              <a
                href="https://retrovibes.herokuapp.com/home"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLink className="projets__details-icon" />
              </a>
            }
            title="-&gt; Site de vente d'occasion."
            context="-&gt; Projet collectif de 2 semaines."
            description="-&gt; Équipe imposée (le groupe se sépare en deux équipes, une
              qui commencera par travailler sur le front-end et l’autre sur le
              back-end, puis les deux équipes inverseront à la fin de la
              première semaine)."
            goal1="-&gt; Découverte de React-JS et Laravel."
            goal2="-&gt; Pratique de la complémentarité front / back."
            goal3="-&gt; Expérimenter le switch d'une stack à une autre."
            goal4="-&gt; Travailler sur la transmission d'un code propre et
            aisément explicable."
          />

          <ProjectsModele
            stackText="STACK"
            srcImage={extension}
            altImage="extension_chrome"
            stack1="HTML"
            stack2="CSS"
            stack3="JavaScript"
            icon1={<AiFillHtml5 className="projets__details-icon" />}
            icon2={<DiCss3 className="projets__details-icon" />}
            icon3={<SiJavascript className="projets__details-icon" />}
            theme={
              <h5>
                Extension navigateur <br />
                (2023)
              </h5>
            }
            projectGit={
              <a
                href="https://github.com/PierreMerlaud/Projet-Extension-Navigateur-Chrome"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="projets__details-icon" />
              </a>
            }
            title="-&gt; Codage d'une extension utilisable sur Chrome."
            context="-&gt; Projet collectif de 2 semaines. Équipe imposée. (3 personnes)"
            description="-&gt; Une fois installée l'extension permet de choisir un animal
            via un bandeau permanent sur le navigateur. Les images de chaque
            page web sont remplacées par des images de l'animal choisi. Si
            AFK, des informations random viennent animer la page."
            goal1="-&gt; Découvrir l’écosystème d’un navigateur."
            goal2="-&gt; Utilisation de deux API."
            goal3="-&gt; Explorer les mécanismes d’un navigateur (DOM, moteur
              exécution JS, ...). Se familiariser avec la documentation d’un
              navigateur."
          />

          <ProjectsModele
            stackText="STACK"
            srcImage={reseau_social}
            altImage="reseau_social"
            stack1="php"
            stack2="MySQL"
            stack3="WAMP"
            icon1={<DiPhp className="projets__details-icon" />}
            icon2={<GrMysql className="projets__details-icon" />}
            theme={
              <h5>
                Réseau social <br />
                (2023)
              </h5>
            }
            projectGit={
              <a
                href="https://github.com/PierreMerlaud/project_collectif_reseau_social_php"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="projets__details-icon" />
              </a>
            }
            title="-&gt; Simulation d'un réseau social."
            context="-&gt; Projet collectif de 2 semaines. Équipe imposée. (3 personnes)"
            description="-&gt; Faire un site web dynamique qui construit les pages HTML à
            la demande grâce à une base de donnée."
            goal1="-&gt; Découverte de php et MySql."
            goal2="-&gt; Gérer les authentifications (login), sessions,
            inscriptions."
            goal3="-&gt; Avoir un premier aperçu de la conception web, de la
            conception d'une base de données, des problématiques d’un projet
            multi-langages."
          />

          <ProjectsModele
            stackText="STACK"
            srcImage={pico}
            altImage="pico_8"
            stack1="Lua"
            icon1={<SiLua className="projets__details-icon" />}
            theme={
              <h5>
                Jeu-vidéo en 8 bits <br />
                (2022)
              </h5>
            }
            projectGit={
              <a
                href="https://github.com/PierreMerlaud/projet-collectif---pico-8-gasrace"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="projets__details-icon" />
              </a>
            }
            title="-&gt; Création d'un jeu rétro en langage Lua."
            context="-&gt; Projet collectif de 2 semaines. Équipe imposée. (3 personnes)"
            description="-&gt; Faire un site web dynamique qui construit les pages HTML à
            la demande grâce à une base de donnée."
            goal1="-&gt; Premier projet d'école et de code en équipe."
            goal2="-&gt; Apprentissage du codage en équipe : orientation du projet,
            pair-programming, séparation des tâches..."
            goal3="-&gt; Notions abordées : moteur de jeu, infographie 2d,
            recherche autonome de ressources..."
          />

          <ProjectsModele
            stackText="STACK"
            srcImage={sitephoto1}
            altImage="site_photo_1"
            stack1="HTML"
            stack2="CSS"
            icon1={<AiFillHtml5 className="projets__details-icon" />}
            icon2={<DiCss3 className="projets__details-icon" />}
            theme={
              <h5>
                Premier site photo <br />
                (2022)
              </h5>
            }
            projectGit={
              <a
                href="https://github.com/PierreMerlaud/projet-collectif---pico-8-gasrace"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="projets__details-icon" />
              </a>
            }
            projectButton={
              <a
                href="https://pierremerlaud.github.io/Premier-site-photo/index.html"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLink className="projets__details-icon" />
              </a>
            }
            title="-&gt; Site de photographe amateur."
            context="-&gt; Tout premier essai de code. Projet solo."
            description="-&gt; Pratiquer les bases d'un site web statique (HTML/CSS)."
            goal1="-&gt; Appréhender l'importance du responsive. (CSS, media
              queries)"
            goal2="-&gt; Sensibilisation à une mise en page claire et fonctionnelle
            (expérience utilisateur UX)."
            goal3="-&gt; Expérimenter sa faculté à apprendre seul, en autonomie."
          />

          <ProjectsModele
            stackText="STACK"
            srcImage={Mer}
            altImage="mer"
            stack1="React-js"
            stack2="Node-js"
            stack3="MongoDB"
            stack4="Tailwind"
            icon1={<GrReactjs className="projets__details-icon" />}
            icon2={<FaNodeJs className="projets__details-icon" />}
            icon3={<SiMongodb className="projets__details-icon" />}
            icon4={<SiTailwindcss className="projets__details-icon" />}
            theme={
              <h5>
                Site photographie 2.0 <br />
                (2023)
              </h5>
            }
            inProgress={<p className="btn">in progress</p>}
            title="-&gt; Site de photographe amateur version 2.0."
            context="-&gt; Projet solo."
            description="-&gt; Poursuivre la découverte de React-JS, Tailwind."
            goal1="-&gt; Découvrir Node-JS et Mongo-DB."
            goal2="-&gt; Héberger une bibliothèque d'images via Cloudinary."
            goal3="-&gt; Coder seul en autonomie sur temps libre un projet
            full-stack."
            goal4="Reparcourir de nombreuses notions abordées dans les
            projets collectifs et les ré-appliquer pour mieux en saisir le
            fonctionnement."
            goal5="Découvrir et expérimenter de nouvelles notions et stacks."
          />

          <ProjectsModele
            stackText="STACK"
            srcImage={neverleak}
            altImage="site_e_commerce"
            stack1="React-js"
            stack2="Tailwind"
            stack3="Laravel-Php"
            stack4="MySql"
            icon1={<GrReactjs className="projets__details-icon" />}
            icon2={<SiTailwindcss className="projets__details-icon" />}
            icon3={<FaLaravel className="projets__details-icon" />}
            icon4={<GrMysql className="projets__details-icon" />}
            theme={
              <h5>
                E-commerce <br />
                (2023)
              </h5>
            }
            projectGit={
              <a
                href="https://github.com/PierreMerlaud/projet_collectif_vente_de_meubles-front-team_retrovibe"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="projets__details-icon" />
              </a>
            }
            projectButton={
              <a
                href="https://retrovibes.herokuapp.com/home"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLink className="projets__details-icon" />
              </a>
            }
            title="-&gt; Site de vente d'occasion."
            context="-&gt; Projet collectif de 2 semaines."
            description="-&gt; Équipe imposée (le groupe se sépare en deux équipes, une
              qui commencera par travailler sur le front-end et l’autre sur le
              back-end, puis les deux équipes inverseront à la fin de la
              première semaine)."
            goal1="-&gt; Découverte de React-JS et Laravel."
            goal2="-&gt; Pratique de la complémentarité front / back."
            goal3="-&gt; Expérimenter le switch d'une stack à une autre."
            goal4="-&gt; Travailler sur la transmission d'un code propre et
            aisément explicable."
          />
        </div>
      </section>
      <div className="separation"></div>
    </>
  );
};

export default Projects;
