import React from "react";
import "./feature.css";

const Feature = ({ title, content }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>

      <div className="gpt3__features-container__feature-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Feature;
