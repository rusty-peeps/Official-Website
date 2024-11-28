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
                  Explore the possibilities of a Rustypeeps education
                </h2>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="section-area-6 mb-55">
                <p class="section-text">
                  For more than 250 years, Columbia has been a leader in higher
                  education in the nation and around the world. At the core of
                  our wide range of academic inquiry is the to attract and
                  engage the best minds in pursuit of greater human new
                  discoveries.
                </p>
                <span class="section-area-6-admin">Jon Anderson</span>
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
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="text" placeholder="Phone" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="text" placeholder="Street Address" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="text" placeholder="City" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="text" placeholder="State" />
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-6">
                        <div class="h6_admission-form-input">
                          <input type="text" placeholder="Zip Code" />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="h6_admission-form-input">
                          <input type="date" />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="h6_admission-form-input">
                          <textarea
                            name="message"
                            placeholder="Academic Qualifications"></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="h6_admission-form-btn">
                          <button
                            type="submit"
                            class="theme-btn h6_admission-btn theme-btn-full theme-btn-6">
                            Contact Us<i class="fa-light fa-arrow-right"></i>
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
            <h1 class="h6_admission-bottom-text">Apply for Admission</h1>
          </div>
        </div>
      </section>
      {/* <section class="h6_tuition-area pt-120 pb-70">
        <div class="container">
          <div class="row g-0">
            <div class="col-xl-5">
              <div class="h6_tuition-content mb-45">
                <img src="assets/img/bg/tuition-logo.png" alt="" />
                <h2>Tuition & Fees</h2>
                <p>
                  This new plan is designed to reduce the average cost of a Make{" "}
                  <br /> School Education while preserving the core protections
                  of ISAs <br /> – if you don’t have a job after Make School,
                  you should not <br /> have to pay until you are employed.
                </p>
                <a href="#">
                  University Overview<i class="fa-light fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-7">
              <div class="h6_tuition-wrap mb-50">
                <div class="h6_tuition-item">
                  <span class="h6_tuition-item-date">2020-2022</span>
                  <h4 class="h6_tuition-item-title">Tuition Costs</h4>
                  <ul class="h6_tuition-item-list">
                    <li>
                      Fall 2020<span>$12,000</span>
                    </li>
                    <li>
                      Spring 2021<span>$14,000</span>
                    </li>
                    <li>
                      Summer 2020<span>$10,000</span>
                    </li>
                    <li>
                      Fall 2022<span>$15,000</span>
                    </li>
                    <li>
                      Spring 2021<span>$12,000</span>
                    </li>
                  </ul>
                  <p class="h6_tuition-item-total">
                    <span>Total :</span> <span>$63,000</span>
                  </p>
                </div>
                <div class="h6_tuition-item h6_tuition-light">
                  <span class="h6_tuition-item-date">2020-2022</span>
                  <h4 class="h6_tuition-item-title">Tuition Costs</h4>
                  <ul class="h6_tuition-item-list">
                    <li>
                      Fall 2020<span>$12,000</span>
                    </li>
                    <li>
                      Spring 2021<span>$14,000</span>
                    </li>
                    <li>
                      Summer 2020<span>$10,000</span>
                    </li>
                    <li>
                      Fall 2022<span>$15,000</span>
                    </li>
                    <li>
                      Spring 2021<span>$12,000</span>
                    </li>
                  </ul>
                  <p class="h6_tuition-item-total">
                    <span>Total :</span> <span>$63,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default CarrerTraining;
