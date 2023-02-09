import React from "react";
import "./styled.css";
//icon
import Infoimg from "../../assets/1617095492522.jpg";
import nodejs from "../../assets/icons8-nodejs.svg";
import react from "../../assets/icons8-reagir.svg";
import postgreesql from "../../assets/icons8-postgreesql.svg";
import github from "../../assets/icons8-github.svg";
import javascript from "../../assets/icons8-javascript.svg";
import angular from "../../assets/icons8-angularjs.svg";
import linkedin from "../../assets/icons8-linkedin.svg";
import resume from "../../assets/icons8-resume.png";

function About() {
  const technologies = [
    {
      img: nodejs,
      alt: "Node.js",
    },
    {
      img: react,
      alt: "React.js",
    },
    {
      img: github,
      alt: "github",
    },
    {
      img: javascript,
      alt: "javascript",
    },
    {
      img: angular,
      alt: "angular.js",
    },
    {
      img: postgreesql,
      alt: "postgreesql",
    },
  ];

  return (
    <div className="modal-about">
      <div class="circular--landscape">
        <img src={Infoimg} alt="Creatorimage" />
      </div>

      <div className="info-text">
        <h1>Hi! my Name is Vinicius and i am a Web Developer</h1>
        <p>My focus is Node.js, React.js and Javascript</p>
        <p>
          Recentely im working whith React and improving my Skills and learning
          a lot of Javascript
        </p>
        <h1>Here the things i know</h1>
        <div className="know-imgs">
          {technologies.map((e, index) => {
            return <img key={index} src={e.img} alt={e.alt} />;
          })}
        </div>
        <h1>Access my networks</h1>
        <div className="link-network">
          <div className="itens-network">
            <a href="https://github.com/fireblaze267">
              <img src={github} alt="Github" />
              <p>Github</p>
            </a>
          </div>
          <div className="itens-network">
            <a href="https://resume-ten-ruddy.vercel.app/">
              <img src={resume} alt="Github" />
              <p>My site</p>
            </a>
          </div>

          <div className="itens-network">
            <a href="https://www.linkedin.com/in/vinicius-gama/">
              <img src={linkedin} alt="Github" />
              <p>linkedin</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
