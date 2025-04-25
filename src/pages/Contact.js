import NewsLetter from "../components/newsletter/newsLetter";
import Footer from "../components/footer/footer";
import Navbar from "../components/nav/Navbar";
import React, { useState } from "react";
import { sendContactMessage } from "../api/post";
import { toast } from "react-toastify";

function Contact() {
  const validateForm = () => {
    const { name, email, phone, message, agree } = formData;

    if (!name.trim() || name.length < 2) {
      toast.warn("Please enter a valid name (min 2 characters).");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast.warn("Please enter a valid email address.");
      return false;
    }

    const phoneRegex = /^[0-9]{7,15}$/;
    if (phone.trim() && !phoneRegex.test(phone)) {
      toast.warn("Phone number should contain 7-15 digits.");
      return false;
    }

    if (!message.trim() || message.length < 3) {
      toast.warn("Please enter a message (min 3 characters).");
      return false;
    }

    if (!agree) {
      toast.warn("You must agree to the terms before submitting.");
      return false;
    }

    return true;
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      await sendContactMessage(formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
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
                            <button
                              type="submit"
                              className="theme-btn contact-btn"
                              disabled={loading}
                            >
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
                    <p>
                      <i className="fa-thin fa-location-dot"></i> Bhubaneswar,
                      Odisha, India
                    </p>
                    <p>
                      <i className="fa-thin fa-mobile-notch"></i>{" "}
                      <a href="tel:+916370151545">+91 6370 151 545</a>
                    </p>
                    <p>
                      <i className="fa-thin fa-envelope"></i>{" "}
                      <a href="mailto:info@rustypeeps.school">
                        info@rustypeeps.school
                      </a>
                    </p>
                    <div className="contact-social">
                      <span>Social Media</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a to="#">
                            <i className="fa-brands fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.52297962956!2d85.82045315!3d20.300884149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1732810138016!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div id="newsletter"></div>
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
}

export default Contact;
