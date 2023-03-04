import React from "react";
import Logo from "../assets/images/logo.png";
import main from "../assets/images/main.png";
import Wrapper from "../assets/Wrappers/Testing";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={Logo} alt="job hunt" className="img main-img" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Work helps you gain a sense of pride and self-satisfaction by
            reaffirming that you can support yourself. With work, you earn money
            to cover bills and pay for activities in your leisure time. It's
            becoming more common to see people with disabilities in a wide range
            of jobs throughout the community
          </p>

          <button className="btn btn-hero">Login/Register</button>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Landing;
