import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="ui card">
        <Link to={project.link} />
        <div className="content">
          <h3 className="ui header">{project.name}</h3>

          <div className="description">{project.description}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
