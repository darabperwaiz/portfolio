import React from "react";
import style from "./hero.module.css";
import { Link } from "react-router-dom";
import resume from "../../../assets/files/sibghatullah.pdf";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.left}>
        <div className={style.title}>
          <p>
            Hello &#128075;, I'm <span>Md Sibghatullah.</span>
          </p>
          <h2 className={style.heading1}>FullStack web</h2>
          <h2 className={style.heading2}>Developer</h2>
          {/* <h2></h2> */}
        </div>
        <div className={style.subtitle}>
          {/* <p>As a Web Developer, i am resposible for Designing and Developing web pages.  My primary focus is to create responsive, user-friendly experience that meet the needs of a diverse online audience.</p> */}
          <p>Building Tomorrow's Web Today. Your Vision, Our Code.</p>
          <Link
            className={style.btn}
            to={resume}
            target="_blank"
            rel="noopener noreferrer"
            download="sibghatullah-resume.pdf"
          >
            Download CV
          </Link>
        </div>
        <div className={style.social}>
          <Link
            to="https://www.linkedin.com/in/sibghatullah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </Link>
          <Link
            to="https://github.com/sibghatullah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </Link>
          <Link
            to="https://www.instagram.com/sibghatullah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </Link>
          <Link
            to="https://www.facebook.com/sibghatullah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook"></i>
          </Link>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.image}>
        <img
            className={style.banner}
            src={require("../../../assets/images/heroImg.png")}
            alt="sibghatullah"
          />
          <div className={`${style.icon} ${style.css}`}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
              alt=""
            />
            <span>CSS</span>
          </div>
          <div className={`${style.icon} ${style.html}`}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/732/732212.png"
              alt=""
            />
            <span>HTML</span>
          </div>

          <div className={`${style.icon} ${style.react}`}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
              alt=""
            />
            <span>React JS</span>
          </div>
          <div className={`${style.icon} ${style.js}`}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
              alt=""
            />
            <span>Javascript</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
