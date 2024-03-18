import React from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Error404() {
  return (
    <div className="page-not-found">
      <div className="section-bg-opacity "></div>
      <div className="error-content">
        <h1>
          4 <span>0</span> 4
        </h1>
        <h3>Page Not Found</h3>
        <span>Ooops! The page you are looking for, couldn't be found.</span>
        <Link to="/" className="main-btn" type="submit">
          <FaHouseChimney />
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error404;
