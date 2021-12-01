import React from "react";
import "./Audience.css";
import icon1 from "../Images/scissors.png";
import icon2 from "../Images/tv.png";
import icon3 from "../Images/social-media.png";
import icon4 from "../Images/video.png";
import video from "../Images/sample_VDO.mp4";
function Audience() {
  return (
    <div className="audience">
      <div className="audience_words">
        <p className="adaptive_head">
          Learn How to <span className="highlight"> Grow Your Audience </span>
          and Build and Online Business
        </p>
        <p className="adaptive_head2">
          This Should be used to tell a story and let your users know a little
          more about your product or service . How can you benefit them
        </p>
        <div className="audience_icons">
          <div className="icon1">
            <img src={icon1} alt="audience_icons" />
            <div className="icons_words">
              <h4>Ultimate Tools</h4>
              <p>Praesennt depauebs , neqye id ciursos facirbus neque</p>
            </div>
          </div>
          <div className="icon1">
            <img src={icon2} alt="audience_icons" />
            <div className="icons_words">
              <h4>Ultimate Tools</h4>
              <p>Praesennt depauebs , neqye id ciursos facirbus neque</p>
            </div>
          </div>
          <div className="icon1">
            <img src={icon3} alt="audience_icons" />
            <div className="icons_words">
              <h4>Ultimate Tools</h4>
              <p>Praesennt depauebs , neqye id ciursos facirbus neque</p>
            </div>
          </div>
          <div className="icon1">
            <img src={icon4} alt="audience_icons" />
            <div className="icons_words">
              <h4>Ultimate Tools</h4>
              <p>Praesennt depauebs , neqye id ciursos facirbus neque</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button>Get Quote</button>
        </div>
      </div>
      <div className="audience_vdo">
        <video src={video} autoPlay="false" controls="controls" />
      </div>
    </div>
  );
}

export default Audience;
