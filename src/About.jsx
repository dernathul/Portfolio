import React from "react";
import { UndrawBeTheHero } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable two column grid">
      <div className="column">  
      <div class='about'>
      <UndrawBeTheHero alt="banner"/>
      </div>
      </div>
        <div className="column">
        <div>
          -----------
        </div>
        <div>
          -----------
        </div>
        
          <h1 className="ui header">Hello, my name is Lau</h1>
          <p>
          I am a father of two boys, who has learned multiple skills across life. I have lived in several cities in different countries, falling in love with Sweden since I first came for vacations in 2013, since 2016 with my wife we moved here to start a family.
          I have learned programming by a fullstack developer Bootcamp in Craft Academy, in Göteborgs. I love to code and its applications, but i also love to learn more about this ever changing field. 
          I have published two short stories books in spanish, had my own restaurant in Chile and meet amazing people along life. I have many friends and i try to always leave a positive footprint in them, with my positive atitude and my way to be.
          </p> 
          <div id="lautarox">
        <img src="src/images/lautaro.jpg" />
        <img src="src/images/mrlau.jpg" />
        <img src="src/images/bubbagump.jpg" />
        <img src="src/images/peques.jpg" />
       </div>     
        </div>
      </div>
    </div>
       
    
    

  );
};

export default About;