import React from "react";
const AboutUsTwo = () => {
  return (
    <section className="about-area pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="about-content mb-50">
              <div className="section-area mb-20">
                <span className="section-subtitle">Start learning Free</span>
                <h2 className="section-title mb-15">
                  Online Course can be Tailored to Need of learners
                </h2>
                <p className="section-text">
                  Through a combination of lectures, readings, discussions,
                  students will gain a solid foundation in Rust language.
                </p>
              </div>
              <div className="about-content-list">
                <ul>
                  {/* <li>International course collection in 14 languages</li> */}
                  <li>Top certifications in rust and blockcain</li>
                  <li>
                    Access to 5+ top Rustypeeps courses, anytime, anywhere
                  </li>
                </ul>
              </div>
              <div className="about-content-button">
                {/* <Link
                  to="about.html"
                  className="theme-btn about-btn theme-btn-medium"
                >
                  More Details
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-img mb-50">
              <img src="assets/img/about/1/1.png" alt="" />
              <div className="about-img-meta">
                <span>
                  <i className="fa-solid fa-star"></i>4.5
                </span>
                <h5>Congratulations</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
