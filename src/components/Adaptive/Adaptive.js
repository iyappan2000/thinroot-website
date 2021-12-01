import React from "react";
import icon1 from "../Images/office-chair.png";
import icon2 from "../Images/table-lamp.png";
import icon3 from "../Images/document.png";
import icon4 from "../Images/inbox.png";
import "./Adaptive.css";
function Adaptive() {
  return (
    <div className="adaptive">
      <div className="adaptive_head">
        <p>
          We Always Take Attention to every details Within Work ,<br /> We care
          to Deliver and Craft
          <span className="highlight"> Adaptive Services</span>
          <br /> and Solutions to Customers to Achieve and
          <span className="highlight"> Satisfy Their Needs</span>
        </p>
      </div>
      <hr className="hr" />
      <div className="adaptive_lists">
        <div className="icon1">
          <span className="icons">
            <img src={icon1} alt="icon1" />
          </span>
          <h4>Technological Innovation</h4>
          <p>
            Pranen neuwbn, ohioefh, egastea ahejia, iy0fioh ihf9h, magna eu arat
          </p>
        </div>
        <div className="icon1">
          <span className="icons">
            <img src={icon2} alt="icon1" />
          </span>

          <h4>Creativity Designs</h4>
          <p>
            Pranen neuwbn, ohioefh, egastea ahejia, iy0fioh ihf9h, magna eu arat
          </p>
        </div>
        <div className="icon1">
          <span className="icons">
            <img src={icon3} alt="icon1" />
          </span>

          <h4>Custom Support</h4>
          <p>
            Pranen neuwbn, ohioefh, egastea ahejia, iy0fioh ihf9h, magna eu arat
          </p>
        </div>
        <div className="icon1">
          <span className="icons">
            <img src={icon4} alt="icon4" />
          </span>

          <h4>Project Management</h4>
          <p>
            Pranen neuwbn, ohioefh, egastea ahejia, iy0fioh ihf9h, magna eu arat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Adaptive;
