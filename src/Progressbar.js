import React from "react";
import "./styles.css";

export const Progressbar = () => {
  return (
    <div className="progress-information">
      <div className="container-styles">
        <div className="fillerclass-names">
          <span className="label-styles"></span>
        </div>
      </div>
      <div className="description-container">
        <p id="progress-desciption">6/9 challenges</p>
      </div>
    </div>
  );
};
