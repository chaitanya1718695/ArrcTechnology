import React from "react";
import "../assets/CSS/Footer.css";
import color from "../assets/color.png";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className="span">
            Get connected with us on social networks:
          </span>
        </div>
        <div className="social-icons">
          <a href="/" className="me-4 text-reset1">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="me-4 text-reset1">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="me-4 text-reset1">
            <i className="fab fa-google"></i>
          </a>
          <a href="/" className="me-4 text-reset1">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="me-4 text-reset1">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className="me-4 text-reset1">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="footer-container">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 my-4">
              <i className="me-3 ml-2"></i>
              <b>Company name</b>
            </h6>
            <p>
              <img src={color} alt="Company Logo" className="color1" />
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 my-4">
              <b>Our Services</b>
            </h6>
            <div className="footer-links">
              <a href="/seosem" className="text-reset">
                SEO/SEM Solutions
              </a>
              <br />
              <a href="/digitalmarketing" className="text-reset">
                Digital Marketing
              </a>
              <br />
              <a href="/webdev" className="text-reset">
                Website Development
              </a>
              <br />
              <a href="/appdev" className="text-reset">
                App Development
              </a>
              <br />
              <a href="/softdev" className="text-reset">
                Software Development
              </a>
              <br />
              <a href="/ecommerce" className="text-reset">
                E-Commerce Solutions
              </a>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 my-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <b>Useful Links</b>
            </h6>
            <div className="footer-links my-4">
              <a href="https://www.google.com/" className="text-reset">
                Google
              </a>
              <br />
              <a href="https://www.facebook.com/" className="text-reset">
                Facebook
              </a>
              <br />
              <a href="https://x.com/" className="text-reset">
                X
              </a>
              <br />
              <a href="https://www.instagram.com/" className="text-reset">
                Instagram
              </a>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 my-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <b>Contact</b>
            </h6>
            <p className="color2">
              <i className="fas fa-envelope me-3"></i>arrctechnology15@gmail.com
            </p>
            <p className="color2">
              <i className="fas fa-phone me-3"></i> +01 234 567 88
            </p>
            <p className="color2">
              <i className="fas fa-print me-3"></i> +01 234 567 89
            </p>
          </div>
        </div>
      </section> 
      <div className="line mt-4"></div>
      <div className="text-center p-4 color2">
        © Copyright 2024. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
  