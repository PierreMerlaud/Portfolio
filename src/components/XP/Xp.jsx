import React from "react";
import "./xp.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BiGitCompare } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { BsTools } from "react-icons/bs";
import { GiTeamIdea } from "react-icons/gi";
import { RiKakaoTalkLine } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { FaRegHandRock } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Xp = () => {
  return (
    <>
      <section id="experience">
        <h5>COMPÉTENCES</h5>
        <h2>Expérience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h5>SOFT SKILLS</h5>
            <div className="experience__content">
              <article className="experience__details">
                <GiTeamIdea className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>Travail en équipe</h4>
                </div>
              </article>

              <article className="experience__details">
                <RiKakaoTalkLine className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>Communication</h4>
                </div>
              </article>

              <article className="experience__details">
                <BsPersonWorkspace className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>Autonomie</h4>
                </div>
              </article>

              <article className="experience__details">
                <FaRegHandRock className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>Combativité</h4>
                </div>
              </article>

              <article className="experience__details">
                <BsEmojiSmile className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>Bienveillance</h4>
                </div>
              </article>

              <article className="experience__details">
                <BsTools className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>Adaptabilité</h4>
                </div>
              </article>
            </div>
          </div>
          <div className="experience_backend">
            <h5>HARD SKILLS</h5>
            <div className="experience__content">
              <article className="experience__details">
                <AiFillHtml5 className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>HTML</h4>
                </div>
              </article>

              <article className="experience__details">
                <DiCss3 className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>CSS</h4>
                </div>
              </article>

              <article className="experience__details">
                <SiJavascript className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>JavaScript</h4>
                </div>
              </article>

              <article className="experience__details">
                <div className="iconSpace">
                  <GrReactjs className="experience__details-icon" />
                  <FaNodeJs className="experience__details-icon" />
                </div>
                <div className="experience__skills">
                  <h4>React / Node.js</h4>
                </div>
              </article>

              <article className="experience__details">
                <div className="iconSpace">
                  <BiGitCompare className="experience__details-icon" />
                  <BsGithub className="experience__details-icon" />
                </div>
                <div className="experience__skills">
                  <h4>Git / Github</h4>
                </div>
              </article>

              <article className="experience__details">
                <SiTailwindcss className="experience__details-icon" />
                <div className="experience__skills">
                  <h4>Tailwind</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <div className="separation"></div>
    </>
  );
};

export default Xp;
