import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100010088502344">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="imashakurppu25@gmail.com">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/I_m_o_xxi/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/imasha-kuruppu-78a755226/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/ImashaKuruppu25">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text"> Kuruppu </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knak of building applications with frontend and backend
                operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me
              {""}
            </button>
            <a href="ImashaKuruppu-cv.pdf" download="Imasha Kuruppu.pdf">
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
export default Profile;
