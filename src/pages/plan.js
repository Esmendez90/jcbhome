import React from "react";
import { ImgComponent } from "../components/ImageComponent";
import "./style.css";

const strategy = () => {
  return (
    <>
      <div className="main-container plan-container">
        <ImgComponent
          imgContainerClass="logoImg-container"
          imgClass="logoImg"
          src="/images/logo.png"
          alt="jcb logo"
        />
        <section id="page-header-plan" className="background-cover-image">
          <div className="text-header-container">
            <h1>
              WE BUILD THE PLAN <br /> <span>YOU BUILD SUCCESS</span>
            </h1>
          </div>
        </section>

        <section>
          <div className="banner-image-container image-left">
            <img src="./images/missionhouse.png" />
          </div>
          <div className="text-container plan-text-container text-right">
            <h2>Open Houses</h2>
            <p>
              Open houses are one of the best ways to create exposure for your
              property, and I can confidently assure you that there's more to
              open houses than just putting out signs with balloons!
              <br />
              <br />
              Open houses make the preview of your property efficient for you
              and for the buyers -
              <strong>
                especially for the ones who aren't working with an agent.
              </strong>{" "}
              These come through your home in one day and you avoid having to
              prepare your home for different appointments for buyers previewing
              your property separately.
              <br />
              <br />
              Before the open house, I will advertise especially heavily, and
              set up phone mail campaings to make the neighborhood aware of the
              event. I place no fewer than 5 signs; all within heavy traffic
              areas in the morning on the day of the open house.
              <br />
              <br />
              During the open house, I will determine the motivation and
              seriousness of each buyer, and also gauge any constructive input
              that they may have. I also have a system to follow up with every
              open house guest within 24 hours. I will be able to answer all of
              their questions while their home is still fresh in their minds -
              making it more likely to get another appointment and possibly an
              offer.
            </p>
            <p>
              Let's chat!
              <br />
              I'm sure you have questions and thoughts about the real estate
              process. I'd love to speak with you about what you've read here
              and help you on the path to selling your house. My contact
              information is on the menu. I look forward to working with you.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default strategy;
