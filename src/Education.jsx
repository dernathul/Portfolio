import React, { Component } from "react";
import axios from "axios";
import EducationCard from "./EducationCard";
import { UndrawUpload } from "react-undraw-illustrations/lib/components/UndrawUpload/UndrawUpload";

class Education extends Component {
    state = {
      education: []    
    };
    componentDidMount() {
      axios.get('./src/data/education.json')
        .then(response => {
          this.setState({
            education: response.data
          })
          debugger
        })
    }
  
    render() {
      const education = this.state.education;
      let educationList;
  
      if (education.length > 0) {
        educationList = education.map(education => {
          return (
            <div id={'education-' + education.id} key={education.id}>
              <EducationCard education={education} />
            </div>
          );
        });
      }
  
      return (
        <div className="ui main container">
          <div className="ui stackable two column grid">
            <div className="column">
            <UndrawUpload />
            </div>
            <div className="column">
              <h1 className="ui header">Education</h1>
              
            </div>
          </div>
          <div className="ui stackable four column grid">{educationList}</div>
        </div>
      );
    }
  }
  
  export default Education;


