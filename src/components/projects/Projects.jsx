import React from "react";
import "./projects.css";
import retrovibe from "../../assets/retrovibe.png";
import extension from "../../assets/extension.png";
import reseau_social from "../../assets/reseau_social.png";
import pico from "../../assets/pico.png";
import Mer from "../../assets/Mer.jpg";
import neverleak from "../../assets/neverleak.jpg";
import sitephoto1 from "../../assets/site-photo1_Edited.png";
import Morpion from "../../assets/Morpion_Edited.png";
import todolist from "../../assets/todolist.png";
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
import { SiSupabase } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import ProjectsModele from "../projectsModele";

const Projects = () => {
  return (
    <>
      <section id="projets">
        <h5>PRATIQUE DU CODE</h5>
        <h2>Projets</h2>

        <div className="container projets__container">
          <ProjectsModele
            projectInfo={{
              stackText: "STACK",
              srcImage: retrovibe,
              altImage: "site_e_commerce",
              stack1: "React",
              stack2: "Tailwind",
              stack3: "Laravel-Php",
              stack4: "MySql",
              icon1: <GrReactjs className="projets__details-icon" />,
              icon2: <SiTailwindcss className="projets__details-icon" />,
              icon3: <FaLaravel className="projets__details-icon" />,
              icon4: <GrMysql className="projets__details-icon" />,
              theme: (
                <h5>
                  E-commerce <br />
                  (2023)
                </h5>
              ),
              projectGit: (
                <a
                  href="https://github.com/PierreMerlaud/projet_collectif_vente_de_meubles-front-team_retrovibe"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="projets__details-icon" />
                </a>
              ),
              projectButton: (
                <a
                  href="https://retrovibes.herokuapp.com/home"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink className="projets__details-icon" />
                </a>
              ),
              title: (
                <>
                  -&gt; Site de vente d'occasion. <br />
                  <br />
                </>
              ),
              context: (
                <>
                  -&gt; Projet collectif de 2 semaines. Equipe imposée (7
                  personnes). <br />
                  <br />
                </>
              ),
              description: (
                <>
                  -&gt; Équipe imposée (le groupe se sépare en deux équipes, une
                  qui commencera par travailler sur le front-end et l’autre sur
                  le back-end, puis les deux équipes inverseront à la fin de la
                  première semaine). <br />
                  <br />
                </>
              ),
              goal1: (
                <>
                  -&gt; Gestion d'une connexion client et d'un panier d'achats.{" "}
                  <br />
                  <br />
                </>
              ),
              goal2: (
                <>
                  -&gt; Découverte de React-JS et Laravel. <br />
                  <br />
                </>
              ),
              goal3: (
                <>
                  -&gt; Pratique de la complémentarité front / back. <br />
                  <br />
                </>
              ),
              goal4: (
                <>
                  -&gt; Expérimenter le switch d'une stack à une autre. <br />
                  <br />
                </>
              ),
              goal5: (
                <>
                  -&gt; Travailler sur la transmission d'un code propre et
                  aisément explicable. <br />
                  <br />
                </>
              ),
            }}
          />

          <ProjectsModele
            projectInfo={{
              stackText: "STACK",
              srcImage: Morpion,
              altImage: "morpion",
              stack1: "React",
              stack2: "Next-JS",
              stack3: "CSS",
              stack4: "Vercel",
              icon1: <GrReactjs className="projets__details-icon" />,
              icon2: <SiNextdotjs className="projets__details-icon" />,
              icon3: <DiCss3 className="projets__details-icon" />,
              icon4: <SiVercel className="projets__details-icon" />,
              theme: (
                <h5>
                  Jeu du morpion <br />
                  (2023)
                </h5>
              ),
              projectGit: (
                <a
                  href="https://github.com/PierreMerlaud/morpion"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="projets__details-icon" />
                </a>
              ),
              projectButton: (
                <a
                  href="https://morpion-tawny.vercel.app/"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink className="projets__details-icon" />
                </a>
              ),
              title: (
                <>
                  -&gt; Jeu du morpion. <br />
                  <br />
                </>
              ),
              context: (
                <>
                  -&gt; Projet personnel.
                  <br />
                  <br />
                </>
              ),
              description: (
                <>
                  -&gt; Pratiquer JS et algorithmie. <br />
                  <br />
                </>
              ),
              goal1: (
                <>
                  -&gt; Faire du front et un peu d'esthétique. <br />
                  <br />
                </>
              ),
              goal2: (
                <>
                  -&gt; Utiliser Next-JS pour la première fois. <br />
                  <br />
                </>
              ),
              goal3: (
                <>
                  -&gt; Héberger le projet avec Vercel. <br />
                  <br />
                </>
              ),
              goal4: (
                <>
                  -&gt; Coder responsive. <br />
                  <br />
                </>
              ),
            }}
          />

          <ProjectsModele
            projectInfo={{
              stackText: "STACK",
              srcImage: todolist,
              altImage: "to-do-list",
              stack1: "React",
              stack2: "Next-js",
              stack3: "TypeScript",
              stack4: "MongoDB",
              icon1: <GrReactjs className="projets__details-icon" />,
              icon2: <SiNextdotjs className="projets__details-icon" />,
              icon3: <SiTypescript className="projets__details-icon" />,
              icon4: <SiMongodb className="projets__details-icon" />,
              theme: (
                <h5>
                  To-do-list <br />
                  (2023)
                </h5>
              ),
              projectGit: (
                <a
                  href="https://github.com/PierreMerlaud/to-do-list"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="projets__details-icon" />
                </a>
              ),
              projectButton: (
                <a
                  href="https://to-do-list-etrv.vercel.app/"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink className="projets__details-icon" />
                </a>
              ),
              title: (
                <>
                  -&gt; Un gestionnaire de liste de tâches. <br />
                  <br />
                </>
              ),
              context: (
                <>
                  -&gt; Projet personnel. <br />
                  <br />
                </>
              ),
              description: (
                <>
                  -&gt; Découvrir Typescript. <br />
                  <br />
                </>
              ),
              goal1: (
                <>
                  -&gt; Poursuivre la pratique de Next-JS. <br />
                  <br />
                </>
              ),
              goal2: (
                <>
                  -&gt; Utiliser une base de donnée en MongoDB. <br />
                  <br />
                </>
              ),
              goal3: (
                <>
                  -&gt; Coder responsive. <br />
                  <br />
                </>
              ),
            }}
          />

          <ProjectsModele
            projectInfo={{
              stackText: "STACK",
              srcImage: neverleak,
              altImage: "mobile",
              stack1: "React-Native",
              stack2: "Expo",
              stack3: "Supabase",
              icon1: <GrReactjs className="projets__details-icon" />,
              icon2: <SiExpo className="projets__details-icon" />,
              icon3: <SiSupabase className="projets__details-icon" />,
              theme: (
                <h5>
                  Projet mobile <br />
                  (2023, en cours)
                </h5>
              ),
              projectGit: (
                <a
                  href="https://github.com/PierreMerlaud/NeverLeak_front"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="projets__details-icon" />
                </a>
              ),
              title: (
                <>
                  -&gt; Application mobile. <br />
                  <br />
                </>
              ),
              context: (
                <>
                  -&gt; Projet collectif. 8 personnes. <br />
                  <br />
                </>
              ),
              description: (
                <>
                  -&gt; Création d'une application de suivi du cycle menstruel.{" "}
                  <br />
                  <br />
                </>
              ),
              goal1: (
                <>
                  -&gt; Découverte de React-Native et Supabase. <br />
                  <br />
                </>
              ),
              goal2: (
                <>
                  -&gt; Appréhender les contraintes d'un projet mobile. <br />
                  <br />
                </>
              ),
            }}
          />

          <ProjectsModele
            projectInfo={{
              stackText: "STACK",
              srcImage: sitephoto1,
              altImage: "site_photo_1",
              stack1: "HTML",
              stack2: "Sass",
              icon1: <AiFillHtml5 className="projets__details-icon" />,
              icon2: <DiSass className="projets__details-icon" />,
              theme: (
                <h5>
                  Premier site photo <br />
                  (2022)
                </h5>
              ),
              projectGit: (
                <a
                  href="https://github.com/PierreMerlaud/Premier-site-photo"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="projets__details-icon" />
                </a>
              ),
              projectButton: (
                <a
                  href="https://pierremerlaud.github.io/Premier-site-photo/index.html"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink className="projets__details-icon" />
                </a>
              ),
              title: (
                <>
                  -&gt; Site de photographe amateur. <br />
                  <br />
                </>
              ),
              context: (
                <>
                  -&gt; Projet solo. Tout premier essai de code. <br />
                  <br />
                </>
              ),
              description: (
                <>
                  -&gt; Pratiquer les bases d'un site web statique
                  (HTML/CSS/Sass). <br />
                  <br />
                </>
              ),
              goal1: (
                <>
                  -&gt; Appréhender l'importance du responsive. (CSS, Sass,
                  media queries) <br />
                  <br />
                </>
              ),
              goal2: (
                <>
                  -&gt; Sensibilisation à une mise en page claire et
                  fonctionnelle (expérience utilisateur UX). <br />
                  <br />
                </>
              ),
              goal3: (
                <>
                  -&gt; Expérimenter sa faculté à apprendre seul, en autonomie.{" "}
                  <br />
                  <br />
                </>
              ),
            }}
          />

          <ProjectsModele
            projectInfo={{
              stackText: "STACK",
              srcImage: Mer,
              altImage: "mer",
              stack1: "React-js",
              stack2: "Node-js",
              stack3: "MongoDB",
              stack4: "Tailwind",
              icon1: <GrReactjs className="projets__details-icon" />,
              icon2: <FaNodeJs className="projets__details-icon" />,
              icon3: <SiMongodb className="projets__details-icon" />,
              icon4: <SiTailwindcss className="projets__details-icon" />,
              theme: (
                <h5>
                  Site photographie 2.0 <br />
                  (2023, encours)
                </h5>
              ),
              projectGit: (
                <a
                  href="https://github.com/PierreMerlaud/site-photo-2.0-back"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="projets__details-icon" />
                </a>
              ),
              title: (
                <>
                  -&gt; Site de photographe amateur version 2.0. <br />
                  <br />
                </>
              ),
              context: (
                <>
                  -&gt; Projet solo. <br />
                  <br />
                </>
              ),
              description: (
                <>
                  -&gt; Poursuivre la découverte de React-JS, Tailwind. <br />
                  <br />
                </>
              ),
              goal1: (
                <>
                  -&gt; Découvrir Node-JS et Mongo-DB. <br />
                  <br />
                </>
              ),
              goal2: (
                <>
                  -&gt; Héberger une bibliothèque d'images via Cloudinary.{" "}
                  <br />
                  <br />
                </>
              ),
              goal3: (
                <>
                  -&gt; Coder seul en autonomie sur temps libre un projet
                  full-stack. <br />
                  <br />
                </>
              ),
              goal4: (
                <>
                  -&gt; Reparcourir de nombreuses notions abordées dans les
                  projets collectifs et les ré-appliquer pour mieux en saisir le
                  fonctionnement. <br />
                  <br />
                </>
              ),
              goal5: (
                <>
                  -&gt; Découvrir et expérimenter de nouvelles notions et
                  stacks. <br />
                  <br />
                </>
              ),
            }}
          />

          <ProjectsModele
            projectInfo={{
              stackText: "STACK",
              srcImage: extension,
              altImage: "extension_chrome",
              stack1: "HTML",
              stack2: "CSS",
              stack3: "JavaScript",
              icon1: <AiFillHtml5 className="projets__details-icon" />,
              icon2: <DiCss3 className="projets__details-icon" />,
              icon3: <SiJavascript className="projets__details-icon" />,
              theme: (
                <h5>
                  Extension navigateur <br />
                  (2023)
                </h5>
              ),
              projectGit: (
                <a
                  href="https://github.com/PierreMerlaud/Projet-Extension-Navigateur-Chrome"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="projets__details-icon" />
                </a>
              ),
              title: (
                <>
                  -&gt; Codage d'une extension utilisable sur Chrome. <br />
                  <br />
                </>
              ),
              context: (
                <>
                  -&gt; Projet collectif de 2 semaines. Équipe imposée (3
                  personnes). <br />
                  <br />
                </>
              ),
              description: (
                <>
                  -&gt; Une fois installée l'extension permet de choisir un
                  animal via un bandeau permanent sur le navigateur. Les images
                  de chaque page web sont remplacées par des images de l'animal
                  choisi. Si AFK, des informations random viennent animer la
                  page. <br />
                  <br />
                </>
              ),
              goal1: (
                <>
                  -&gt; Découvrir l’écosystème d’un navigateur. <br />
                  <br />
                </>
              ),
              goal2: (
                <>
                  -&gt; Utilisation de deux API. <br />
                  <br />
                </>
              ),
              goal3: (
                <>
                  -&gt; Explorer les mécanismes d’un navigateur (DOM, moteur
                  d'exécution JS, ...). Se familiariser avec la documentation
                  d’un navigateur. <br />
                  <br />
                </>
              ),
            }}
          />

          <ProjectsModele
            projectInfo={{
              stackText: "STACK",
              srcImage: reseau_social,
              altImage: "reseau_social",
              stack1: "PHP",
              stack2: "MySQL",
              stack3: "WAMP",
              icon1: <DiPhp className="projets__details-icon" />,
              icon2: <GrMysql className="projets__details-icon" />,
              theme: (
                <h5>
                  Réseau social <br />
                  (2023)
                </h5>
              ),
              projectGit: (
                <a
                  href="https://github.com/PierreMerlaud/project_collectif_reseau_social_php"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="projets__details-icon" />
                </a>
              ),
              title: (
                <>
                  -&gt; Simulation d'un réseau social. <br />
                  <br />
                </>
              ),
              context: (
                <>
                  -&gt; Projet collectif de 2 semaines. Équipe imposée (3
                  personnes). <br />
                  <br />
                </>
              ),
              description: (
                <>
                  -&gt; Faire un site web dynamique qui construit les pages HTML
                  à la demande grâce à une base de donnée. <br />
                  <br />
                </>
              ),
              goal1: (
                <>
                  -&gt; Découverte de PHP et MySQL. <br />
                  <br />
                </>
              ),
              goal2: (
                <>
                  -&gt; Gérer les authentifications (login), sessions,
                  inscriptions. <br />
                  <br />
                </>
              ),
              goal3: (
                <>
                  -&gt; Avoir un premier aperçu de la conception web, de la
                  conception d'une base de données, des problématiques d’un
                  projet multi-langages. <br />
                  <br />
                </>
              ),
            }}
          />

          <ProjectsModele
            projectInfo={{
              stackText: "STACK",
              srcImage: pico,
              altImage: "pico_8",
              stack1: "Lua",
              icon1: <SiLua className="projets__details-icon" />,
              theme: (
                <h5>
                  Jeu-vidéo en 8 bits <br />
                  (2022)
                </h5>
              ),
              projectGit: (
                <a
                  href="https://github.com/PierreMerlaud/projet-collectif---pico-8-gasrace"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="projets__details-icon" />
                </a>
              ),
              title: (
                <>
                  -&gt; Création d'un jeu rétro en langage Lua. <br />
                  <br />
                </>
              ),
              context: (
                <>
                  -&gt; Projet collectif de 2 semaines. Équipe imposée (3
                  personnes). <br />
                  <br />
                </>
              ),
              description: (
                <>
                  -&gt; Faire un site web dynamique qui construit les pages HTML
                  à la demande grâce à une base de donnée. <br />
                  <br />
                </>
              ),
              goal1: (
                <>
                  -&gt; Premier projet d'école et de code en équipe. <br />
                  <br />
                </>
              ),
              goal2: (
                <>
                  -&gt; Apprentissage du codage en équipe : orientation du
                  projet, pair-programming, séparation des tâches... <br />
                  <br />
                </>
              ),
              goal3: (
                <>
                  -&gt; Notions abordées : moteur de jeu, infographie 2D,
                  recherche autonome de ressources... <br />
                  <br />
                </>
              ),
            }}
          />
        </div>
      </section>
      <div className="separation"></div>
    </>
  );
};

export default Projects;
