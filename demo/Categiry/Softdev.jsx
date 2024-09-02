import React from "react";
import "./CSS/Softdev.css";
import sdev from "../Categiry/s.jpg";
import officeman from "../Categiry/softdev1.jpg";
import { BsSearch } from "react-icons/bs";
import { MdAssuredWorkload } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { SiDesignernews } from "react-icons/si";
import { LiaConnectdevelop } from "react-icons/lia";
import { RiVerifiedBadgeFill } from "react-icons/ri"; 
import { HiMiniRocketLaunch } from "react-icons/hi2";

function Softdev() {
  return ( 
    <>
      <div className="Softdev">
        <img src={sdev} alt="" className="softdevimg" />
      </div>

      <div className="softdevbackcolor">
        <div className="softdev-main-container my-4">
          <div className="text-main-container">
            <div className="main-heading-softdev">
              <h1>
                <b>Best Software Development Services</b>
              </h1>
              <p>
                Quality is our prime motto as qualitative work always counts.
                Arrc Technology guarantees quality parameters to be carried accordingly,
                ensuring the performance of your business apps, <br /> mobile
                apps, and website design.
              </p>
              <p>
                We have a professional approach to offer a complete suite of
                software development and management services using modern
                technical infrastructure and advanced design <br /> principles.
                Our IT strategists are fanatic about delivering software
                solutions aimed at <br /> driving exceptional business value.
              </p>
              <h6>
                Our end-to-end software development services are designed to
                cover almost all spectrums of different industries. <br /> We
                offer an ambient of custom software development services
                spanning from cloud, mobile, and desktop <br /> technologies to
                all major platforms.
              </h6>
            </div>
          </div>
          <img src={officeman} alt="Office Man" className="softdev-image" />
        </div>
      </div>

      {/*    div start */}

      <div className="backcolorsoftdev1">
        <div className="icon-sodtdev-container">
          <div className="icon-item-softdev">
            <div className="icon-wrapper">
              <BsSearch />
            </div>
            <h1 className="customsolutions">Custom Solutions</h1>
            <h6>
              Custom solutions are best fit to any customer business processes
              and daily operations. So we prefer to build custom or customer
              oriented solutions in reasonable cost which will save customer
              time and legacy software maintenance. Please contact us for more
              information.
            </h6>
          </div>

          <div className="icon-item-softdev">
            <div className="icon-wrapper">
              <MdAssuredWorkload />
            </div>
            <h1 className="speedyworkflow">Speedy Workflow</h1>
            <h6>
              We personally know a lot of competing companies, where the speedy
              and agile work style is never cherished and all the deadlines pass
              by just as the team gets stuck behind the schedule. We cannot
              emphasize enough how much different our approach to the timing.
            </h6>
          </div>
        </div>

        <center>
          <div className="icon-wrapper my-4">
            <GrCloudSoftware />
          </div>
        </center>
        <h6 className="Thoroughtesting">
          <center>Thorough Testing</center>
        </h6>
        
            <div>
          <center>
            <h6>
            With the web & software department just as much extensive  as
            it is attentive, <br /> we're can assure you of the end-quality of {" "}
            our product. This means that  <br /> regardless of either  the scale or{" "}
            the   complexity of the <br /> task at hand, we're ready to make it{" "}
            <br /> faultless!
            </h6>
          </center>
          </div>





          {/*           */}
    


          <div className="container-icon-softdev my-4">
    <div className="icon-dn">
        <div className="dn">
            <SiDesignernews className="icon-small" />
        </div>
        <div className="icon-dn-text">
            <h1>DESIGN</h1>
            <h6>We develop a strategy for your business and plan accordingly considering requirements. Our solutions are designed in-house, from the ground up.</h6>
        </div>
    </div>
</div>



<div className="container-icon-softdev my-4">
    <div className="icon-dn">
        <div className="dn">
            <LiaConnectdevelop className="icon-small" />
        </div>
        <div className="icon-dn-text">
            <h1>DEVELOPMENT</h1>
            <h6>After design , we start the work on your project and provide you with drafts and prototypes.That way, you have the freedom to test your website ,mobile app.</h6>
        </div>
    </div>
</div>



<div className="container-icon-softdev my-4">
    <div className="icon-dn">
        <div className="dn">
        <RiVerifiedBadgeFill  className="icon-small" />
        </div>
        <div className="icon-dn-text">
            <h1>DELEIVERY/LAUNCH</h1>
            <h6>The final stage is taking the work live and ensuring that your website is error free or your mobile app meets the app store guidelines.</h6>
        </div>
    </div>
</div>


<div className="container-icon-softdev my-4">
    <div className="icon-dn">
        <div className="dn">
        <HiMiniRocketLaunch   className="icon-small" />
        </div>
        <div className="icon-dn-text">
            <h1>SUPPORT</h1>
            <h6>We value our client relationships & focus on building connections that last beyond our project.we provide ourselves on providing personal service.</h6>
        </div>
    </div>
</div>


        
      </div>
    </>
  );
}

export default Softdev;
