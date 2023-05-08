import React from "react";
import "./projects.css";
import retrovibe from "../../assets/retrovibe.png";
import extension from "../../assets/extension.png";
import reseau_social from "../../assets/reseau_social.png";
import pico from "../../assets/pico.png";
import Mer from "../../assets/Mer.jpg";
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

const Projects = () => {
  return (
    <>
      <section id="projets">
        <h5>PRATIQUE DU CODE</h5>
        <h2>Projets</h2>

        <div className="container projets__container">
          <article className="projets__item">
            <div className="image_description">
              <div className="image_title_link">
                <div className="stack_image">
                  <div className="stack_arrow">
                    <div class="arrow"></div>
                    <div className="stack_title">STACK</div>
                    <div class="arrow"></div>
                  </div>
                  <div className="projets__item-image">
                    <img src={retrovibe} alt="site_e_commerce" />
                    <div className="new_div">
                      <h5>STACK</h5>
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
                </div>
                <h5>
                  E-commerce <br />
                  (2023)
                </h5>
                <div className="projets__item-cta">
                  <a
                    href="https://github.com/PierreMerlaud/projet_collectif_vente_de_meubles-front-team_retrovibe"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="projets__details-icon" />
                  </a>
                  <a
                    href="https://retrovibes.herokuapp.com/home"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="projets__details-icon" />
                  </a>
                </div>
              </div>
              <div className="description">
                -&gt; Site de vente d'occasion.
                <br />
                <br />
                -&gt; Projet collectif de 2 semaines.
                <br />
                <br />
                -&gt; Équipe imposée (le groupe se sépare en deux équipes, une
                qui commencera par travailler sur le front-end et l’autre sur le
                back-end, puis les deux équipes inverseront à la fin de la
                première semaine).
                <br />
                <br />
                -&gt; Découverte de React-JS et Laravel.
                <br />
                <br />
                -&gt; Pratique de la complémentarité front / back.
                <br />
                <br />
                -&gt; Expérimenter le switch d'une stack à une autre.
                <br />
                <br />
                -&gt; Travailler sur la transmission d'un code propre et
                aisément explicable.
              </div>
            </div>
          </article>

          <article className="projets__item">
            <div className="image_description">
              <div className="image_title_link">
                <div className="stack_image">
                  <div className="stack_arrow">
                    <div class="arrow"></div>
                    <div className="stack_title">STACK</div>
                    <div class="arrow"></div>
                  </div>

                  <div className="projets__item-image">
                    <img src={extension} alt="extension_chrome" />
                    <div className="new_div">
                      <h5>STACK</h5>
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
                </div>
                <h5>
                  Extension navigateur <br />
                  (2023)
                </h5>
                <div className="projets__item-cta">
                  <a
                    href="https://github.com/PierreMerlaud/Projet-Extension-Navigateur-Chrome"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="projets__details-icon" />
                  </a>
                </div>
              </div>
              <div className="description">
                -&gt; Codage d'une extension utilisable sur Chrome.
                <br />
                <br />
                -&gt; Une fois installée l'extension permet de choisir un animal
                via un bandeau permanent sur le navigateur. Les images de chaque
                page web sont remplacées par des images de l'animal choisi. Si
                AFK, des informations random viennent animer la page.
                <br />
                <br />
                -&gt; Projet collectif de 2 semaines.
                <br />
                <br />
                -&gt; Équipe imposée. (3 personnes)
                <br />
                <br />
                -&gt; Découvrir l’écosystème d’un navigateur.
                <br />
                <br />
                -&gt; Utilisation de deux API.
                <br />
                <br />
                -&gt; Explorer les mécanismes d’un navigateur (DOM, moteur
                exécution JS, ...). Se familiariser avec la documentation d’un
                navigateur.
              </div>
            </div>
          </article>

          <article className="projets__item">
            <div className="image_description">
              <div className="image_title_link">
                <div className="stack_image">
                  <div className="stack_arrow">
                    <div class="arrow"></div>
                    <div className="stack_title">STACK</div>
                    <div class="arrow"></div>
                  </div>

                  <div className="projets__item-image">
                    <img src={reseau_social} alt="" />
                    <div className="new_div">
                      <h5>STACK</h5>
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
                </div>
                <h5>
                  Réseau social <br />
                  (2023)
                </h5>
                <div className="projets__item-cta">
                  <a
                    href="https://github.com/PierreMerlaud/project_collectif_reseau_social_php"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="projets__details-icon" />
                  </a>
                </div>
              </div>
              <div className="description">
                -&gt; Simulation d'un réseau social.
                <br />
                <br />
                -&gt; Projet collectif de 2 semaines.
                <br />
                <br />
                -&gt; Équipe imposée (3 personnes).
                <br />
                <br />
                -&gt; Découverte de php et MySql.
                <br />
                <br />
                -&gt; Faire un site web dynamique qui construit les pages HTML à
                la demande grâce à une base de donnée.
                <br />
                <br />
                -&gt; Gérer les authentifications (login), sessions,
                inscriptions.
                <br />
                <br />
                -&gt; Avoir un premier aperçu de la conception web, de la
                conception d'une base de données, des problématiques d’un projet
                multi-langages.
              </div>
            </div>
          </article>

          <article className="projets__item">
            <div className="image_description">
              <div className="image_title_link">
                <div className="stack_image">
                  <div className="stack_arrow">
                    <div class="arrow"></div>
                    <div className="stack_title">STACK</div>
                    <div class="arrow"></div>
                  </div>

                  <div className="projets__item-image">
                    <img src={pico} alt="" />
                    <div className="new_div">
                      <h5>STACK</h5>
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
                </div>
                <h5>
                  Jeu-vidéo en 8 bits <br />
                  (2022)
                </h5>
                <div className="projets__item-cta">
                  <a
                    href="https://github.com/PierreMerlaud/projet-collectif---pico-8-gasrace"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="projets__details-icon" />
                  </a>
                </div>
              </div>
              <div className="description">
                -&gt; Premier projet d'école et de code en équipe.
                <br />
                <br />
                -&gt; Création d'un jeu rétro en langage Lua.
                <br />
                <br />
                -&gt; Projet collectif de 2 semaines.
                <br />
                <br />
                -&gt; Équipe imposée (3 personnes).
                <br />
                <br />
                -&gt; Apprentissage du codage en équipe : orientation du projet,
                pair-programming, séparation des tâches...
                <br />
                <br />
                -&gt; Notions abordées : moteur de jeu, infographie 2d,
                recherche autonome de ressources...
              </div>
            </div>
          </article>

          <article className="projets__item">
            <div className="image_description">
              <div className="image_title_link">
                <div className="stack_image">
                  <div className="stack_arrow">
                    <div class="arrow"></div>
                    <div className="stack_title">STACK</div>
                    <div class="arrow"></div>
                  </div>

                  <div className="projets__item-image">
                    <img src={sitephoto1} alt="site_e_commerce" />
                    <div className="new_div">
                      <h5>STACK</h5>
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
                      </div>
                    </div>
                  </div>
                </div>
                <h5>
                  Premier site photo <br />
                  (2022)
                </h5>
                <div className="projets__item-cta">
                  {/* <a href="https://github.com/PierreMerlaud/projet_collectif_vente_de_meubles-front-team_retrovibe"className="btn"target="_blank" rel="noreferrer"><BsGithub className="projets__details-icon" /></a> */}
                  <a
                    href="https://pierremerlaud.github.io/Premier-site-photo/index.html"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="projets__details-icon" />
                  </a>
                </div>
              </div>
              <div className="description">
                -&gt; Tout premier essai de code.
                <br />
                <br />
                -&gt; Site de photographe amateur.
                <br />
                <br />
                -&gt; Projet solo.
                <br />
                <br />
                -&gt; Pratiquer les bases d'un site web statique (HTML/CSS).
                <br />
                <br />
                -&gt; Appréhender l'importance du responsive. (CSS, media
                queries)
                <br />
                <br />
                -&gt; Sensibilisation à une mise en page claire et fonctionnelle
                (expérience utilisateur UX).
                <br />
                <br />
                -&gt; Expérimenter sa faculté à apprendre seul, en autonomie.
              </div>
            </div>
          </article>

          <article className="projets__item">
            <div className="image_description">
              <div className="image_title_link">
                <div className="stack_image">
                  <div className="stack_arrow">
                    <div class="arrow"></div>
                    <div className="stack_title">STACK</div>
                    <div class="arrow"></div>
                  </div>

                  <div className="projets__item-image">
                    <img src={Mer} alt="" />
                    <div className="new_div">
                      <h5>STACK</h5>
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
                </div>
                <h5>
                  Site photographie
                  <br />
                  (2023)
                </h5>
                <div className="projets__item-cta">
                  <p className="btn">in progress</p>
                  {/* <a href="https://travel-life-app.vercel.app/"className="btn btn-primary"target="_blank" rel="noreferrer">live projet</a> */}
                </div>
              </div>
              <div className="description">
                -&gt; Site de photographe amateur version 2.0.
                <br />
                <br />
                -&gt; Projet solo.
                <br />
                <br />
                -&gt; Poursuivre la découverte de React-JS, Tailwind.
                <br />
                <br />
                -&gt; Découvrir Node-JS et Mongo-DB.
                <br />
                <br />
                -&gt; Héberger une bibliothèque d'images via Cloudinary.
                <br />
                <br />
                -&gt; Coder seul en autonomie sur temps libre un projet
                full-stack.
                <br />
                <br />
                -&gt; Reparcourir de nombreuses notions abordées dans les
                projets collectifs et les ré-appliquer pour mieux en saisir le
                fonctionnement.
                <br />
                <br />
                -&gt; Découvrir et expérimenter de nouvelles notions et stacks.
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="separation"></div>
    </>
  );
};

export default Projects;
