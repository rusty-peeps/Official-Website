import React from "react";
import NewsLetter from "../components/newsletter/newsLetter";
import Footer from "../components/footer/footer";
import Navbar from "../components/nav/Navbar";

function RequestBlog() {
  return (
    <div>
      {" "}
      <Navbar />
      <main>
        <section className="contact-area pt-60 pb-120">
          <div className="container">
            <div className="contact-wrap pb-120">
              <div className="contact-content pr-80 mb-20">
                <h3 className="contact-title mb-25">Request a Blog</h3>
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-30">
                        <input type="text" placeholder="Your Name" />
                        <span className="inner-icon">
                          <i className="fa-thin fa-user"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-30">
                        <input type="email" placeholder="Email Address" />
                        <span className="inner-icon">
                          <i className="fa-thin fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-30">
                        <input
                          type="text"
                          placeholder="Your LinkedIn Profile"
                        />
                        <span className="inner-icon">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </span>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="contact-form-input mb-30">
                        <input type="file" />
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
                          <a href="#" className="theme-btn contact-btn">
                            Submit
                          </a>
                        </div>
                        <div className="contact-form-condition">
                          <label className="condition_label">
                            I agree that my data is collected and stored.
                            <input type="checkbox" />
                            <span className="check_mark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-60 pb-120"></div>
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
}

export default RequestBlog;
