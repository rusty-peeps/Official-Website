import React from "react";
import { Link } from "react-router-dom";

const EventTraining = () => {
  return (
    <section className="about-area pt-140 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="about-content mb-50">
              <div className="section-area mb-20">
                <span className="section-subtitle">Carrer Training</span>
                <h2 className="section-title mb-15">
                  Unlock Tailored Training Opportunities for Your Institution or
                  Organization!
                </h2>
                <p className="section-text">
                  Take the first step toward knowledge and innovation. Complete
                  the form today and let’s build the future together!
                </p>
              </div>
              <div className="about-content-list">
                <ul>
                  <li>
                    🎓 Flexible Course Offerings: From beginner-friendly crash
                    courses to intensive month-long training programs.
                  </li>
                  <li>
                    👥 Personalized Learning Plans: Designed to suit the skill
                    levels and goals of your participants.
                  </li>
                  <li>
                    💼 Expert-Led Sessions: Delivered by industry professionals
                    with hands-on experience.
                  </li>
                </ul>
              </div>
              <div className="about-content-button">
                <Link
                  to="/carrertraining"
                  className="theme-btn about-btn theme-btn-medium">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-img mb-50">
              <img src="assets/img/about/4/1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTraining;
