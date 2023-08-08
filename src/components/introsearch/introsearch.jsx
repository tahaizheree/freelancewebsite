import React, { Fragment, useEffect, useState } from "react";
import "./introsearch.css";

const IntroSearch = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fragment>
      <div
        className={`frontbody ${isMounted ? "slide-in" : ""}`}
      >
        <div className="text">
          <h1>
            Find the perfect<br></br> professional for you
          </h1>
          <h3>Get free quotes within minutes</h3>
        </div>
        <div className="boxes">
          <input
            type="text"
            className="servicesinput"
            placeholder="What services are you looking for? "
          />
         
          <button className="search" type="submit">Search</button>
        </div>
        <div className="downtext">
          <p>Popular: Web Development, App Development, Consultation</p>
        </div>
      </div>

    </Fragment>
  );
};

export default IntroSearch;
