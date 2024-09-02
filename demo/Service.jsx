import React, {  useState } from "react";
// import { CountUp } from "countup.js";
import "../assets/CSS/Service.css";
import officelab  from "../assets/officelab1.jpg";
import manlaptop from "../assets/webdevelopexpert.jpg" 
import advancetech from "../assets/advancetech.webp" 
import technologystack from "../assets/ots2.jpg"
import enterprise from "../assets/enterprise1.jpg"
import digitalrobot from "../assets/digitalimage.jpg"
import mmb from "../assets/mmb.jpg"
import mmb1 from "../assets/mmb1.jpg"
import mmb2 from "../assets/mmb2.jpg"
import sms from "../assets/sms.jpg"
 

import { TbHexagonNumber1Filled } from "react-icons/tb";
import { TbHexagonNumber2Filled } from "react-icons/tb";
import { TbHexagonNumber3Filled } from "react-icons/tb";
import { TbHexagonNumber4Filled } from "react-icons/tb";

import CodeOffIcon from '@mui/icons-material/CodeOff';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
// import styled from 'styled-components';
// import CodeOffIcon from '@mui/icons-material/CodeOff';

 
function Service() {
  // const [startCounting, setStartCounting] = useState(false);
  // const counterRef = useRef(null);

  // useEffect(() => {
  //   if (startCounting) {
  //     const options = { duration: 2.0 }; // 2 seconds for fast counting
  //     const projectCounter = new CountUp("project-counter", 8000, options);
  //     const clientCounter = new CountUp("client-counter", 500000, options);
  //     const awardCounter = new CountUp("award-counter", 200000, options);

  //     if (!projectCounter.error) projectCounter.start();
  //     if (!clientCounter.error) clientCounter.start();
  //     if (!awardCounter.error) awardCounter.start();
  //   }
  // }, [startCounting]);

  // useEffect(() => {
  //   const currentCounterRef = counterRef.current;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setStartCounting(true);
  //         observer.disconnect();
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (currentCounterRef) {
  //     observer.observe(currentCounterRef);
  //   }

  //   return () => {
  //     if (observer && currentCounterRef) {
  //       observer.unobserve(currentCounterRef);
  //     }
  //   };
  // }, []);

  const questionsAndAnswers = [
    { question: 'What Services Do You Offer?', answer: 'At Arrch Technology, we provide a comprehensive range of IT services, including Web Development, Mobile App Development, Digital Marketing, Cloud Solutions, IT Consulting, and IT Training & Placement.' },
    { question: 'What Is Your Unique Selling Proposition (USP)?', answer: 'Our USP lies in our client-centric approach and commitment to delivering tailor-made solutions. We combine industry expertise with cutting-edge technologies to provide innovative solutions that meet your specific business needs.' },
    { question: 'Can You Send Me Details About Your Digital Marketing Services?', answer: 'Certainly! Our digital marketing services include SEO, SEM, Social Media Marketing, Content Marketing, Email Marketing, and Analytics and Reporting.' },
    { question: 'Can You Send Me Details About Your IT Training and Placement Services?', answer: 'Absolutely! Our IT Training & Placement services are designed to equip you with the skills needed to excel in the IT industry. We offer: Training Programs: Comprehensive training in programming languages, web development, data science, cybersecurity, and more. Certification Preparation: Guidance and resources for industry-recognized certifications such as CompTIA, Cisco, Microsoft, and AWS. Soft Skills Training: Workshops on communication, teamwork, and problem-solving skills. Placement Assistance: Resume building, mock interviews, and job search support to help you secure your dream job. Our experienced instructors and industry connections ensure that you receive practical, hands-on training and valuable placement opportunities.' },
    { question: 'Can You Provide Details About Your Courses?', answer: 'Certainly! We offer a wide range of courses tailored to different levels of expertise: Web Development: Courses covering HTML, CSS, JavaScript, PHP, and popular frameworks like React and Angular. Mobile App Development: Training in Android, iOS, and cross-platform development. Data Science & Analytics: Courses on Python, R, machine learning, and data visualization tools. Cybersecurity: Training on ethical hacking, network security, and information security management. Cloud Computing: Courses on AWS, Azure, and Google Cloud Platform, including cloud architecture and deployment. Software Development: Comprehensive courses on Java, .NET, C++, and other programming languages.' }
  ];

  const QuestionDropdown = () => { 
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionChange = (event) => {
      const selectedQuestionText = event.target.value;
      const selected = questionsAndAnswers.find(q => q.question === selectedQuestionText);
      setSelectedQuestion(selected);
    };

    return (
      <div className="dropdown-container">
        <select onChange={handleQuestionChange} className="dropdown-select">
          <option value="">Select a question</option>
          {questionsAndAnswers.map((qa, index) => (
            <option key={index} value={qa.question}>
              {qa.question}
            </option>
          ))}
        </select> 
        {selectedQuestion && (
          <div className="answer-container">
            <h3>{selectedQuestion.question}</h3>
            <p>{selectedQuestion.answer}</p>
          </div>
        )}
      </div>
    );
  };








  return (
    <>
   <div className="bckcolor">
  <div className="container-cards">
    <div className="card18 card-digital-marketers">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 my-2">Digital Marketers</h6>
          <p className="card-text18 my-4">We offer clear and competitive pricing for performance-driven and profit-driven Internet marketing services.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-software-development">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 my-2"><center>Software Development</center></h6>
          <p className="card-text18 my-4">Our aim is to provide well-clustered software solutions that simplify and eliminate tedious tasks.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-app-development">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 my-2">App Development</h6>
          <p className="card-text18 my-4">We develop apps that stand out from the crowd, providing cost-effective, scalable, and robust mobile solutions.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-websites-development">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 "><center>Websites Development</center></h6>
          <p className="card-text18 my-4">Our customer-centric approach makes us a unique solutions provider for website designing & development.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-seo-solutions">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 "><center>SEO/SEM Solutions</center></h6>
          <p className="card-text18 my-4">Our SEO/SEM Solutions service focuses on increasing user engagement through targeted content strategies.</p>
        </div>
      </div>
    </div>

    <div className="card18 card-more-services">
      <div className="card-inner18">
        <div className="card-front18 card-body18">
          <h6 className="card-title18 "><center>More Services</center></h6>
          <p className="card-text18 my-4">We offer a wide range of digital marketing services tailored to your business needs, ensuring your brand stands out.</p>
        </div>
      </div>
    </div>
  </div>
</div>


 




 
      
      





      <div className="bckcolor3">
        <h5 className="peicing">
          <center>OUR PRICING</center>
        </h5>
        <h1 className="joinfor">
          <center>
            Join for <span className="free">free</span> Today
          </center>
        </h1>
{/* 
        <div className="row justify-content-center">
          <div className="btn-group my-4">
            <button type="button" className="btnbtn btn-outline btn-lg mx-1">
              <b>Monthly</b>
            </button>
            <button type="button" className="btnbtn btn-outline btn-lg">
              <b>Yearly</b>
            </button>
          </div>
        </div> */}


        
        <QuestionDropdown />
      </div>


      
      <div className="fullscreen-background-robotics-image">
      <div className="content-heading-result-aliigning">
        <h1-headingresultaligning>Aligning & Accelerating Business Result</h1-headingresultaligning>
        <h6 className="heading-webring">
          "We bring together the Digital Marketing Operations, IT operations, and <br />
          domain knowledge to help transform your business."
        </h6>
      </div>
    </div>



  



     {/* new div start */}









      

     <div className="all-background">


    <div className="it-solutions-container">
  <div className="image-container-welcome">
    <img src={officelab} alt="IT Solutions" />
  </div>
  <div className="text-container">
    <h1-unique-heading>Innovative IT Solutions <br /> for the Digital Age <br /> Arrc Technology</h1-unique-heading>
    <p>
      Welcome to our cutting-edge IT company. We offer a comprehensive <br />
      range of software and promotional services, leveraging the latest <br />
      technologies to drive your business forward. <br /> Our team of experts is dedicated to delivering innovative solutions <br />
      tailored to your unique needs.
    </p> 
  </div>
</div>








{/*           */}
<div className="wde-container">
  <div className="content-container">
    <div className="text1-container">
      <h1-webdevex>Web Development Expertise</h1-webdevex>
      <h5 className="ui"><span className="ux">UI/UX Design</span></h5>
      <h6>Create intuitive and visually appealing interfaces that enhance user experiences.</h6>

      <h5 className="website"><span className="ux">Website Development</span></h5>
      <h6>Build responsive and dynamic websites using cutting-edge technologies.</h6>

      <h5 className="website"> <span className="ux">E-Commerce Solutions</span></h5>
      <h6>Develop secure and scalable online stores to boost your digital presence.</h6>

      <h5 className="website"> <span className="ux">CMS Integration</span></h5>
      <h6>Implement user-friendly content management systems for easy website updates.</h6>
    </div>
    <div className="image1-container">
      <img src={manlaptop} alt="Technology" />
    </div>
  </div>
</div>





{/*  */}

<div className="ots-container">
  <div className="c-container">
    <div className="text2-container">
      <h1-ourtechnologystack>Our Technology Stack</h1-ourtechnologystack>
      <h5 className="codeoficon my-4"><CodeOffIcon/></h5>
      <h5 className="webtechnologies">Web Technologies</h5>
      <h6 className="create">Create intuitive and visually appealing interfaces that enhance user experiences.</h6>

      <h4 className="PhoneAndroidIcon my-4"><PhoneAndroidIcon/></h4>
      <h5 className="mobile">Mobile Development</h5> 
      <h6 className="reactnative">React Native, Swift, and Java for cross-platform and native mobile apps.</h6>

      <h4 className="StorageIcon my-4"><StorageIcon/></h4>
      <h5 className="Database">Databases</h5> 
      <h6 className="reactnative">React Native, Swift, and Java for cross-platform and native mobile apps.</h6>

      <h4 className="CloudIcon my-4"><CloudIcon/></h4>
      <h5 className="Cloud">Cloud and DevOps</h5> 
      <h6 className="reactnative">AWS, Digital Ocean, and GitHub for seamless deployment and collaboration.</h6>
    </div>
    <div className="image2-container">
      <img src={technologystack} alt="Technology" />
    </div>
  </div>
</div>




{/* new div startt*/}



<div className="mobileapp">
  <div className="card-mobile">
    <h1-card-title-mobile><b>Mobile App Development</b></h1-card-title-mobile>
    <div className="container-mobile">
      <div className="row">
       
      </div>
      <div className="row">
        <div className="ios">
          <h4>IOS Development</h4>
          <h6>Create Stunning native IOS apps using swift and the latest Apple technologies</h6>
        </div>
        <div className="ios">
          <h4>Android Development</h4>
          <h6>Develop Feature-rich Android apps using java and kotlin</h6>
        </div>
        <div className="ios">
          <h4>Cross-platform Solutions</h4>
          <h6>Build Efficient Apps for multiple platforms using React Native</h6>
        </div>
      </div>
    </div>
  </div>
</div>

 

{/* new div */}



     <div className="enterprise-container">
  <div className="enterprise-image-container">
    <img src={enterprise} alt="enterprise" />
  </div>
  <div className="enterprise-text-container">
    <h1-enterprise>Enterprise Solutions</h1-enterprise>
    <h5>Custom CRM</h5>
    <h6>Tailor-made customer relationship management systems to streamline your sales  processes.</h6>

    <h5 className="erpsolutions my-4">ERP Solutions</h5>
    <h6>integrated enterprise resourse planning software to optimize your business operations. </h6>

    
    <h5 className="erpsolutions my-4">HRMS</h5>
    <h6>comprehensive human resourse management systems to enhance workforce productivity. </h6>


    <h5 className="erpsolutions my-4">POS System</h5>
    <h6>Efficient point of-sale solutions for retail and hospitality bussiness.</h6>
  </div>
</div> 




{/* Advance Technologies */}


<div className="advancetech-container">
  <div className="content-advancetech-container">
    <div className="text1-advancetech-container">
      <h1>Advance Technologies</h1> 
      <h5 className="website1"><TbHexagonNumber1Filled className="icon-advancetech" /><span className="Artiintelle">Artificial Intelligence</span></h5>
      <h6>Implement AI solutions to automate processes and gain valuable insights.</h6>

      <h5 className="website1"><TbHexagonNumber2Filled className="icon-advancetech" /><span className="Artiintelle">Machine Learning</span></h5>
      <h6>Leverage ML algorithms to predict trends and optimize decision-making.</h6>

      <h5 className="website1"><TbHexagonNumber3Filled className="icon-advancetech" /><span className="Artiintelle">Cloud Computing</span></h5>
      <h6>Utilize cloud technologies for scalable and flexible IT infrastructure.</h6>

      <h5 className="website1"><TbHexagonNumber4Filled className="icon-advancetech" /><span className="Artiintelle">Business Intelligence</span></h5>
      <h6>Transform raw data into actionable insights for informed business strategies.</h6>
    </div>
    <div className="Artiintelle-image1-container">
      <img src={advancetech} alt="Technology" />
    </div>
  </div>
</div>







{/*   digital marketing */}

<div className="digitalmarketing-service-container">
  <div className="digitalmarketing-service-image-container">
    <img src={digitalrobot} alt="enterprise" />
  </div>
  <div className="digitalmarketing-service-text-container">
    <h1>Digital Marketing Services</h1>
    <h5>Search Engine Optimization</h5>
    <h6>Boost your online visibility and drive organic traffic to your website.</h6>

    <h5 className="digitalmarketing-service-optimization my-4">Social Media Marketing</h5>
    <h6>Engage your audience and build brand awareness across popular social platforms.</h6>

    <h5 className="digitalmarketing-service-optimization my-4">Content Marketing</h5>
    <h6>Create compelling content that resonates with your target audience.</h6>

    <h5 className="digitalmarketing-service-optimization my-4">Pay-Per-Click Advertising</h5>
    <h6>Maximize your ROI with targeted Google AdWords and social media ad campaigns.</h6>
  </div>
</div>





{/*   new div started      */}



<div className="multimedia-container">
  <h1>Multimedia and Branding</h1>
  <div className="multimedia-row">
    <div className="multimedia-item">
      <img src={mmb} alt="Branding 1" />
      <h3>Branding Strategy</h3>
      <p>Develop a cohesive branding strategy to resonate with your audience.</p>
    </div>
    <div className="multimedia-item">
      <img src={mmb1} alt="Branding 2" />
      <h3>Creative Design</h3>
      <p>Create visually appealing designs that enhance brand identity.</p>
    </div>
    <div className="multimedia-item">
      <img src={mmb2} alt="Branding 3" />
      <h3>Marketing Campaigns</h3>
      <p>Launch effective marketing campaigns to boost brand recognition.</p>
    </div>
  </div>
</div>









{/* sms start */}


<div className="sms-container">
  <div className="sms-content-container">
    <div className="sms-text-container">
      <h1>Specialized Marketing Services</h1>
      <div className="sms-grid">
        <div className="sms-grid-item">
          <h5>Service</h5>
          <p>Bulk SMS</p>
          <p>Email Marketing</p>
          <p>Voice Calling</p>
          <p>Election Campaigns</p>
        </div>
        <div className="sms-grid-item">
          <h5>Description</h5>
          <p>Reach a wide audience with targeted text message campaigns.</p>
          <p>Design and execute effective email strategies for customer engagement.</p>
          <p>Utilize automated voice calls for notifications and promotions.</p>
          <p>Develop comprehensive digital strategies for political campaigns.</p>
        </div>
      </div>
    </div>
    <div className="sms-image-container">
      <img src={sms} alt="Technology" />
    </div>
  </div>
</div>

























</div>







    </>
  );
}

export default Service;
