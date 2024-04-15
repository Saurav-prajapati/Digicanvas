/* eslint-disable @next/next/no-img-element */
import React from "react";
import tooltipEffect from "../../common/tooltipEffect";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import Split from "../Split";

const TeamWithSkills = () => {
  React.useEffect(() => {
    tooltipEffect();
    teamSkillsProgress();
  }, []);
  return (
    <div className="team-crv section-padding">
      <div className="sec-head custom-font text-center">
        <h6 className="wow fadeIn" data-wow-delay=".5s">
          Team
        </h6>
        <Split>
          <h3 className="wow words chars splitting" data-splitting>
            Our Teams.
          </h3>
        </Split>
        <span className="tbg">Team</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>Our Staff</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit custom-font mb-15">
                Meet Our Dynamic Team
              </h3>
              <p>
                At Digicanvas, our strength lies in our people. We're a diverse
                team of passionate individuals, each bringing unique skills and
                perspectives to the table. Together, we're united by a common
                goal: to redefine the digital landscape and empower our clients
                to succeed.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h6 className="custom-font">Web & Software Development</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6 className="custom-font">Graphic Design</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="100%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    <div
                      className="img sizmd mb-30"
                      data-tooltip-tit="Varsha Pawar"
                      data-tooltip-sub="Human Resources"
                    >
                      <img src="/img/team/1.jpg" alt="" className="imago wow" />
                    </div>
                    <div
                      className="img sizxl"
                      data-tooltip-tit="Anup Sharma"
                      data-tooltip-sub="Graphic Designer"
                    >
                      <img src="/img/team/2.jpg" alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    <div
                      className="img sizxl mb-30"
                      data-tooltip-tit="Avantika"
                      data-tooltip-sub="Human Resources"
                    >
                      <img src="/img/team/1.jpg" alt="" className="imago wow" />
                    </div>
                    <div
                      className="img sizsm"
                      data-tooltip-tit="Nitin Patil"
                      data-tooltip-sub="Full Stack Developer"
                    >
                      <img src="/img/team/2.jpg" alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWithSkills;
