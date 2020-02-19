import React from "react";

const ExperienceCard = ({ experience }) => {

  return (
    <>
      <div className="ui card">
        <div className="content">
          <h3 className="ui header">{experience.work}</h3>
          <div className="time">{experience.year}</div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;