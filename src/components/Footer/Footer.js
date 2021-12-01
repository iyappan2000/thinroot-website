import React from "react";
import "./Footer.css";
import brand1 from "../Images/branding.png";
import brand2 from "../Images/branding1.png";
import brand3 from "../Images/branding2.png";
import brand4 from "../Images/branding3.png";
import brand5 from "../Images/branding4.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import whatsapp from "../Images/whatsapp.png";
function Footer() {
  return (
    <div className="footer">
      <div className="sponsers">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
      </div>
      <div className="secondpara">
        <div className="footer_head">
          <p className="footer_head1">
            We Are Waiting <br />
            <span className="highlight"> Let's Get Started Now</span>
          </p>
          <p className="footer_head2">
            We care to deliver adaptive services and solution <br /> customer to
            achieve and satsfy their needs.
          </p>
        </div>
        <div className="footer_buttons">
          <button>Let's Start</button>
          <p>
            We Hope to Listen <br /> From you Soon
          </p>
        </div>
      </div>
      <div className="thirdpara">
        <p>Copyright 2020 Cloin. All rights Reserved.</p>
        <div className="social_icons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
