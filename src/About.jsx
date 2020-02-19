import React from "react";
import { UndrawBeTheHero } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable two column grid">
      <div className="column">
        <UndrawBeTheHero />
      </div>
        <div className="column">
          <h1 className="ui header">About Me</h1>
          <p>
          I am a father of two boys, who has learned multiple skills across life. I have lived in several cities in different countries, falling in love with Sweden since i first came in 2016.
          I have learned programming by a fullstack developer Bootcamp in Craft Academy, in Göteborgs. I love to code and its applications, but i also love to learn more about this ever changing field.
          </p>
        </div>
      </div>
    </div>

  );
};

export default About;