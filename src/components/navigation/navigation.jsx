import React, { Fragment, useState } from 'react';
import './navigation.css';

const Navigation = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  return (
    <Fragment>
      <nav>
        <div className="left">
          <div className="logo">
            <img
              src="https://alliancetechltd.com/wp-content/uploads/2022/04/Alliance-Tech-Logo-03-768x583.png"
              alt=""
              className="src"
            />
          </div>
          <div className="dropdown">
            <div
              className="beforedropdown"
              onClick={() => {
                toggleDropdown();
              }}
            >
              <p>Explore</p>
              <i className="fa-solid fa-sort-down"></i>
            </div>
            <div
              className="dropdownsection"
              style={{
                opacity: isDropdownVisible ? '100%' : '0%',
              }}
            >
              <div className="title">
                <p>Section</p>
                <p>See all</p>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-briefcase"></i>
                  <a href="#">Business</a>
                  <i className="fa-solid fa-angle-right" id="angle_right"></i>
                </li>
                <li>
                  <i className="fa-solid fa-briefcase"></i>
                  <a href="#">Business</a>
                  <i className="fa-solid fa-angle-right" id="angle_right"></i>
                </li>

              </ul>
              <div className="title">
                <p>Popular Services</p>
                <p>See all</p>
              </div>
              <ul>
                <li>
                  <a href="#">Dog & Pet Grooming</a>
                </li>
                <li>
                  <a href="#">Dog & Pet Grooming</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <p>Login</p>
          <button className="loginasprofessional">
            <i className="fa-solid fa-user-tie"></i>
            Join as a Professional
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
