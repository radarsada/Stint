import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/Wrappers/Testing";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo"></img>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Work helps you gain a sense of pride and self-satisfaction by
            reaffirming that you can support yourself. With work, you earn money
            to cover bills and pay for activities in your leisure time. It's
            becoming more common to see people with disabilities in a wide range
            of jobs throughout the community
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
