/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutUs2 = ({ skillsTheme }) => {
  const cpStyle = {
    path: {
      stroke: "#f78f30",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <h6>About Us</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  About Digicanvas
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                At Digicanvas, we are a dynamic startup on a mission to
                revolutionize the digital landscape. Our passion lies in
                crafting compelling digital experiences that leave a lasting
                impact.
              </p>
              <p className="mt-10 wow fadeInUp" data-wow-delay=".4s">
                Driven by innovation and creativity, we specialize in providing
                tailored solutions to meet the diverse needs of our clients.
                Whether you're a budding entrepreneur or an established
                enterprise, we're here to empower your digital journey.
              </p>
              <Split>
                <Link href="#">
                  <a
                    className="words chars splitting simple-btn custom-font mt-30 wow"
                    data-splitting
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="" />
              </div>
              <div className="skills-circle wow fadeInUp" data-wow-delay=".8">
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={90}
                      className="custom-font"
                      strokeWidth={2}
                      text={`${90}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>Project</span>
                    <h6>Consulting</h6>
                  </div>
                </div>
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={75}
                      strokeWidth={2}
                      className="custom-font"
                      text={`${75}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>App</span>
                    <h6>Development</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
