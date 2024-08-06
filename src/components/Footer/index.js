import React from "react";
import { ImgComponent } from "../ImageComponent";

function FooterComponent() {
  return (
    <>
      <div className="footer-container">
        <section>
          <p>JCB Real Estate Services - A Keller Williams associate.</p>
          <p>Each office is independently owned and operated.</p>
          <ImgComponent
            imgContainerClass="kwLogo-container"
            imgClass="kwLogo"
            src="https://cflare.smarteragent.com/rest/Resizer?url=https%3A%2F%2Fstorage.googleapis.com%2Fstatic-img-prod-1c53%2Fweb%2Flogo-kw.png&quality=0.8&webp=true&sig_id=69"
            alt="keller weller logo"
          />
          <ImgComponent
            imgContainerClass="realityLogo-container"
            imgClass="realityLogo"
            src="data:image/png;base64,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"
            alt="realtor house logo"
          />
          <ImgComponent
            imgContainerClass="jcbLogo-container"
            imgClass="jcbLogo"
            src="/Images/logo.png"
            alt="jcb logo"
          />
          <p className="createdBy">
            Created by <span>EM</span> 2022
          </p>
        </section>
      </div>
    </>
  );
}

export default FooterComponent;
