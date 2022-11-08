import React from "react";
import "./content.scss";
import circle from "../../resources/Images/Ellipse.png";

export default function Content() {
  return (
    <>
      <div className="content-body">
        <div id="card-content-1">
          <h2 className="title-content">Lorem ipsum</h2>
          <p className="p-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
        </div>
        <div id="card-content-2">
          <h2 className="title-content">Lorem ipsum</h2>
          <p className="p-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
        </div>
        <div id="card-content-3">
          <h2 className="title-content">Lorem ipsum</h2>
          <p className="p-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
        </div>

        <img src={circle} alt="" className="circle" />
      </div>{" "}
    </>
  );
}
