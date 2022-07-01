import React from "react";
import TeamImages from "../components/Swiper";
import { ImgComponent } from "../components/ImageComponent";

const team = () => {
  return (
    <>
      <div className="main-container plan-container">
        <ImgComponent
          imgContainerClass="logoImg-container"
          imgClass="logoImg"
          src="/images/logo.png"
          alt="jcb logo"
        />
        <section id="team-header-plan" className="background-cover-image">
          <div className="text-header-container">
            <h1>
              WE BUILD THE PLAN <br /> <span>YOU BUILD SUCCESS</span>
            </h1>
          </div>
        </section>
        <TeamImages />
      </div>
    </>
  );
};
export default team;
