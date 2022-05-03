import React from "react";
import CarouselComponent from "../components/Carousel";
const about = () => {
  return (
    <>
    <div className="topRedBlock"></div>
      <div className="about-container">
        <p>
          <span>&#8212;</span> My Journey <span>&#8212;</span>
        </p>
        <div className="about-parr">
          <p>
            I came to the United States about 17 years ago. Starting and
            adapting to a new country was not easy. The death of my father
            shortly after arriving changed my life and many of my goals had to
            be put on standby in order to help my mother with my two brothers.
            Although these circumstances were not the best, I am grateful that
            despite the difficulties, both I and my family were able to move
            forward and resume our path without forgetting the principles that
            our father instilled in us and the determination to go behind our
            dreams.
            <br />
            <br />
            I dedicated myself for a long time to the medical field but I always
            felt my passion for Real Estate. My parents were always independent
            contractors and I always had in mind to do the same. I have always
            liked reading about real estate investments and helping my family in
            the sale and purchase of real estate. When the pandemic affected my
            work, I felt that my opportunity to go after my dream had arrived
            and in March 2020 I began to swim in this very rewarding career.
            <br />
            <br />
            For me, real estate is the path to many of my dreams including the
            dreams that my father could not fulfill. Thanks to this beautiful
            career, my husband and I have started our business in Ecuador. 123
            hectares dedicated to the production of Abaca and other forest
            trees. This is not only our great project but also the way to create
            a source of work in this region that needs it so much, being one of
            the ways to share the many blessings received.
            <br />
            <br />
            During these two years I have learned so much not only from my coach
            but the different extraordinary people that are part of Keller
            Williams. I feel fortunate to belong to a company that truly cares
            about each one of us and our clients. I prepare myself every day so
            as not to disappoint the trust that my clients put in me and to
            offer the best experience during a real estate transaction.
          </p>
        </div>
        <CarouselComponent />
        <div className="whyKw-parr">
          <div className="kwImages-container">
            <img src="/images/kwn1.jpeg" alt="keller william is #1 - spanish"/>
            <img src="/images/kwproud.png" alt="keller williams proud"/>
            <img src="/images/kwlove.png" alt="love keller william"/>
            <img src="/images/kwilove.png" alt="i love keller williams"/>
          </div>
          <p>
          <span>&#8212;</span> Why choose <span className="kwSpan">Keller Williams</span> <span>&#8212;</span>
          </p>
          <p className="subtitle">Technology</p>
          <p>
            Leading-edge tech tools and training give me the edge in effectively
            marketing your property online, 24 hours a day, seven days a week!
            Through KW’s exclusive Keller Williams Listing System (KWLS), your
            property is fed to more than 350 online search engines and available
            on KW’s Web network of more than 76,000 sites. Best of all, because
            of Keller Williams Realty’s “My Listings, My Leads” philosophy,
            every single Internet inquiry on your property will come directly to
            me so that I can follow up quickly on potential buyers for your
            property.
          </p>
          <p className="subtitle">Teamwork</p>
          <p>
            Keller Williams Realty was designed to reward agents for working
            together. Based on the belief that we are all more successful if we
            strive toward a common goal rather than our individual interests,
            I’m confident that every Keller Williams professional shares the
            common goal of serving you, my client, in the best way possible.
          </p>
          <p className="subtitle">Knowledge</p>
          <p>
            Keller Williams Realty helps me stay ahead of trends in the real
            estate industry through its comprehensive, industry-leading training
            curriculum and research resources. It’s what prepares me to provide
            you with unparalleled service.
          </p>
          <p className="subtitle">Reliability</p>
          <p>
            Founded on the principles of trust and honesty, Keller Williams
            Realty emphasizes the importance of having the integrity to do the
            right thing, always putting your needs first. It reinforces my
            belief that my success is ultimately determined by the legacy I
            leave with each client I serve.
          </p>
          <p className="subtitle">Track Record</p>
          <p>
            I’m proud to work for #1 Real Estate Franchise in the World, by
            agent count! It’s proof that when you offer a superior level of
            service, the word spreads fast.
          </p>
        </div>
      </div>
    </>
  );
};
export default about;
