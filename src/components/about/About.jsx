import React from "react";
import "./about.css";
import ME from "../../assets/mine21.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              {/* <small>3+ Years Working</small> */}
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Blog</h5>
              {/* <small>200+ Worldwide</small> */}
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              {/* <small>80+ Completed</small> */}
            </article>
          </div>

          <p>
            Motivated Software Engineer who brings a creative and
            solution-driven mindset to every team and project. Passionate about
            writing clean code that is reusable and follows the DRY principle.
            Designs interfaces that incorporate accessibility and user-
            friendliness. Approaches all new projects with the priorities of
            simplicity and functionality.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;