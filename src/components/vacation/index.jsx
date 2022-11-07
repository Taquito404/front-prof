import React from "react";
import "./vacation.scss";
import Whale from "../../resources/Images/whale.png";
import Waves from "../../resources/Images/waves.svg";

export default function Vacation() {
  return (
    <>
      <div className="vacation-body">
        <div className="green-div">
          <img src={Whale} alt="" className="whale" />
          <img src={Waves} alt="" className="waves" />
          <h1 className="vacation-1">Your vacation is here</h1>
          <h2 className="vacation-2">Ready to sail</h2>
        </div>
      </div>
    </>
  );
}
