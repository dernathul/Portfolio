import React from "react";

const EducationCard = ({ education }) => {
  return (
    <>
      <div class="ui card">
        <div class="content">
          <h3 class="ui header">{education.name}</h3>
          <div class="time">{education.time}</div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;