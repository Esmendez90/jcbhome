import React from "react";
import TeamImages from "../components/Swiper";

const team = () => {
  return (
    <>
      <div className="main-container plan-container">
        <section id="page-header-team" className="background-cover-image">
          <div className="text-header-container team-header-container">
            <h1>
              A GREAT TEAM<br /> <span>MAKES THINGS POSSIBLE</span>
            </h1>
          </div>
        </section>
        <TeamImages />
      </div>
    </>
  );
};
export default team;
