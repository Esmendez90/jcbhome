import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const home = () => {
  return (
    <>
      <div className="main-container home-container">
        <section className="vide-hero">
          <div className="video hero-background-video">
            {/* <video autoPlay loop playsInline muted>
              <source src="/images/openingvideo.mp4" type="video/mp4" />
            </video> */}
            <div className="text-header-container">
              <h1>
                JENNIFER<span> MENDEZ</span>
                <br />
                <span>Real Estate Agent</span>
              </h1>
              <p className="basedIn">
                Based in Ridgewood, NJ <FontAwesomeIcon icon={faLocationDot} />
              </p>

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
        <section>
          <div className="text-container motto-text-container">
            <h2>More than a friend, Your Realtor! </h2>
          </div>
        </section>

        <section>
          <div className="banner-image-container image-right">
            <img src="./images/steptarget.png" />
          </div>
          <div className="text-container mission-text-container text-left">
            <div>
              <h2>Our Mission</h2>
              <p>
                In JCB Real Estate Services, our mission is to provide guidence
                and support to our clients with the process of purchasing,
                leasing, or selling properties. We advise clients about market
                conditions, conduct walkthroughs, and assist in every step of a
                real estate transaction.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default home;
