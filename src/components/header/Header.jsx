import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me22.png";
import HeaderSocials from "./HeaderSocials";
// import video from '../../assets/video/bg.mp4'

const Header = () => {
  return (
    <header>
      {/* <div className="VApp">
      <video src= {video} autoPlay loop muted plays-inline/>
    </div> */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Linda Awasiri</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
