import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

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
              {props.fromDate + "-" + props.toDate}
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

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    {Skill: "JavaScript", ratingPercentage:70 },
    {Skill: "React JS", ratingPercentage:75 },
    {Skill: "HTML & CSS ", ratingPercentage:80 },
    {Skill: "Microsoft SQL", ratingPercentage:70 },
    {Skill: "Mongo DB", ratingPercentage:60 },
    {Skill: "MVC Architecture", ratingPercentage:80 },
    {Skill: "Azure Cloud Environment Management", ratingPercentage:87 },
    {Skill: "Dev Ops", ratingPercentage:90 },
    {Skill: "C#", ratingPercentage:72 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "(Personal Portfolio Website) A digital curriculum vitae to showcase skill, while providing the relevant information regarding my career - Technologies Used: React JS, Bootstrap",
      subHeading: "Technologies Used: React JS",
    },
    {
      title: "Young Harvest Christian School",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A website for a primary school",
      subHeading:
        "Technologies Used:  HTML, CSS3 ,Bootstrap,Java Script",
    },
    {
      title: "Route66 ",
      duration: { fromDate: "2019", toDate: "2019" },
      description:
        "A website for company that sells containers. This site is used as a way for clients to reach out to the company",
      subHeading:
        "Technologies Used: React Js, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
     <ResumeHeading
    subHeading={"Belgium Campus ITVersity:"+" "+"BACHELOR of COMPUTING (Software Engineering)"}
    />
    <ResumeHeading
    subHeading={"Hoërskool Transvalia: Matric"}
    />
    <ResumeHeading
    subHeading={"The Business School of South Africa:"+ " " +"Certificate in Business Administration & Management"}
    />
    <ResumeHeading
    subHeading={"Microsoft:"+" "+"Azure Fundamentals (AZ-900) "}
    />
    <ResumeHeading
    subHeading={"Microsoft:"+" "+"Azure Administrator Associate (AZ-104)"}
    />
    <ResumeHeading
    subHeading={"Microsoft:"+" "+"Azure Developer Associate (AZ-204)"}
    />
    <ResumeHeading
    subHeading={"Microsoft:"+" "+"Azure Security Engineer Associate (AZ-500)"}
    />
    <ResumeHeading
    subHeading={"Microsoft:"+" "+"Azure DevOps Expert (AZ-400)"}
    />
    <ResumeHeading
    subHeading={"Microsoft:"+" "+"Azure Solutions Architect (AZ-305)"}
    />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"First Digital"}
          subHeading={"intermediate Developer"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
             Currently working as a K2 Developer with the following responsibilities:
             K2 Development, Management of K2 Environments (Development, 
             Quality Assurance, Production), Debugging processes in an Error State, Deployment of K2 Applications from 
             Dev to QA and to Production. Ensuring that important product documentation is up to date.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.Skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Self-Development"
        description="I believe growth is a necessary part on the journey to reach full potential. This includes reading self-development books, learning a new skill and being active at the gym."
      />
      <ResumeHeading
        heading="Traveling"
        description="Exploring comes like second nature to me. I love seeing new places and making new memories."
      />
      <ResumeHeading
        heading="Suits"
        description="First Impressions play an important role in my career. I go out of my way to look professional and dress for the occasion"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
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
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="No Icons"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (    
    <div 
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
      <br></br>
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Resume;
