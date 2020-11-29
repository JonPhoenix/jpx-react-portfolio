import React from "react";
// import css styles
import "../../css/style.css";

function Tile(props) {
  return (
    <>
      <div className="card col-lg-4" id="outer">
        <div className="tile">
          <img
            className="img-thumbnail"
            id="image"
            src={props.project.imageUrl}
            alt="application"
          />
          <div className="project-details">
            <p className="project-title">
              <strong>{props.project.title}</strong>
            </p>
            <p>{props.project.description}</p>
            <div className="buttons">
              <a
                className="btn btn-dark button"
                href={props.project.appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                App
              </a>
              <a
                className="btn btn-dark button"
                href={"https://github.com/" + props.project.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tile;
