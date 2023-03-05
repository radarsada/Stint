import React from "react";
import Wrapper from "../assets/Wrappers/ErrorPage";
import error from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={error} alt="error page img"></img>
        <h2>Ohh!! Page Not Found</h2>
        <h3>We can't have the page that u looking for</h3>
        <Link to="/">
          <h2>Back to Dashboard</h2>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
