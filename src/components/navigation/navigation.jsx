import React, { Fragment } from 'react'
import './navigation.css'
const Navigation = () => {
  return (
    <Fragment>
        <nav>
            <div className="left">
                <div className="logo">
                    <img src="https://alliancetechltd.com/wp-content/uploads/2022/04/Alliance-Tech-Logo-03-768x583.png" alt="" className="src" />
                </div>
                <div className="dropdown">
                    <div className="beforedropdown">
                    <p>Explore</p>
                    <i class="fa-solid fa-sort-down"></i>
                    </div>
                    <div className="dropdownsection">

                    </div>

                </div>
            </div>
            <div className="right">
                <p>Login</p>
                <button className="loginasprofessional">
                <i class="fa-solid fa-user-tie"></i>
                  Join as a Professional
                </button>
            </div>
        </nav>
        </Fragment>
  )
}

export default Navigation