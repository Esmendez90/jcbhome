import React from "react";
import { ImgComponent } from "../components/ReusableComponents/index";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const home = () => {
  return (
    <>
      <ImgComponent
        imgContainerClass="jenniferImg-container"
        imgClass="jennifer-img"
        src="./images/jenniferImg.jpeg"
        alt="jennifer photo"
      /> 
       <div className="heading-container">
        <p>
          Jennifer<span>Mendez</span>
        </p>
        <p>Real Estate Agent</p>
        <p className="basedIn">
          Based in <b>Bergenfield, NJ</b>.
        </p>
        <p className="abitAboutMe"><a href="/about">
<span>&#8212;</span> A little bit about me.</a></p>
        <div className="ask-container">
          <p>
            HAVE A<br />
            QUESTION
          </p>
          <FontAwesomeIcon className="questionIcon" icon={faQuestionCircle} />
          <div className="btn-container">
            <button type="button">
              <a
                href="https://api.whatsapp.com/send?phone=12017326844&amp;text=Hi, there! I have a question"
                target="_blank"
                rel="noreferrer"
              >
                ASK AWAY
              </a>
            </button>
          </div>
        </div>
        <p className="slogan">More than a friend, Your Realtor!</p>
      </div>
    </>
  );
};
export default home;
