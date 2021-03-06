import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";
// import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        Mario Nabil
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href='#services'>Services</a></li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/mario-nabil-al-developer/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Nabilapaza" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/AL.MaRio.NaBiL/" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div className="footer__copyright">
        <p>
          <small>&copy; Mario Nabil Productions. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
