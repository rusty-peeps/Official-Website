import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import menuLinks from "../../data/nav.json";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleHashScroll = () => {
    const hash = location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleHashScroll();
  }, [location]);

  const handleNavigation = (url, hash) => {
    if (hash) {
      navigate(`${url}#${hash}`);
    } else {
      navigate(url);
    }
  };

  const renderLink = (item) => {
    if (item.url?.startsWith("http")) {
      return (
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      );
    }
    if (item.href) {
      return (
        <Link
          to={`${item.url || ""}#${item.href}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(item.url || "/", item.href);
          }}
        >
          {item.label}
        </Link>
      );
    }

    return <Link to={item.url}>{item.label}</Link>;
  };

  return (
    <header>
      <div className="header-area header-sticky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-10 col-lg-10 col-md-6 col-6">
              <div className="header-left">
                <div className="header-logo">
                  <Link to="/">
                    <img src="/assets/img/logo/logo.png" alt="Logo" />
                  </Link>
                </div>
                <nav className="main-menu mobile-menu d-none d-xl-block">
                  <ul>
                    {menuLinks.mainMenu.map((item, index) => (
                      <li key={index}>{renderLink(item)}</li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="header-right">
                <div className="header-btn d-none d-sm-block">
                  <Link
                    to="#newsletter"
                    className="header-btn theme-btn theme-btn-medium"
                  >
                    Subscribe to Newsletter
                  </Link>
                </div>
                <div className="header-menu-bar d-xl-none ml-10">
                  <span
                    className="header-menu-bar-icon side-toggle"
                    onClick={toggleSidebar}
                  >
                    <i className="fa-light fa-bars"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <div className="logo">
              <img src="assets/img/logo/logo-white.png" alt="Logo" />
            </div>
            <button className="close-btn" onClick={toggleSidebar}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <nav className="sidebar-nav">
            <ul>
              {menuLinks.sidebarMenu.map((item, index) => (
                <li key={index}>{renderLink(item)}</li>
              ))}
            </ul>
          </nav>
          <div className="footer-social">
            <br />
            <ul>
              <li>
                <Link to="#">
                  <i
                    style={{ color: "white" }}
                    className="fa-brands fa-twitter"
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i
                    style={{ color: "white" }}
                    className="fa-brands fa-facebook-f"
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i
                    style={{ color: "white" }}
                    className="fa-brands fa-linkedin-in"
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i
                    style={{ color: "white" }}
                    className="fa-brands fa-youtube"
                  ></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {isSidebarOpen && (
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        )}
      </div>
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </header>
  );
};

export default Navbar;
