import React, { Fragment } from 'react'
import './discover.css'

const Discover = () => {
  return (
    <Fragment>
        <div className="discover">
        <div className="discovertitle">
            <h1>Discover</h1>
        </div>
        <div className="iconsunderdiscover">
            <div className="iconandtext">
            <i class="fa-solid fa-house"></i>
            <p>Home & Garden</p>
            </div>
            <div className="iconandtext">
            <i class="fa-solid fa-heart"></i>
            <p>Home & Garden</p>
            </div>
            <div className="iconandtext">
            <i class="fa-solid fa-calendar-days"></i>
            <p>Home & Garden</p>
            </div>
            <div className="iconandtext">
            <i class="fa-solid fa-building"></i>
            <p>Home & Garden</p>
            </div>
            <div className="iconandtext">
            <i class="fa-solid fa-book"></i>
            <p>Home & Garden</p></div>
            <div className="iconandtext">
            <i class="fa-solid fa-list"></i>
            <p>Other services</p>
            </div>
        </div>
        </div>
        </Fragment>
  )
}

export default Discover