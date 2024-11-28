import React from "react";
import NewsLetter from "../components/newsletter/newsLetter";
import Footer from "../components/footer/footer";
import Navbar from "../components/nav/Navbar";

function Contact() {
  return (
    <div>
      {" "}
      <Navbar />
      <main>
        <section class="contact-area pt-120 pb-120">
          <div class="container">
            <div class="contact-wrap">
              <div class="row">
                <div class="col-xl-8 col-md-8">
                  <div class="contact-content pr-80 mb-20">
                    <h3 class="contact-title mb-25">Send Me Message</h3>
                    <form action="#" class="contact-form">
                      <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                          <div class="contact-form-input mb-30">
                            <input type="text" placeholder="Your Name" />
                            <span class="inner-icon">
                              <i class="fa-thin fa-user"></i>
                            </span>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                          <div class="contact-form-input mb-30">
                            <input type="email" placeholder="Email Address" />
                            <span class="inner-icon">
                              <i class="fa-thin fa-envelope"></i>
                            </span>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                          <div class="contact-form-input mb-30">
                            <input type="text" placeholder="Your Number" />
                            <span class="inner-icon">
                              <i class="fa-thin fa-phone-volume"></i>
                            </span>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="contact-form-input mb-50 contact-form-textarea">
                            <textarea
                              name="message"
                              cols="30"
                              rows="10"
                              placeholder="Feel free to get in touch!"></textarea>
                            <span class="inner-icon">
                              <i class="fa-thin fa-pen"></i>
                            </span>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="contact-form-submit mb-30">
                            <div class="contact-form-btn">
                              <a href="#" class="theme-btn contact-btn">
                                Send Message
                              </a>
                            </div>
                            <div class="contact-form-condition">
                              <label class="condition_label">
                                I agree that my data is collected and stored.
                                <input type="checkbox" />
                                <span class="check_mark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4">
                  <div class="contact-info ml-50 mb-20">
                    <h3 class="contact-title mb-40">Get In Touch</h3>
                    <div class="contact-info-item">
                      <span>
                        <i class="fa-thin fa-location-dot"></i>Address
                      </span>
                      <p>Hilton Conference Centre</p>
                    </div>
                    <div class="contact-info-item">
                      <span>
                        <i class="fa-thin fa-mobile-notch"></i>Phone
                      </span>
                      <a href="tel:+123548645850">+123 548 6458 50</a>
                    </div>
                    <div class="contact-info-item">
                      <span>
                        <i class="fa-thin fa-envelope"></i>Email
                      </span>
                      <a href="mailto:example@gmail.com">Example@gmail.com</a>
                    </div>
                    <div class="contact-social">
                      <span>Social Media</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.52297962956!2d85.82045315!3d20.300884149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1732810138016!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>

        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
}

export default Contact;
