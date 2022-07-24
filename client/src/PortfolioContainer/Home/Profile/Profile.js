import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/ronald.qobolo/">
                <i className="fa fa-facebook-square" />
              </a>
              
              <a href="https://www.instagram.com/ronald_qobolo/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/ronald-qobolo-5499911a4/">
              <i className="fa fa-linkedin-square"/>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ronald</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Goal Driven Developer 💪",
                    10000,
                    "Software Tester🔧",
                    10000,
                    "React Developer⚛️",
                    10000,
                    "Dev Ops Developer💻",
                    10000,
                    "Azure Security Assossicate🤖",
                    12000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Enthusiastic developer with a passion for exploring technology.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
             <a href="TR Qobolo Curriculum Vitae.pdf" download='TR Qobolo Curriculum Vitae.pdf'>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
