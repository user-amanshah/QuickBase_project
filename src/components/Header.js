import React from "react";
import { Link } from "react-router-dom";
import Googleauth from "./GoogleAuth";
const Header = () => {
  return (
    <div className="ui two item menu">
      <div className="item">
        <Link to="/">
          <button className="ui primary button">Home</button>
        </Link>
      </div>
      <div className="item">
        <Link to="/form">
          <button className="ui basic green button">
            <i className="fork icon"></i> Build
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
