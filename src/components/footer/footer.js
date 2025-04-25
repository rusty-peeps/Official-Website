import React from "react";
import { Link } from "react-router-dom";
import { FooterWidget } from "../../helper/index";
import links from "../../data/footer.json";

const Footer = () => {
  return (
    <footer className="footer-area h2_footer-area">
      <div className="footer-top pt-240 pb-55">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-xl-3 col-lg-7 col-md-7 col-sm-12">
              <div className="footer-widget ">
                <div className="footer-logo ">
                  <Link to="/">
                    <img src="/assets/img/logo/logo-white.png" alt="" />
                  </Link>
                </div>
                <p className="footer-widget-text ">
                  Through a combination of lectures, readings, discussions,
                  students will gain solid foundation in educational.
                </p>
                <div className="footer-social hello2">
                  <ul>
                    <li>
                      <Link to="#">
                        <i
                          style={{ color: "#fff" }}
                          className="fa-brands fa-twitter"
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          style={{ color: "#fff" }}
                          className="fa-brands fa-facebook-f"
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          style={{ color: "#fff" }}
                          className="fa-brands fa-linkedin-in"
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          style={{ color: "#fff" }}
                          className="fa-brands fa-youtube"
                        ></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-xl-center">
              <div className="footer-widget mb-40">
                <div className="footer-widget-list">
                  <FooterWidget
                    title="Useful Links"
                    links={links.usefulLinks}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-xl-center order-md-4 order-xl-3">
              <div className="footer-widget mb-40">
                <div className="footer-widget-list">
                  <FooterWidget title="Courses" links={links.courses} />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-7 col-md-7 col-sm-12 order-md-3 order-xl-4">
              <div className="footer-widget ml-80 mb-40">
                <div className="contact-info ml-5 mb-4">
                  <h3 className="contact-title mb-4" style={{ color: "#fff" }}>
                    Get In Touch
                  </h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    <i
                      className="fa-thin fa-location-dot"
                      style={{ color: "#fff" }}
                    ></i>{" "}
                    Bhubaneswar, Odisha, India
                  </p>
                  <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    <i
                      className="fa-thin fa-mobile-notch"
                      style={{ color: "#fff" }}
                    ></i>{" "}
                    <a href="tel:+916370151545"> +91 6370 151 545</a>
                  </p>
                  <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    <i
                      className="fa-thin fa-envelope"
                      style={{ color: "#fff" }}
                    ></i>{" "}
                    <a href="mailto:info@rustypeeps.school">
                      {" "}
                      info@rustypeeps.school
                    </a>
                  </p>
                </div>
                <div className="footer-social hello">
                  <ul>
                    <li>
                      <Link to="#">
                        <i
                          style={{ color: "#fff" }}
                          className="fa-brands fa-twitter"
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          style={{ color: "#fff" }}
                          className="fa-brands fa-facebook-f"
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          style={{ color: "#fff" }}
                          className="fa-brands fa-linkedin-in"
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          style={{ color: "#fff" }}
                          className="fa-brands fa-youtube"
                        ></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-text">
                <p>Copyright © 2023 All Rights Reserved by Rustypeeps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
