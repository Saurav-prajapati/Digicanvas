import React from "react";
import Link from "next/link";

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg" id="services">
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>Best Features</h6>
          <h3>Services.</h3>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-gleam"></span>
              <h6>Website Design & Development</h6>
              <p>
                Tailored, seamless, captivating digital experiences across all
                devices.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>Graphic Design & Branding</h6>
              <p>
                Striking visuals tailored to resonate with your audience and
                reflect your brand's identity.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>Digital Marketing Strategy</h6>
              <p>
                Data-driven campaigns maximizing online presence and engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="smore custom-font">
          <Link href="#">Discover More</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Services3;
