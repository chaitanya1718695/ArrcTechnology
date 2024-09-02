import React from "react";
import "./CSS/Webdev.css";
import webdev from "./webdev.jpg";
import webdesign from "./responsivewebdesign.jpg"


function Webdev() { 
  return (
    <>
      <div> 
        <img src={webdev} className="webdevimg" alt="" />
      </div> 

      <div className="webdev-backgroundcolor">
        <div className="webdevcompany">
          <h1>
            <center>WEB Design & Development Company</center>
          </h1>
          <h6 className="experiencewebdesign">
            <center>
              Experience in web design and development to help you implement
              integrated systems and <br /> processes to scale new frontiers.
            </center>
          </h6>
          <h6 className="strive">
            <center>
              We strive to develop customized responsive web development
              solutions, not cookie-cutter projects. Each website we develop{" "}
              <br /> is truly unique. No two are ever identical. Our custom web
              builds do not rely on templates, plugins or “found code.” This{" "}
              <br /> allows us to provide you with a customized, user-friendly,
              stable and reliable website.
            </center>
          </h6>
          <h6 className="Arrctech1">
            <center>
              Arrc Technology has a team of highly skilled software developers who are
              committed to giving the best output and <br /> best advice with an
              outstanding design, short, iterative development cycles, combined
              with your ongoing <br /> feedback and usability with a
              high-quality product.
            </center>
          </h6>
        </div>




        <div className="container-Responsivewebdesign">
  <img src={webdesign} alt="Web Design" className="responsive-image" />
  <div className="responsivewebd">
    <h1-webd><center>Responsive Web Design</center></h1-webd>
    <h6-encompasses><center>Arrc Technology is the famous leading & award-winning website design & development company. Being a top digital marketing & SEO company <br /> in Pune, we provide solutions for web design & web development services. Our customer-centric approach makes us a unique solutions <br /> provider for website designing & development.  Our expert development team specializes in building static, dynamic, functional, <br />  responsive, SEO-friendly, and user-friendly websites.</center></h6-encompasses>
    <h6-encompasses><center>Our team encompasses extremely talented Web Designers, Creative Content Writers, and Digital Marketing Executives, which helps us <br /> be a top Website design company in Pune. We design SEO-friendly websites using the latest technologies and platforms like Bootstrap, <br /> HTML5, CSS3, JQuery, JavaScript, and WordPress.</center></h6-encompasses>
  </div>
</div>




{/*                  */}

<div className="offer-container">
  <div className="WhatWeOffer">
    <div className="offer-section">
      <h1>What We Offer</h1>
      <ul>
        <li>Create Website Mockup</li>
        <li>PSD to HTML Conversions</li>
        <li>Website Design</li>
        <li>Website Redesign</li>
        <li>Website Maintenance</li>
        <li>Custom Website Development</li>
        <li>Blog Websites</li>
        <li>UI / UX Design</li>
      </ul>
    </div>
    <div className="offer-section">
      <h1>Why Arrc Technology for Website Design and Development?</h1>
      <ul>
        <li>Bugs and Error-Free Websites</li>
        <li>Safe, Backed-Up, and Secured Websites</li>
        <li>Customized Themes & Content</li>
        <li>Quick Response Time</li>
        <li>Low Cost Affordable Costing</li>
        <li>Free Updates with Outstanding Support</li>
        <li>Responsive Websites</li>
        <li>Search Engine Friendly and Faster Websites</li>
      </ul>
    </div>
  </div>
</div>
</div>




</>

   
  );
}

export default Webdev;
