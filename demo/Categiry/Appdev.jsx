import React from "react";
import "./CSS/Appdev.css";
import appdev from "../Categiry/appdev.jpg";

function Appdox() {
  return (
    <>
      <div className="appdev">
        <img src={appdev} className="appdev-img" alt="Mobile App Development" />
      </div>

      <div className="appdev-backcolor">
        <div className="appdev-heading my-4">
          <h1 className="appdev-main-heading my-4">
            <center>
              <b>Mobile App Development</b>
            </center>
          </h1>
          <p>
            <center>
              We Build Mobile Apps for Every User, Every Platform & Every Industry.
            </center>
          </p>
          <h6>
            <center>
              Smartphones, based on both Android and iPhone systems, have gained
              quite a lot of popularity. People use their phones not only to talk
              and send messages but also to browse the internet and do online
              shopping. This has made it necessary to have an Android/iPhone app
              related to your business. If you are looking for an Android/iPhone
              application development company, your search ends at Arrc Technology.
            </center>
          </h6>
          <h6>
            <center>
              Arrc Technology boasts a team of skilled experts who have years of experience
              in developing mobile applications for Android as well as iPhone, be it
              tablets, phones, or phablets. Our team is up to date with the latest
              technology in mobile application development and uses the latest tools
              for this purpose. We follow a customer-centric approach to make sure
              that you receive an app that works well for your customers as well as
              your business.
            </center>
          </h6>
        </div>

        <div className='appdev-heading-2 my-4'>
          <h2>Mobile App Development Company</h2>
          <p>
            By adopting the best industry standards, processes, technologies, <br /> and tools
            for custom software development, we are able to make <br /> us one of the top mobile
            app development companies.
          </p>
          <ul>
            <li>Our extensive work experience</li>
            <li>Affordability</li>
            <li>Apps increase customer engagement</li>
            <li>Apps reduce costs</li>
            <li>Apps promotion and offers great support</li>
            <li>Apps are the best social media platform</li>
            <li>Best quality</li>
            <li>Creativity</li>
          </ul>
        </div>

        <div className="appdev-heading-3">
          <h2>What We Offer Under Mobile Application Development Services</h2>
          <ul>
            <li>Create Mobile App Screen</li>
            <li>Android App Development</li>
            <li>iOS App Development</li>
            <li>Cross-Platform App Development</li>
            <li>Hybrid App Development</li>
          </ul>
        </div>

        <div className="appdev-heading-4 my-4">
          <h2>Why Arrc Technology for Mobile Application Development?</h2>
          <ul>
            <li>End-to-End Solutions - App Discovery to App Maintenance</li>
            <li>User-centric approach to product development</li>
            <li>Pre-built app solutions for popular verticals to save time and money</li>
            <li>Working with the latest technologies and tools</li>
            <li>Timely project deliveries</li>
            <li>Security and confidentiality assurance</li>
          </ul>
        </div>
      </div> 
    </>
  );
}

export default Appdox;
