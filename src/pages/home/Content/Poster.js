import PropTypes from "prop-types";
import React from "react";
// import FeatureIconTwoSingle from "components/feature-icon/FeatureIconTwoSingle.js";
import welcomeText from "data/pages/home/welcome.json";
import PosterLayout from "./PosterLayout";
// import statements from "../Data/statements.json";

const Statements = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <PosterLayout data={welcomeText[0]} />
      </div>
    </div>
  );
};

Statements.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default Statements;
