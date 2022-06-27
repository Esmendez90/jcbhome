import React from "react";
import { ImgComponent } from "../components/ImageComponent";
import Slogan from "../components/Slogan";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const home = () => {
  return (
    <>
      <div className="home-main-container">
        <section className="vide-hero">
          <div className="video hero-background-video">
            <video autoPlay loop playsInline muted>
              <source src="/images/openingvideo.mp4" type="video/mp4" />
            </video>
            <div className="text-container">
              <div>
                <h1>
                  Jennifer <span>Mendez</span>
                </h1>
                <h2>Real Estate Agent</h2>
              </div>
              <ImgComponent
        imgContainerClass="jenniferImg-container"
        imgClass="jennifer-img"
        src="./images/jen3.png"
        alt="jennifer photo"
      />
            </div>
          </div>
        </section>
        {/*  */}
        {/* <div className="heading-container">
          <p>
            Jennifer<span>Mendez</span>
          </p>
          <p>Real Estate Agent</p>
          <p className="basedIn">
            Based in <b>Ridgewood, NJ</b>.
            <FontAwesomeIcon icon={faLocationDot} />
          </p>
          <p className="abitAboutMe">
            <a href="/about">
              <span>&#8212;</span> A little bit about me.
            </a>
          </p>
          <div className="ask-container">
            <p>Have a question ?</p>
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
          <Slogan
            sloganContainerClass="slogan-container"
            slogan="More than a friend, Your Realtor!"
          />
        </div> */}
      </div>
    </>
  );
};
export default home;
