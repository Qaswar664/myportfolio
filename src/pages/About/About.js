import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={require("./dp.jpeg")} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am graduate in Information Technology from BZU (Multan).
                Having knowledge of Database, C/C++, JavaScript, front-end
                technologies, Mobile Applications, Web Applications, React Js,
                Virtual System(VM ware) and Networking (Cisco packet Tracker).
                Currently working as a Mern Developer. Experienced in diﬀerent
                aspect of software development lifecycle and end-to-end web
                application development. Became a logical thinking and good code
                maker, i’m conﬁdent that i’ll prove my self to be a good
                software engineer in any organzation.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
