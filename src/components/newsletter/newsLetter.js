import React, { useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
function NewsLetter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${BASE_URL}/newsletter`,
        { email }
      );
      setMessage("Subscription successful! 🎉");
      setEmail(""); // Reset input
    } catch (error) {
      setMessage("Failed to subscribe. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cta-area">
      <div className="container">
        <div className="cta-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="cta-content mb-30 mb-lg-0">
                <span className="cta-subtitle">Sign Up for Newsletter!</span>
                <h2 className="cta-title">Are you Ready to Conquer Rust!?</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="cta-button">
                <form onSubmit={handleSubmit}>
                  <div className="footer-subscribe-form bg-light">
                    <input
                      type="email"
                      placeholder="Enter Your Email*"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                    <button type="submit" disabled={loading}>
                      {loading ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                  {message && <p className="message">{message}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
