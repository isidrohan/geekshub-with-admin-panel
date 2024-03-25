import { useState } from "react";
import { useAuth } from "../store/auth";
import { Analytics } from "./Analytics";
import { Footer } from "./Footer";
import aboutImage from '/image/about.png'

export const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main className="about-page">
        <div className="container grid grid-two-col about">
          <div className="about-info">
            <p>
              Welcome{" "}
              {user ? `${user.username} to our website` : `to our website`}
            </p>
            <h1>why choose us ?</h1>
            <p>
              At Geeks Hub, we are dedicated to providing comprehensive web
              solutions tailored to meet your needs. Specializing in
              full-fledged website development, cutting-edge UI/UX design,
              mentorship programs, responsive web page creation, and captivating
              landing page design, we're committed to helping your business
              thrive in the digital landscape.
            </p>
            <p>
              With our expertise and passion for innovation, we aim to exceed
              your expectations, delivering exceptional results that elevate
              your online presence and drive success for your business. 
              <br /> <br />Discover
              the difference with Geeks Hub. Let's embark on a journey together
              to unlock the full potential of your online presence..
            </p>
            <div className="about-btn btn btn-group">
              <a href="/contacts">
                <button className="btn">connect now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn secondary-btn-about">
                  learn more
                </button>
              </a>
            </div>
          </div>
          <div className="about-img">
            <img src={aboutImage} alt="coding" width="400" height="300" />
          </div>
        </div>
      </main>
      <Analytics />
      <Footer />
    </>
  );
};
