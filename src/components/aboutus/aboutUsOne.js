import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsOne = () => {
  return (
    <section className="h2_about-area pt-120 pb-70">
      <img
        src="assets/img/about/2/shape-5.png"
        alt=""
        className="h2_about-top-shape"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="h2_about-img mb-50">
              <div className="h2_about-inner-img">
                <img
                  src="assets/img/about/2/kb.png"
                  alt=""
                  className="h2_inner-img"
                />
                <img
                  src="assets/img/about/2/shape-4.png"
                  alt=""
                  className="h2_inner-img-shape"
                />
              </div>
              <div className="h2_about-inner-img2">
                <img src="assets/img/about/2/priest.png" alt="" />
                <div className="h2_about-img-button">
                  {/* <a href="https://www.youtube.com/watch?v=dMlASgogxo4" className="popup-video" />
                    <i className="fa-solid fa-play"></i>
                  </a> */}
                </div>
              </div>
              <div className="h2_about-rating d-none d-sm-block">
                <span>
                  <i className="fa-solid fa-star"></i>4.5
                </span>
                <h5>Congratulations</h5>
              </div>
              <div className="h2_about-img-shape d-none d-sm-block">
                <img
                  className="h2_about-shape-1"
                  src="assets/img/about/2/shape-1.png"
                  alt=""
                />
                <img
                  className="h2_about-shape-2"
                  src="assets/img/about/2/shape-2.png"
                  alt=""
                />
                <img
                  className="h2_about-shape-3"
                  src="assets/img/about/2/shape-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-10 mb-50">
            <div className="section-area-2 mb-35">
              <h2 className="section-title mb-20">
                Education Instructors Play Crucial Role in Shaping The Lives
                of Their{' '}
                <span>
                  Students <img src="assets/img/banner/2/line.png" alt="" />
                </span>
              </h2>
              <p className="section-text">
              Our instructors are passionate mentors with extensive experience in Rust programming and education. They are committed to providing hands-on learning and personalized support to help students master complex concepts with ease.
              By cultivating an engaging and practical learning environment, our educators ensure that every student builds a strong foundation and gains the confidence to tackle real-world challenges in Rust development.
              </p>
            </div>
            <div className="h2_about-button">
              <Link to="#" className="theme-btn theme-btn-medium">
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOne;
