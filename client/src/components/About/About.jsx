import React from "react";
import "./aboutSection.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h1 classNaem="about">About Us</h1>

        <div>
          <div>
         
            <h1 className="name">Mozamal Hussain</h1>
         
            <span>
              This is a sample wesbite made by @Mozamal Hussain.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2 className="brand" >Our Brands</h2>
            <a
              href="https://www.facebook.com/gulraiz.hero.18"
              target="blank"
            >
              <FacebookIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/gulraiz_z/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;