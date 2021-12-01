import React from "react";
import icon2 from "../Images/red-flag.png";
import icon3 from "../Images/rocket.png";
import icon1 from "../Images/user.png";
import checkbox from "../Images/checkbox.png";
import "./Plans.css";
function Plans() {
  return (
    <div className="plans">
      <div className="plan_head">
        <p className="plan_1head">Get Your Best Preferred and Suitable</p>{" "}
        <span className="highlight"> Pricing Plans and Options </span>
        <p className="plan_2ndhead">
          This Should be Used to tell a Story and let your users know a little
        </p>
        <p className="plan_2ndhead1">
          more about your product or service . How can you benefit them ?
        </p>
      </div>

      <div className="plan_cards">
        <div className="card1">
          <img src={icon1} alt="" />
          <p>Started</p>
          <h1>$249</h1>
          <p className="permonth">Per Month</p>
          <button>Get Started Now</button>
          <div className="card_list">
            <p>
              marketing Strategy <img src={checkbox} alt="" />
            </p>
            <p>
              Competetive analsis <img src={checkbox} alt="" />
            </p>
            <p>
              Social media audit
              <img src={checkbox} alt="" />
            </p>
            <p>
              Monthly Management
              <img src={checkbox} alt="" />
            </p>
            <p>
              Unlimited data transfer
              <img src={checkbox} alt="" />{" "}
            </p>
          </div>
        </div>
        <div className="card1">
          <img src={icon2} alt="" />
          <p>Started</p>
          <h1>$249</h1>
          <p className="permonth">Per Month</p>
          <button>Get Started Now</button>
          <div className="card_list">
            <p>
              marketing Strategy <img src={checkbox} alt="" />
            </p>
            <p>
              Competetive analsis <img src={checkbox} alt="" />
            </p>
            <p>
              Social media audit
              <img src={checkbox} alt="" />
            </p>
            <p>
              Monthly Management
              <img src={checkbox} alt="" />
            </p>
            <p>
              Unlimited data transfer
              <img src={checkbox} alt="" />{" "}
            </p>
          </div>
        </div>
        <div className="card1">
          <img src={icon3} alt="" />
          <p>Started</p>
          <h1>$249</h1>
          <p className="permonth">Per Month</p>
          <button>Get Started Now</button>
          <div className="card_list">
            <p>
              marketing Strategy <img src={checkbox} alt="" />
            </p>
            <p>
              Competetive analsis <img src={checkbox} alt="" />
            </p>
            <p>
              Social media audit
              <img src={checkbox} alt="" />
            </p>
            <p>
              Monthly Management
              <img src={checkbox} alt="" />
            </p>
            <p>
              Unlimited data transfer
              <img src={checkbox} alt="" />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
