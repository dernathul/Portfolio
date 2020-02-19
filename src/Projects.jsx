import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard"
import UndrawProgramming from "react-undraw-illustrations/lib/components/UndrawProgramming/UndrawProgramming";
class Projects extends Component {
  state = {
    projects: []    
  };
  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div id={'project-' + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <UndrawProgramming />
          </div>
          <div className="column">
            <h1 className="ui header">My Projects</h1>
            <p>
              I started my journey in IT by working as a tester and technician in a Stockholm Start Up called Perific Technologies AB and at the same time in CaCharge AB, in the IOT subfield. 
              Since i started my studies in Craft Academy i have work in the projects contained in this portfolio.
            </p>
          </div>
        </div>
        <div className="ui stackable four column grid">{projectsList}</div>
      </div>
    );
  }
}

export default Projects;