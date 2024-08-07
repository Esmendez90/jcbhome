import React from "react";
import "./style.css";
const whyKW = () => {
  return (
    <>
      <div className="main-container whykw">
        <section id="page-header-whykw" className="background-cover-image">
          <div className="text-header-container whykw-text-header">
            <h1>
              WHY I CHOSE <br /> <span>KELLER WILLIAMS</span>
            </h1>
          </div>
        </section>
        <section>
          <div className="text-container motto-text-container kwmotto-container">
            <h2>Find Your Dream Home! </h2>
          </div>
        </section>

        <section>
          <div className="banner-image-container image-left ">
            <img src="./Images/kwtechnology.png" />
          </div>
          <div className="text-container technology-container text-right">
            <div>
            <h2>Technology</h2>
            <p>
              Leading-edge tech tools and training give me the edge in
              effectively marketing your property online, 24 hours a day, seven
              days a week! Through KW’s exclusive Keller Williams Listing System
              (KWLS), your property is fed to more than 350 online search
              engines and available on KW’s Web network of more than 76,000
              sites.
              {/* Best of all, because of Keller Williams Realty’s “My
              Listings, My Leads” philosophy, every single Internet inquiry on
              your property will come directly to me so that I can follow up
              quickly on potential buyers for your property. */}
            </p>
            </div>
          </div>
        </section>

        <section>
          <div className="banner-image-container image-right ">
            <img src="./Images/kwtogether.png" />
          </div>
          <div className="text-container team-container text-left">
            <div>
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
          </div>
        </section>

        <section>
          <div className="banner-image-container image-left">
            <img src="./Images/kwstats.png" />
          </div>
          <div className="text-container knowledge-container text-right">
            <div>
            <h2>Knowledge</h2>
            <p>
              Keller Williams Realty helps me stay ahead of trends in the real
              estate industry through its comprehensive, industry-leading
              training curriculum and research resources. It’s what prepares me
              to provide you with unparalleled service.
            </p>
            </div>
          </div>
        </section>

        <section>
          <div className="banner-image-container image-right">
            <img src="./Images/kwrely.png" />
          </div>
          <div className="text-container reliability-container text-left">
           <div>
            <h2>Reliability</h2>
            <p>
              Founded on the principles of trust and honesty, Keller Williams
              Realty emphasizes the importance of having the integrity to do the
              right thing, always putting your needs first. It reinforces my
              belief that my success is ultimately determined by the legacy I
              leave with each client I serve.
            </p>
            </div>
          </div>
        </section>
        <section>
          <div className="banner-image-container image-left">
            <img src="./Images/kwone.png" />
          </div>
          <div className="text-container record-container text-right">
            <div>
            <h2>Track Record</h2>
            <p>
              I’m proud to work for #1 Real Estate Franchise in the World, by
              agent count! It’s proof that when you offer a superior level of
              service, the word spreads fast.
            </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default whyKW;
