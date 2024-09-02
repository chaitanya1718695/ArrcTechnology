import React, { useState } from "react";
import "../assets/CSS/Recruitment.css";
import { toast } from "react-toastify";

import { TbFileCertificate } from "react-icons/tb";
import { MdNetworkCheck } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

function Recruitment() {
  // Manage expanded state for each FAQ item
  const questionsAndAnswers = [
    {
      question: "What is the duration of Internship?",
      answer: (
        <center>"All our internships are for a period of 1 month only."</center>
      ),
    },
    {
      question: "Can I complete multiple tracks together?",
      answer: (
        <center>
          We believe to provide an actual learning environment, we have limited
          our internship offerings to 1 track per month for each student. This
          allows students to explore the choosen track in-depth and get quality
          results.
        </center>
      ),
    },
    {
      question: "Is there any fees for Internships?",
      answer: (
        <center>
          The internship is completely free. However, a documentation fee of
          ₹119 must be paid to cover the processing charges.
        </center>
      ),
    },
    {
      question: "When will I receive the Offer Letter?",
      answer: (
        <center>
          "We process the Offer Letters at the mid & end of month in batches. We
          request you to please wait in the mean time. If you have received the
          Task Submission Email, we request you to review your spam folder for
          the Offer Letter. Kindly contact us via email if you are unable to
          find it."
        </center>
      ),
    },
    {
      question: "How to submit Tasks?",
      answer: (
        <center>
          "A Submission Form will be mailed to you 10-15 days after you receive
          your Offer Letter. For batches starting on the 1st of the month, the
          form will be mailed between the 11th and 14th. For batches starting on
          the 15th of the month, the form will be mailed between the 26th and
          29th."
        </center>
      ),
    },
    {
      question: "What is the criteria for selection?",
      answer: (
        <center>
          "Determination to learn and grow is all what is needed."
        </center>
      ),
    },
    {
      question: "When does the internship start?",
      answer: (
        <center>
          "Each batch starts at the start or mid of the month and ends on start
          or mid of next month respectively."
        </center>
      ),
    },
    {
      question: "Is the internship Offline or Online?",
      answer: (
        <center>
          "All our internships are conducted in Virtual mode (Online)."
        </center>
      ),
    },
    {
      question: "CIN is showing invalid",
      answer: (
        <center>
          "The CIN will activate once you have been issued your Certificate of
          Completion. "
        </center>
      ),
    },
    {
      question: "When will I get the Certificate?",
      answer: (
        <center>
          "The Certificate of Completion is sent after the end date on the Offer
          Letter. For batches starting on the 1st of the month, the Certificate
          is sent from 1st of next month. For batches starting on the 15th of
          the month, the Certificate is sent from 16th of next month. Note: New
          Submission may take upto 3 days to process."
        </center>
      ),
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const firstColumnItems = questionsAndAnswers.slice(0, 5);
  const secondColumnItems = questionsAndAnswers.slice(5, 10);

  // form

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Perform custom validation checks
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const file = formData.get("file");

    // Example validation checks
    if (!fullname || fullname.length < 3) {
      toast.error("Full name must be at least 3 characters long.");
      return;
    }

    if (!email || !isValidEmail(email)) {
      toast.error(
        "Please enter a valid email address. Accepted formats: example.com, example.co.in, etc."
      );
      return;
    }

    if (!phone || !isValidPhoneNumber(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!message || message.length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return;
    }

    if (!file) {
      toast.error("Please upload a file.");
      return;
    }

    // Submit the form data if all validations pass
    console.log("Form submitted:", { fullname, email, phone, message, file });

    // Show success toast notification
    toast.success("Form submitted successfully!");
  };

  // Function to validate email with a more specific pattern
  const isValidEmail = (email) => {
    // Regex pattern to validate email addresses
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co\.in|net|org|edu|gov|info|us)$/i;
    return emailPattern.test(email);
  };

  // Function to validate phone number
  const isValidPhoneNumber = (phone) => {
    // Regex pattern to validate exactly 10 digits
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  //  cv upload

  const [file, setFile] = useState(null); // Initialize file state
  const [error, setError] = useState(""); // Initialize error state

  // Event handler for file input
  function handleFile(event) {
    const selectedFile = event.target.files[0];

    // Define the maximum file size (1MB in bytes)
    const maxSize = 1 * 1024 * 1024; // 1MB = 1 * 1024 * 1024 bytes

    if (selectedFile) {
      // Check if the file type is PDF
      if (selectedFile.type !== "application/pdf") {
        setError("Please select a PDF file.");
        setFile(null); // Clear the file state
        return;
      }

      // Check if the file size exceeds 1MB
      if (selectedFile.size > maxSize) {
        setError("The file size exceeds 1MB.");
        setFile(null); // Clear the file state
        return;
      }

      // If file is valid, set it in state
      setFile(selectedFile);
      setError(""); // Clear any previous errors
    }
  }

  return (
    <>
      <div className="recruitment-black">
        <div className="recruitment-container"> 
          <h5 className="Internships">
            <center>Internships</center>
          </h5>
          <h1 className="my-4 ">
            <center className="ourint">Our Internships</center>
          </h1>
          <p>
            <center className="includingweb">
              Our internships are available in a range of fields, including Web{" "}
              <br />
              Development, Machine Learning, Data Science, and more. <br />
              Interns will have the chance to work on real-world projects,{" "}
              <br />
              collaborate with teams, and gain valuable insights into their{" "}
              <br />
              respective industries.
            </center>
          </p>
        </div>

        <div className="recruitment-container-one">
          <div className="box">
            <h3 className="softwaredevelopment mt-2">
              <center>Software Development Internship</center>
            </h3>
            <h6 className="overview mt-2">Overview</h6>
            <h6 className="lifecycle mt-2">Life Cycle</h6>
            <h6 className="cli mt-2">CLI Apps</h6> 
            <h6 className="guiapps mt-2">GUI Apps</h6>
            <h6 className="webscrapping mt-2">Web Scraping</h6>
            <center>
              <button type="button" className="apply-now">
                Apply Now
              </button>
            </center>
          </div>
          <div className=" box2">
            <h3 className="webdevinternship  mt-2">
              <center className="webdevinternship">Web Dev Internship</center>
            </h3>
            <h6 className="overview2 mt-2">
              <center>Overview</center>
            </h6>
            <h6 className="html mt-2">
              <center>HTML5 & CSS3</center>
            </h6>
            <h6 className="javascript mt-2">
              <center>JavaScript</center>
            </h6>
            <h6 className="responsivewebsite mt-2">
              <center>Responsive Website</center>
            </h6>
            <h6 className="webapplications mt-2">
              <center>Web Applications</center>
            </h6>
            <center>
              <button type="button" className="apply-now">
                Apply Now
              </button>
            </center>
          </div>
          <div className="box">
            <h3 className="Androiddeveloper mt-2">
              <center>Android Development Internship</center>
            </h3>
            <h6 className="overview mt-2">Overview</h6>
            <h6 className="kotlin mt-2">Kotlin/Flutter/React Native</h6>
            <h6 className="simpleapps mt-2">Simple Apps</h6>
            <h6 className="advanceapps mt-2">Advanced Apps</h6>
            <h6 className="cloudapps mt-2">Cloud Apps</h6>
            <center>
              <button type="button" className="apply-now">
                Apply Now
              </button>
            </center>
          </div>
        </div>

        <div className="recruitment-container-one">
          <div className="box">
            <h3 className="softwaredevelopment mt-2">
              <center>Machine Learning Internship</center>
            </h3>
            <h6 className="overview mt-2">Overview</h6>
            <h6 className="dataanalysis mt-2">Data Analysis</h6>
            <h6 className="cli mt-2">Supervised Learning</h6>
            <h6 className="guiapps mt-2">Unsupervised Learning</h6>
            <h6 className="webscrapping mt-2">Deep Learning</h6>
            <center>
              <button type="button" className="apply-now">
                Apply Now
              </button>
            </center>
          </div>
          <div className="box box2">
            <h3 className="webdevinternship mt-2">
              <center>Data Science Internship</center>
            </h3>
            <h6 className="overview2 mt-2">
              <center>Overview</center>
            </h6>
            <h6 className="html mt-2">
              <center>EDA</center>
            </h6>
            <h6 className="javascript mt-2">
              <center>Data Pre-processing</center>
            </h6>
            <h6 className="responsivewebsite mt-2">
              <center>Data Visualization</center>
            </h6>
            <h6 className="webapplications mt-2">
              <center>BI Tools</center>
            </h6>
            <center>
              <button type="button" className="apply-now">
                Apply Now
              </button>
            </center>
          </div>
          <div className="box">
            <h3 className="Androiddeveloper mt-2">
              <center>Cyber Security Internship</center>
            </h3>
            <h6 className="overview mt-2">Caesar Cipher</h6>
            <h6 className="kotlin mt-2">Pixel Manipulation</h6>
            <h6 className="simpleapps mt-2">Password Complexity</h6>
            <h6 className="advanceapps mt-2">Keyloggers</h6>
            <h6 className="cloudapps mt-2">Network Packet Analysis</h6>
            <center>
              <button type="button" className="apply-now">
                Apply Now
              </button>
            </center>
          </div>
        </div>

        {/*           new div started                   */}

        <div className="recruitment-container-two">
          <h6 className="features1">Features</h6>
          <h1 className="ourinternships">Features of our Internships</h1>
        </div>

        <div className="icons-row">
          <div className="icon-container">
            <TbFileCertificate className="certificateIcon" />
            <h4>Verified Certificates</h4>
            <h6>Get Verified Certificates to prove your hard work!</h6>
          </div>
          <div className="icon-container">
            <MdNetworkCheck className="NetWorkingIcon" />
            <h4>Networking</h4>
            <h6>
              Tap into our network and increase your chances of placements
            </h6>
          </div>
          <div className="icon-container">
            <FaRegHandshake className="HandshakeIcon" />
            <h4>Hands-on Experience</h4>
            <h6>Gain practical experience by working on real-world projects</h6>
          </div>
          <div className="icon-container">
            <MdOutlineHighQuality className="QualityIcon" />
            <h4>High Quality Content</h4>
            <h6>Great Content to prepare students for their future careers.</h6>
          </div>
        </div>

        {/*  new div started  */}

        <div className="recruitment-container-three my-4 mt-5">
          <h5 className="faq">
            <center>FAQ</center>
          </h5>
          <h1 className="questionanswer">
            <center>Any Questions? Answered</center>
          </h1>
        </div>

        {/*          new div      */}

        <div className="container-q-a">
          <div className="column">
            {firstColumnItems.map((item, index) => (
              <div key={index} className="box-recruitment-1">
                <div className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => handleToggle(index)}
                  >
                    <IoIosArrowDropdown
                      className={`arrow-icon $ expandedIndex === index ? "expanded" : "" }`}
                    />
                    <center>
                      <b>{item.question}</b>
                    </center>
                  </div>
                  {expandedIndex === index && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="column">
            {secondColumnItems.map((item, index) => (
              <div key={index} className="box-recruitment-1">
                <div className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => handleToggle(index + 5)}
                  >
                    <IoIosArrowDropdown
                      className={`arrow-icon ${
                        expandedIndex === index + 5 ? "expanded" : ""
                      }`}
                    />
                    <center>
                      <b>{item.question}</b>
                    </center>
                  </div>
                  {expandedIndex === index + 5 && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div> 
        </div>






        <div className="contactus-container">
          <div className="contactus-heading-main">
            <h5 className="conus">
              <center>CONTACT US</center>
            </h5>
            <h1>Lets talk about</h1>
            <h1 className="animated-text">Love to hear from you!</h1>
          </div>
          <div className="contactus-form-wrapper">
            <form className="contactus-form1" onSubmit={handleSubmit}>
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                placeholder="Your full name"
                pattern="[A-Za-z\s]{3,}"
                title="Full name must be at least 3 characters long and contain only letters and spaces."
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your email address"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address. Accepted formats include example.com, example.co.in, etc."
              />
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                pattern="\d{10}"
                title="Please enter a 10-digit phone number."
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Your message"
                minLength="10"
                maxLength="500"
                title="Message must be between 10 and 500 characters long."
              ></textarea>

              <div className="file-upload-container">
                <input
                  type="file"
                  name="file"
                  accept=".pdf"
                  onChange={handleFile}
                  className="file-input"
                />
                {file && <p className="file-name">{file.name}</p>}
                {error && <p className="error-message">{error}</p>}
              </div>
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>





        <div className="icons-container-location-mail my-4">
          <div className="icon-item-location-mail">
            <TiLocationOutline className="icon-location-mail" />
            <div className="text-content">
              <span className="icon-text">Our Location</span>
              <p className="icon-paragraph">
                Mumbai - 400018, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="icon-item-location-mail">
            <IoMailOutline className="icon-location-mail" />
            <div className="text-content">
              <span className="icon-text">How Can We Help?</span>
              <p className="icon-paragraph">contact@prodigyinfotech.dev</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recruitment;
