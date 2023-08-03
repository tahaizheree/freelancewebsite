import React, { Fragment } from 'react'
import './introsearch.css'
const IntroSearch = () => {
  return (
   <Fragment>
    <section className="frontbody">
    <div className="text">
        <h1>
            Find the perfect<br></br> professional for you
        </h1>
        <h3>Get free quotes within minutes</h3>
    </div>
            <div className="boxes">
                <input type="text" placeholder='What services are you looking for? ' />
                <div className="locationicon"><i class="fa-solid fa-location-dot"></i></div>
                <input type="text" className='Postcode' placeholder='Postcode' />
                <button className="search">Search</button>
            </div>
            <div className="downtext">
                <p>Popular: House Cleaning, Web Design, Personal Trainers</p>
            </div>
            </section>
    </Fragment>
  )
}

export default IntroSearch