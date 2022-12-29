import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../Utilities/ScrollService";
import './Profile.css' 

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
                  <div className="colz">
                      <div className='colz-icon'>

            <a href="https://web.facebook.com/demoisell.asmae/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/bellissad_asmae/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCQW_cRp29PHBfz_7kld5FNA">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/Asmae51483526">
              <i className="fa fa-twitter"></i>
            </a>
                      </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Asmae Belas</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Cross Platform Dev 🌐",
                    1000,
                    "Software Dev",
                    1000,
                    "Android Developer 📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            //implementing the call to action button 
onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >Hire me {""}</button>
                      <a href="AsmaeBelissadCv.pdf" download='Asmae BelasCV.pdf'>
                          <button className="btn highlighted-btn">Get resume</button>
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
