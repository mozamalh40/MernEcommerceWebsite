import React from "react";
import playStore from "../../../images/playstore.png";
import { CgFacebook } from "react-icons/cg";
import { CgInstagram } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import appStore from "../../../images/appStore.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Mozamal Hussain</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="/"><CgInstagram/></a>
        <a href="https://github.com/mozamalh40/Mern-Ecommerce-Website"><SiGithub/></a>
        <a href="http://facebook.com/Mozamal Hussain"><CgFacebook/></a>
      </div>
    </footer>
  );
};

export default Footer;