import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a   target="_blank" rel= "noreferrer"
        href="https://www.linkedin.com/in/linda-awasiri-482536204/"
      
      >
        <BsLinkedin />
      </a>
      <a target="_blank" rel="noreferrer"href="https://github.com/Lindaroy202" >
        <FaGithub />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" >
        <FiFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
