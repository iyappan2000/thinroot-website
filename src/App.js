import React from "react";
import { Fragment } from "react";
import "./App.css";
import icon1 from "./components/Images/awareness.png";
import icon2 from "./components/Images/finance.png";
import icon3 from "./components/Images/assess.png";
import icon4 from "./components/Images/response.png";
import Adaptive from "./components/Adaptive/Adaptive";
import Audience from "./components/Audience/Audience";
import Header from "./components/Header/Header";
import Plans from "./components/Plans/Plans";
import Customer from "./components/Testimonials/Customer";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Fragment className="app">
      <Header />
      <Adaptive />
      <Audience />
      <div className="counts_page">
        <div className="image">
          <div className="icon1">
            <img src={icon1} alt="" />
            <h1>1465</h1>
            <p>Projects Completed</p>
          </div>
          <div className="icon1">
            <img src={icon2} alt="" />
            <h1>1465</h1>
            <p>Projects Completed</p>
          </div>
          <div className="icon1">
            <img src={icon3} alt="" />
            <h1>1465</h1>
            <p>Projects Completed</p>
          </div>
          <div className="icon1">
            <img src={icon4} alt="" />
            <h1>1465</h1>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
      <Plans />
      <Customer />
      <Footer />
    </Fragment>
  );
}

export default App;
