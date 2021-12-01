import React from "react";
import "./Header.css";
import icon1 from "../Images/inbox.png";
function Header() {
  return (
    <div className="header">
      <div className="header_text">
        <p className="cloin">Cloin</p>
        <div className="main_words">
          <p>WE CRAFT THINGS</p>
          <h1>We Do Professional Things to Grow your Business</h1>
          <p>
            We care to deliver and craft adaptive services and solutions to our
            customers to achieve and satisfy their need . We always take
            attenntion to every details within work
          </p>
          <div className="buttons">
            <button>Lets Start</button>
            <p>We Hope to Listen From You soon</p>
          </div>
        </div>
      </div>
      <div className="forms">
        <img src={icon1} alt="" />
        <p className="form_head">Get Started Today</p>
        <p className="head2_form">
          Everything you need to grow your business Order our services today !
        </p>
        <div className="form_input">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
