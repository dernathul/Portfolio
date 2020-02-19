import React from "react";

const EducationCard = ({ education }) => {
	debugger
  return (
    <>
      <div className="ui card">
        <div className="content">
          <h3 className="ui header">{education.education}</h3>
          <div className="time">{education.year}</div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;