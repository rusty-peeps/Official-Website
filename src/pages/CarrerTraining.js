import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/footer";
import React, { useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
function CarrerTraining() {
  const [formData, setFormData] = useState({
    institution_name: "",
    contact_person: "",
    destination_role: "",
    phone_number: "",
    email_address: "",
    selected_course: "",
    start_date: "",
    number_of_participants: "",
    additional_support: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(`${BASE_URL}/admissions`, formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
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
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="row g-15">
                      <div className="col-xl-6 col-sm-6">
                        <div className="h6_admission-form-input">
                          <input
                            type="text"
                            name="institution_name"
                            placeholder="Name of institution/organization"
                            value={formData.institution_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-6">
                        <div className="h6_admission-form-input">
                          <input
                            type="text"
                            name="contact_person"
                            placeholder="Contact person's name"
                            value={formData.contact_person}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-6">
                        <div className="h6_admission-form-input">
                          <input
                            type="text"
                            name="destination_role"
                            placeholder="Designation/role"
                            value={formData.destination_role}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-6">
                        <div className="h6_admission-form-input">
                          <input
                            type="text"
                            name="phone_number"
                            placeholder="Phone number"
                            value={formData.phone_number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-6">
                        <div className="h6_admission-form-input">
                          <input
                            type="email"
                            name="email_address"
                            placeholder="Email address"
                            value={formData.email_address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-6">
                        <div className="h6_admission-form-input">
                          <select
                            name="selected_course"
                            value={formData.selected_course}
                            onChange={handleChange}>
                            <option value="">Select a course</option>
                            <option value="Beginning WIth Rust">Beginning WIth Rust</option>
                            <option value="Advancing with Rust">Advancing with Rust</option>
                            <option value="Blockchain with Rust">Blockchain with Rust</option>
                            <option value="Backend With Rust">Backend With Rust</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-6">
                        <div className="h6_admission-form-input">
                          <label htmlFor="">Preferred start date</label>
                          <input
                            type="date"
                            name="start_date"
                            value={formData.start_date}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-6">
                        <div className="h6_admission-form-input">
                          <br />
                          <input
                            type="text"
                            name="number_of_participants"
                            placeholder="Expected number of participants"
                            value={formData.number_of_participants}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="h6_admission-form-input">
                          <textarea
                            name="additional_support"
                            placeholder="Do you need any additional support?"
                            value={formData.additional_support}
                            onChange={handleChange}></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="h6_admission-form-btn">
                          <button
                            type="submit"
                            className="theme-btn h6_admission-btn theme-btn-full theme-btn-6">
                            Book<i className="fa-light fa-arrow-right"></i>
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
