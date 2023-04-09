import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <Link to="/">
        <button className="back">⬅️Back</button>
      </Link>

      <img
        className="hatolik"
        src="./0ec0dbf1e9a008acb9955d3246970e15.gif"
        alt=""
      />
    </div>
  );
}

export default PageNotFound;
