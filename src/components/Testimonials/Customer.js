import React from "react";
import "./Customer.css";
import icon1 from "../Images/man.png";
import icon2 from "../Images/man1.png";
import icon3 from "../Images/woman2.png";
import star from "../Images/star.png";
function Customer() {
  return (
    <div className="customer">
      <div className="customer_head">
        <p>
          What Are Our
          <br />
          <span className="highlight"> Customers Testimonials</span>
        </p>
      </div>
      <div className="head2">
        <p>
          This Should be Used to tell a story and let your users know a
          <br />
          little more about your product tell a story used by user
        </p>
      </div>
      <div className="customer_card">
        <div className="card1">
          <p>
            Quisque voultap coejiid veliy Class
            <br /> aptendt textah ihefiohf <br /> ihfohf oej ih
          </p>

          <div className="customer_names">
            <img src={icon1} alt="" />
            <h3>Michael Smith</h3>
            <span>Backend Developer</span>
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
        <div className="card1">
          <p>
            Quisque voultap coejiid veliy Class <br /> aptendt textah ihefiohf
            <br /> ihfohf oej ih
          </p>

          <div className="customer_names">
            <img src={icon2} alt="" />
            <h3>Michael Smith</h3>
            <span>Backend Developer</span>
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
        <div className="card1">
          <p>
            Quisque voultap coejiid veliy Class <br /> aptendt textah ihefiohf
            <br /> ihfohf oej ih
          </p>

          <div className="customer_names">
            <img src={icon3} alt="" />
            <h3>Michael Smith</h3>
            <span>Backend Developer</span>
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
