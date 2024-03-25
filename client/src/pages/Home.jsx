import React from 'react'
import { Analytics } from './Analytics'
import { Footer } from './Footer'
import work from '/image/work.png'
import laptop from '/image/laptop.png'
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (<>
    <main>
      <div className="container grid grid-two-col">
        <div className="home-info">
        <p>Hello everyone I am Siddharth</p>
              <h1>Welcome to Geeks Hub</h1>
              <p>
              Ready to propel your business forward with state-of-the-art IT solutions? Your search ends here! Geeks Hub is your trusted partner, specializing in delivering innovative IT services and solutions tailored to suit your specific needs.
              </p>
              <div className="btn btn-group">
                <NavLink to='/contacts' ><button className="btn">connect now</button></NavLink>

                  <NavLink to='/service' > <button className="btn-1-margin btn secondary-btn">learn more</button></NavLink>
                
              </div>
        </div>
        <div className="home-img img-first-page">
              <img src={work} alt="coding" width="400"
                height="400" />
        </div>
      </div>
    </main>

    {/* 2nd section  */}
    <Analytics/>


    {/* 3rd section  */}
    <div className='third-section'>
      <div className="container grid grid-two-col grid-one-col">
        <div className="home-img">
              <img src={laptop} alt="coding" width="350"
                height="350" />
        </div>

        <div className="home-info">
          <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
            Take the first step towards enhancing your IT infrastructure's efficiency and security. Contact us today for a complimentary consultation, and let's explore how Geeks Hub can empower your business to thrive in the digital era.
            </p>
              <div className="btn btn-group">
                <NavLink to="/contacts">  <button className="btn">connect now</button></NavLink>
                <NavLink to="/service"><button className=" btn-2-margin btn secondary-btn">learn more</button></NavLink>
          
              </div>
        </div>
        
      </div>
    </div>
    <Footer/>
  
  </>
  )
}
