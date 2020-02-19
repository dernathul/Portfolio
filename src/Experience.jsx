import React, { Component } from "react";
import axios from "axios";
import ExperienceCard from "./ExperienceCard";
import { UndrawWorkTime } from "react-undraw-illustrations";

class Experience extends Component {
  state = {
    experience: []
  };
  componentDidMount() {
    axios.get('./src/data/experience.json')
      .then(response => {
        this.setState({
          experience: response.data
        })
      })
  }

  render() {

    const experience = this.state.experience;
    let experienceList;

    if (experience.length > 0) {
        experienceList = experience.map(item => {
        return (
          <div id={'experience-' + item.id} key={item.id}>
            <ExperienceCard experience={item} />
          </div>
        );
      });
    }
    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
          <UndrawWorkTime />
          </div>
          <div className="column">
            <h1 className="ui header">Experience</h1>
          </div>
        </div>
        <div className="ui stackable four column grid">{experienceList}</div>
      </div>
      
    );
  }
}

export default Experience;