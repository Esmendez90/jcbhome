import React from "react";
import "./style.css";
const whyKW = () => {
  return (
    <>
      <div className="why-kw-main-container">
        <section id="page-header-whykw" className="background-cover-image">
          <div className="text-container">
            <h1>
              WHY I CHOSE <br /> <span>KELLER WILLIAMS</span>
            </h1>
          </div>
        </section>

        <section>
          <div className="image-left kw-image-container">
            <img src="./images/kwtechnology.png" />
          </div>
          <div className="tech-container whykw-text-container text-right">
            <h2>Technology</h2>
            <p>
              Leading-edge tech tools and training give me the edge in
              effectively marketing your property online, 24 hours a day, seven
              days a week! Through KW’s exclusive Keller Williams Listing System
              (KWLS), your property is fed to more than 350 online search
              engines and available on KW’s Web network of more than 76,000
              sites. Best of all, because of Keller Williams Realty’s “My
              Listings, My Leads” philosophy, every single Internet inquiry on
              your property will come directly to me so that I can follow up
              quickly on potential buyers for your property.
            </p>
          </div>
        </section>

        <section>
          <div className="image-right kw-image-container">
            <img src="./images/kwtogether.png" />
          </div>
          <div className="team-container whykw-text-container text-left">
            <h2>Teamwork</h2>

            <p>
              Keller Williams Realty was designed to reward agents for working
              together. Based on the belief that we are all more successful if
              we strive toward a common goal rather than our individual
              interests, I’m confident that every Keller Williams professional
              shares the common goal of serving you, my client, in the best way
              possible.
            </p>
          </div>
        </section>

        <section>
          <div className="image-left kw-image-container">
            <img src="./images/kwstats.png" />
          </div>
          <div className="knowledge-container whykw-text-container text-right">
            <h2>Knowledge</h2>
            <p>
              Keller Williams Realty helps me stay ahead of trends in the real
              estate industry through its comprehensive, industry-leading
              training curriculum and research resources. It’s what prepares me
              to provide you with unparalleled service.
            </p>
          </div>
        </section>

        <section>
          <div className="image-right kw-image-container">
            <img src="./images/kwrely.png" />
          </div>
          <div className="team-container whykw-text-container text-left">
            <h2>Reliability</h2>
            <p>
              Founded on the principles of trust and honesty, Keller Williams
              Realty emphasizes the importance of having the integrity to do the
              right thing, always putting your needs first. It reinforces my
              belief that my success is ultimately determined by the legacy I
              leave with each client I serve.
            </p>
          </div>
        </section>
        <section>
          <div className="image-left kw-image-container">
            <img src="./images/kwone.png" />
          </div>
          <div className="record-container whykw-text-container text-right">
            <h2>Track Record</h2>
            <p>
              I’m proud to work for #1 Real Estate Franchise in the World, by
              agent count! It’s proof that when you offer a superior level of
              service, the word spreads fast.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default whyKW;
