import NewsLetter from "../components/newsletter/newsLetter";
import Footer from "../components/footer/footer";
import Navbar from "../components/nav/Navbar";
import React, { useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
function Contact() {
    // State for form fields
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });
  
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    // Handle input change
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!formData.agree) {
        setErrorMessage("You must agree to the terms before submitting.");
        return;
      }
  
      setLoading(true);
      setErrorMessage("");
      setSuccessMessage("");
  
      try {
        const response = await axios.post(`${BASE_URL}/other/contact`, formData);
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "", agree: false }); // Reset form
      } catch (error) {
        setErrorMessage("Error sending message. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  return (
    <div>
      {" "}
      <Navbar />
      <main>
      <section className="contact-area pt-12 pb-12">
      <div className="container">
        <div className="contact-wrap">
          <div className="row">
            <div className="col-xl-8 col-md-8">
              <div className="contact-content pr-8 mb-4">
                <h3 className="contact-title mb-3">Send Me a Message</h3>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-3">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-form-input mb-3 contact-form-textarea">
                        <textarea
                          name="message"
                          cols="30"
                          rows="5"
                          placeholder="Feel free to get in touch!"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-form-submit mb-3">
                        <label className="condition_label">
                          <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                          />
                          I agree that my data is collected and stored.
                        </label>
                      </div>
                      <div className="contact-form-btn">
                        <button type="submit" className="theme-btn contact-btn" disabled={loading}>
                          {loading ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="contact-info ml-5 mb-4">
                <h3 className="contact-title mb-4">Get In Touch</h3>
                <p><i className="fa-thin fa-location-dot"></i> Bhubaneswar, Odisha, India</p>
                <p><i className="fa-thin fa-mobile-notch"></i> <a href="tel:+916370151545">+91 6370 151 545</a></p>
                <p><i className="fa-thin fa-envelope"></i> <a href="mailto:info@rustypeeps.school">info@rustypeeps.school</a></p>
                <div className="contact-social">
                  <span>Social Media</span>
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.52297962956!2d85.82045315!3d20.300884149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1732810138016!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
}

export default Contact;
