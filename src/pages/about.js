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
            I came to the United States about 17 years ago. Adapting to the new
            culture and lifestyle was very challenging. On top of that, the
            death of my father shortly after, completely changed my life. My
            goals had to be put on standby in order to help my mother raising my
            two younger siblings. Against all odds, my family and I were able to
            move on with our lives, and keep the principles that our father
            instilled in us, and the determination to chase our dreams close to
            our hearts.
            <br />
            <br />
            As a young adult, I started my career in the medical field and spent
            a decent amount of years working with people with diverse
            backgrounds. I enjoyed my work and the people that surrounded me;
            however, I always felt a passion for real estate. I continuously
            studied about real estate investments and even assisted my family in
            the sale and purchase of properties. Back home, my parents were both
            independent contractors and their example motivated me to want to do
            the same... to be my own boss. When my job was affected by covid-19,
            I realized that my opportunity to go after my dream had finally
            arrived, and in March 2020 I began building my path in this
            rewarding career.
            <br />
            <br />
            Real estate is to me, the modus operandi to fullfil my dreams,
            including those that my dad would have loved to see become a
            reality. Thanks to this career, my husband and I have started an
            ambitous business in Ecuador. A hundred and twenty three hectares of
            land dedicated to the production of abaca and other goods. This is
            not only our life project, but also a way to generate a number of
            jobs in this region that needs it so much. For us, this is a way to
            share with others the many blessings we have received.
            <br />
            <br />
            During my first two years as a real estate agent, I have learned so
            much from my coach and the extraordinary people that are part of
            Keller Williams. I feel fortunate to belong to a company that truly
            cares about each one of us and our clients. This is why I work hard
            every day so as not to disappoint my clients and the trust confided
            in me, and to offer the best possible experience during a real
            estate transaction.
          </p>
        </div>
        <CarouselComponent />
        <div className="whyKw-parr">
          <div className="kwImages-container">
            <img
              src="/images/kwtechnology.png"
              alt="keller william is #1 - spanish"
            />
            <img
              src="/images/kwopportunity.png"
              alt="keller william is #1 - spanish"
            />
            <img src="/images/kwknowledge.png" alt="keller williams cares" />
            <img src="/images/kwsketch.png" alt="love keller william" />
          </div>
          <p>
            <span>&#8212;</span> Why choose{" "}
            <span className="kwSpan">Keller Williams</span> <span>&#8212;</span>
          </p>
          <p className="subtitle">Technology</p>
          <p className="group1">
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
          <p className="subtitle group2">Teamwork</p>
          <p className="group2">
            Keller Williams Realty was designed to reward agents for working
            together. Based on the belief that we are all more successful if we
            strive toward a common goal rather than our individual interests,
            I’m confident that every Keller Williams professional shares the
            common goal of serving you, my client, in the best way possible.
          </p>
          <p className="subtitle">Knowledge</p>
          <p className="group1">
            Keller Williams Realty helps me stay ahead of trends in the real
            estate industry through its comprehensive, industry-leading training
            curriculum and research resources. It’s what prepares me to provide
            you with unparalleled service.
          </p>
          <p className="subtitle group2">Reliability</p>
          <p className="group2">
            Founded on the principles of trust and honesty, Keller Williams
            Realty emphasizes the importance of having the integrity to do the
            right thing, always putting your needs first. It reinforces my
            belief that my success is ultimately determined by the legacy I
            leave with each client I serve.
          </p>
          <p className="subtitle">Track Record</p>
          <p className="group1">
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
