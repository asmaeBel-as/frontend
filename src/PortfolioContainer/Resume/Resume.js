import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "/" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },

    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "PHP", ratingPercentage: 80 },
    // { skill: "Python", ratingPercentage: 89 },
  
    { skill: "SQL", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 60 },
    { skill: "Flutter", ratingPercentage: 65 },
    { skill: "HTML", ratingPercentage: 80 },
      { skill: "CSS", ratingPercentage: 80 },
    { skill: "Wordpress", ratingPercentage: 70 },
  ];

  //   const projectDetails = [
  // {
  // title: "Personal Portfolio Website",
  // duration: { fromDate: "2022", toDate: "present" },
  // description:
  // "A Personal Portfolio website to showcase all my details and projects at one place.",
  // subHeading: "Technologies Used: React JS, Bootsrap",
  // },
  // {
  // title: "Mobile Application ",
  // duration: { fromDate: "2020", toDate: "2021" },
  // description:
  // "Application that detects and classifies plants by their similar characteristics and disease",
  // subHeading:
  // "Technologies Used: Python, Kaggle for DataSet,Tensorflow ,Keras, OpenCv",
  // },
  // {
  // title: "Ecommerce Website ",
  // duration: { fromDate: "2020", toDate: "2021" },
  // description:
  // "Online ecommerce website for showcasing and selling products online with payment system integration",
  // subHeading:
  // "Technologies Used: SQL, Javascript, PHP, HTML, Bootstrap.",
  // },
  // ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Legal, Economic and Social Sciences, Morocco"}
        subHeading={
          "Bachelor degree in computer science methods applied to business management"
        }
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Higher School of Technology, Morocco"}
        subHeading={"diploma in computer engineering"}
        fromDate={"2018"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"High School "}
        subHeading={"Hassan 2 in Morocco"}
        fromDate={"2016"}
        toDate={"2018"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"OCP Morocco"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2018-05"}
          toDate={"2018-07"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Developed a website for employee complaints management
          </span>
        </div>
        <ResumeHeading
          heading={"Province Morocco"}
          subHeading={"Computer Networking intern"}
          fromDate={"2021-04"}
          toDate={"2021-06"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Security of a Network domain Using Kaspersky
          </span>
          <br />
          <ResumeHeading
            heading={"Al Omrane Group"}
            subHeading={"Android Developer"}
            fromDate={"2022-03"}
            toDate={"2022-06"}
          />

          <span className="resume-description-text">
            - Android application fortracking attendence as well as managing the company's employees  
          </span>
          <br />
        </div>
      </div>
    </div>,
  
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="interest">
      <ResumeHeading
        heading="Reading"
        description="Apart from being a code writer, i enjoy reading. as it is a form of entertainement, i also feel it's the best for improving cencentration abilities."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my self a lot while competing in games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px )" },
    };

    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullet = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops ,, no internet"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    /*hna howa 3iwad resumeDetails li west map dayr hadi resumeDetail o 7ta li mn wra map*/
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullet()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
