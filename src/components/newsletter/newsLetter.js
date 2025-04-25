import React, { useState } from "react";
import { subscribeToNewsletter } from "../../api/post";
import { toast } from "react-toastify";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.warn("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await subscribeToNewsletter(email);

      if (response.code === 201) {
        toast.error(response.message);
      } else {
        toast.success(response.message);
        setEmail(""); // Clear input on success
      }
    } catch (error) {
      toast.error("❌ Failed to subscribe. Please try again.");
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
                      disabled={loading}
                    />
                    <button type="submit" disabled={loading}>
                      {loading ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
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
