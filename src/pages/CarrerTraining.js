import React from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/footer";

function CarrerTraining() {
  return (
    <div>
      {" "}
      <Navbar />
      <section class="h6_admission-area pt-115 pb-120 fix">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="section-area-6 mb-35">
                <h2 class="section-title mb-15">
                  Unlock Tailored Training Opportunities for Your Institution or
                  Organization!
                </h2>
                <p>
                  Take the first step toward knowledge and innovation. Complete
                  the form today and let’s build the future together!
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="section-area-6 mb-55">
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
                      💼 Expert-Led Sessions: Delivered by industry
                      professionals with hands-on experience.
                    </li>
                  </ul>
                </div>
                <p class="section-text">
                  Empower your team or students with skills in Rust, blockchain,
                  or backend development! Fill out our quick inquiry form to
                  learn more.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="h6_admission-img">
                <img src="assets/img/admission/6/bg.jpg" alt="" />
                <div class="h6_admission-form">
                  <h5 class="h6_admission-form-title">Admissions</h5>
                  <form action="#">
                    <div class="row g-15">
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input
                            type="text"
                            placeholder="Name of institution/organization"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input
                            type="text"
                            placeholder="Contact person's name"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="text" placeholder="Designation/role" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="text" placeholder="Phone number" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="email" placeholder="Email address" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <select>
                            <option value="">Select a course</option>
                            <option value="course1">Course 1</option>
                            <option value="course2">Course 2</option>
                            <option value="course3">Course 3</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <label htmlFor="">Preferred start date</label>
                          <input type="date" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <br />
                          <input
                            type="text"
                            placeholder="Expected number of participants"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="h6_admission-form-input">
                          <textarea
                            name="message"
                            placeholder="Do you need any additional support?"></textarea>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="h6_admission-form-btn">
                          <button
                            type="submit"
                            class="theme-btn h6_admission-btn theme-btn-full theme-btn-6">
                            Book<i class="fa-light fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="apply-text-wrap mt-30">
          <div class="apply-text-ticker" id="apply-text-ticker">
            <h1 class="h6_admission-bottom-text">ENQUIRE !</h1>
            {/* enquire ! */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CarrerTraining;
