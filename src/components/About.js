import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>
      I am a web developer with a passion for creating dynamic and responsive web applications.
      I have experience in various technologies and frameworks, and I am always eager to learn more.
    </p>
    <img src={image} alt="I made this" />

  </div>
);
}

export default About;
