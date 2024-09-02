import React from "react";
import "../assets/CSS/Cybersecurity.css";
import cyber from "../assets/cyberlock.jpg";

function Cybersecurity() {
  return (
    <>
      <div className="cyber">
        <img src={cyber} alt="Cybersecurity" className="cyber-img" />
      </div>
   <div className="cyberbackcolor">
      <div className="cyber-heading my-4">
        <h1-cyber>
          <center>
            <b>We Secure Your Enterprise & Web Site</b>
          </center>
        </h1-cyber>
        <h6-cyber>
          <center>
            Bizzfly is an IT security company based in Pune, our single focus is
            in making sure you have the best and most <br /> appropriate
            security infrastructure available to support your informational
            requirements. <br /> We have proven records of success in doing this
            for a wide range of <br /> organizations with unique capabilities
            that set us apart from <br /> other technology firms.
          </center>
        </h6-cyber>

        <h6-cyber>
          <center>
            We here at Bizzfly prioritize providing quality solutions with the
            highest priority for protecting our client’s interests. <br />
            We orient our solutions towards providing cost-effective security
            balanced with quality standards. We started <br />
            as cyber forensic investigators by consulting law enforcement and
            handling individuals involved unknowingly <br />
            in cybercrime and lost finances. Today, Bizzfly, as a team, provides
            various solutions such <br /> as network security, vulnerability
            assessment and penetration testing, ISMS policy and <br />
            audit, cyber forensics, cloud computing, data recovery, threat
            intelligence and <br />
            detection, and email security.
          </center>
        </h6-cyber>

        <h6-cyber>
          <center>
            We have a team for cybercrime, cyberattacks, and cyber awareness.
            Contact us for any cyber questions, <br /> queries, inquiries, or
            consultations. We provide a FIRST FREE CONSULTATION, <br /> so don’t
            worry; we understand your privacy is important.
          </center>
        </h6-cyber>
       <p><center>We secure enterprises & companies. We are here to secure your company.</center></p>
      </div>
      </div>
    </>
  );
}

export default Cybersecurity;
