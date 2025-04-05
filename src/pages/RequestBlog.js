import NewsLetter from "../components/newsletter/newsLetter";
import Footer from "../components/footer/footer";
import Navbar from "../components/nav/Navbar";
import React, { useState } from "react";
import axios from "axios";

function RequestBlog() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Linkedin: "",
    File: null,
    agreement: false,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreement) {
      setMessage("You must agree to the terms.");
      return;
    }

    const formPayload = new FormData();
    formPayload.append("Name", formData.Name);
    formPayload.append("Email", formData.Email);
    formPayload.append("Linkedin", formData.Linkedin);
    formPayload.append("agreement", formData.agreement);
    // Append the file directly without base64 conversion
    if (formData.File) {
      formPayload.append("File", formData.File, formData.File.name);
    }

    try {
      const response = await axios.post(
        "https://api.example.com/submit-form", // Replace with your API endpoint
        formPayload
      );
      console.log("Form submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <section className="contact-area pt-60 pb-120">
          <div className="container">
            <div className="contact-wrap pb-120">
              <div className="contact-content pr-80 mb-20">
                <h3 className="contact-title mb-25">Request a Blog</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-30">
                        <input
                          type="text"
                          name="Name"
                          placeholder="Your Name"
                          onChange={handleChange}
                          required
                        />
                        <span className="inner-icon">
                          <i className="fa-thin fa-user"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-30">
                        <input
                          type="email"
                          name="Email"
                          placeholder="Email Address"
                          onChange={handleChange}
                          required
                        />
                        <span className="inner-icon">
                          <i className="fa-thin fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-form-input mb-30">
                        <input
                          type="text"
                          name="Linkedin"
                          placeholder="Your LinkedIn Profile"
                          onChange={handleChange}
                          required
                        />
                        <span className="inner-icon">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-form-input mb-30">
                        <input
                          type="file"
                          name="File"
                          onChange={handleChange}
                          required
                        />
                        <span className="inner-icon">
                          <i className="fa fa-file"></i>
                        </span>
                        <span className="label-ss">
                          *Drag and drop or click to select your markdown file.
                          Make sure it's a valid .md format to ensure seamless
                          processing.
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-form-submit mb-30">
                        <div className="contact-form-btn">
                          <button
                            type="submit"
                            className="theme-btn contact-btn">
                            Submit
                          </button>
                        </div>
                        <div className="contact-form-condition">
                          <label className="condition_label">
                            I agree that my data is collected and stored.
                            <input
                              type="checkbox"
                              name="agreement"
                              checked={formData.agreement}
                              onChange={handleChange}
                            />
                            <span className="check_mark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        </section>
        <div className="pt-60 pb-120"></div>
        <div id="newsletter"></div>
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
}

export default RequestBlog;
