import React from "react";
import { ImgComponent } from "../components/ImageComponent";
import { Swiper } from "../components/Swiper";

//import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const home = () => {
  return (
    <>
      <div className="home-main-container">
      <ImgComponent
          imgContainerClass="logoImg-container"
          imgClass="logoImg"
          src="/images/logo.png"
          alt="jcb logo"
        />
        <section className="vide-hero">
          <div className="video hero-background-video">
            <video autoPlay loop playsInline muted>
              <source src="/images/openingvideo.mp4" type="video/mp4" />
            </video>
            <div className="text-container">
              <h1>
                Jennifer <span>MENDEZ</span>
                <br />
                <span>Real Estate Agent</span>
              </h1>

              <div className="ask-container">
                <p>Have a question ?</p>
                <div className="btn-container">
                  <button type="button">
                    <a
                      href="https://api.whatsapp.com/send?phone=12017326844&amp;text=Hello, I have a question..."
                      target="_blank"
                      rel="noreferrer"
                    >
                      ASK AWAY
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Swiper /> */}
        <section>
          <div className="image-left kw-image-container">
            <img src="./images/missionhouse.png" />
          </div>
          <div className="tech-container whykw-text-container text-right">
            <h2>Our Mission</h2>
            <p>
              In JCB Real Estate Services, our mission is to provide guidence
              and support to our clients with the process of purchasing,
              leasing, or selling properties. We advise clients about market
              conditions, conduct walkthroughs, and assist in every step of a
              real estate transaction.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default home;
