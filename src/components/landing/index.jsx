import React from "react";
import "./landing.scss";
import Spiral from "../../resources/Images/Line.svg";

export default function Landing() {
  return (
    <>
      <div className="landing-body">
        <p>Las mejores vacaciones de tu vida</p>
        <img src={Spiral} alt="" className="spiral" />
      </div>{" "}
    </>
  );
}
