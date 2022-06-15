import React from "react";
import "./style.css";
import images from "./images.json";

function TeamImages() {
  return (
    <>
      <ul className="teamImages-container">
        {images.map(({ id, className, src, alt, member, title }) => (
          <li key={id}>
            <img className={className} src={src} alt={alt} />
            <p className="member-title">
              {member} <span></span> {title}
            </p>
          </li>
        ))}
      </ul>
      <div className="kwnumberone-img">
        <img src="./images/kwnumberone.png" />
      </div>
    </>
  );
}
export default TeamImages;
