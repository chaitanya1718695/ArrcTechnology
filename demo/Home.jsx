import React from "react";
import "./Home.css";
import manimage1 from "../assets/robot3.jpg";

function Home() {
  return ( 
    <> 
      <div className="home-container">
        <div className="content">
          <h2 className="fontstyle1 mt-5">Best</h2>
          <h1-itsolution >IT Solution</h1-itsolution>
          <h1-compony className="fontstyle3">Company</h1-compony>
          <h4 className="fontstyle4 my-4">Where Innovation meets Creativity</h4>
          <h6 className="fontstyle5 my-2">
            Get all the IT services delivered quickly within <br />
            24 Hours. We provide all types of services <br /> from designing to
            developing. 
          </h6>   

          <div className="button-container">
            <button type="button" className="btn btn-secondary btn-lg my-3">
              Learn More
            </button> 
            <h6 className="button-text">
              Over 10,000+ <br />
              Happy Clients
            </h6>
          </div>
        </div>
      </div>

      {/* new div start */}
      <div className="home-backcolor1">
        <div className="container-home1">
          <div className="image-container-home1">
            <img src={manimage1} className="manimage1" alt="" />
          </div>
          <div className="text-container-home1">
            <h1>What We're All About</h1>
            <p>
              We assure you to give best innovative, creative solutions for
              digital marketing & web develop <br /> ment. We promised to give cost
              effective onli <br /> ne marketing solution to maximize profit.
            </p>
            <h6>
              Bizzfly is best Digital Marketing and Website Development Compa <br /> ny
              it's different from your traditional marketing agency.
            </h6>
          </div>
        </div>
      </div>
    </> 
  );
}

export default Home;
