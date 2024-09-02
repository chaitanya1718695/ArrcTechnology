import React, { useState, useRef, useEffect } from "react";
import { CountUp } from "countup.js";
import { Link } from "react-router-dom";
import "../assets/CSS/DemoHome.css";
import sophiaback from "../assets/sophiaback.jpg";
import sophiatherobothat from "../assets/sophia_therobot_hat.jpg";
import robotics from "../assets/roboblue.jpg";
import robotics1 from "../assets/computerrobo.jpg";
import robotics2 from "../assets/womenrobot.jpg";
import slideimage1 from "../assets/digitalslider.jpg";
import slideimage2 from "../assets/ecommerceslide.jpg";
import slideimage3 from "../assets/appdevslide.jpg";
import slideimage4 from "../assets/softdevslide.jpg";
import slideimage5 from "../assets/digitalslider.jpg";
import slideimage6 from "../assets/ecommerceslide.jpg";
import slideimage7 from "../assets/appdevslide.jpg";
import slideimage8 from "../assets/softdevslide.jpg";
// import slideimage9  from "../assets/womenrobot1.jpg";
import runningrobo from "../assets/runningrobo.jpg";

import cardimg1 from "../assets/Aiimage.jpg";
import cardimg2 from "../assets/digitalmarketing.jpg";
import cardimg3 from "../assets/websitedevelopment.jpg";
import cardimg4 from "../assets/appdevelopment.jpg";
import cardimg5 from "../assets/softwaredevelopment.jpg";
import cardimg6 from "../assets/ecommercesolutions.jpg";
import manimage1 from "../assets/blackrobo.jpg";

import { IoSettingsOutline } from "react-icons/io5";
import { TbFileSearch } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

import { FaRegHandshake } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsAward } from "react-icons/bs";

function DemoHome() {
  const images = [
    slideimage1,
    slideimage2,
    slideimage3,
    slideimage4,
    slideimage5,
    slideimage6,
    slideimage7,
    slideimage8,
  ];

  const captions = [
    "DigitalMarketing",
    "ECommerce Solutions",
    "App Development",
    "Software Development",
    "DigitalMarketing",
    "ECommerce Solutions",
    "App Development",
    "Software Development",
  ];

  const slideLinks = [
    "/digitalmarketing",
    "/ecommerce",
    "/appdev",
    "/softdev",
    "/digitalmarketing",
    "/ecommerce",
    "/appdev",
    "/softdev",
  ];

  const slides = images.concat(images);
  const slideCaptions = captions.concat(slideLinks);

  //  counter

  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (startCounting) {
      const options = { duration: 2.0 }; // 2 seconds for fast counting
      const projectCounter = new CountUp("project-counter", 8000, options);
      const clientCounter = new CountUp("client-counter", 500000, options);
      const awardCounter = new CountUp("award-counter", 200000, options);

      if (!projectCounter.error) projectCounter.start();
      if (!clientCounter.error) clientCounter.start();
      if (!awardCounter.error) awardCounter.start();
    }
  }, [startCounting]);

  useEffect(() => {
    const currentCounterRef = counterRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (currentCounterRef) {
      observer.observe(currentCounterRef);
    }

    return () => {
      if (observer && currentCounterRef) {
        observer.unobserve(currentCounterRef);
      }
    };
  }, []);

  return (
    <>
      <div className="demohome-backgroundcolor-runningrobo">
        <div className="runningrobo">
          <img
            className="runningrobo-image"
            src={runningrobo}
            alt="running robot"
          />
        </div>
        <div className="runningrobo-heading">
          <h1>We bring robots to life.</h1>
          <h6>
           <center> Hanson Robotics and Ai Robotics company dedicated to creating
           socially intelligent machines that enrich the quality of our lives.</center>
          </h6>
        </div>
      </div>

      {/*  new div start */}
      <div className="DemoHome-backgroundcolor">
        <div className="likerobot">
          <h1 className="likerobot-title">
            <center>Why human-like robots?</center>
          </h1>
          <h6 className="likerobot-subtext">
            Robots will soon be everywhere. How can we nurture them to be our
            friends and useful collaborators? Robots with good aesthetic design,
            rich personalities, and social cognitive intelligence can
            potentially connect deeply and meaningfully with humans.
          </h6>
          <button type="button" className="DemoHome-button">
            OUR ROBOTS
          </button>
        </div>
      </div>

      {/* new div */}

      <div className="DemoHome-backgroundcolor1">
        <div className="hansonai-container">
          <div className="hansonai-text">
            <h1-hanson>Hanson AI</h1-hanson>
            <h5>Developing Meaningful AI Interactions</h5>
            <h6>
              Hanson AI develops cognitive architecture and AI-based tools that
              enable our robots to simulate human personalities, have meaningful
              interactions with people, and evolve from those interactions. Our
              team of renowned AI scientists conducts advanced research to build
              the most compelling robotics and AI platform for research, media,
              and service applications.
            </h6>
            <button type="button" className="DemoHome1 my-4">
              <b>HANSON AI</b>
            </button>
          </div>
          <img src={sophiaback} alt="Sophia Back" className="hansonai-image" />
        </div>
      </div>

      {/*                   div end                   */}
      {/*                      div start               */}

      <div className="DemoHome-backgroundcolor2">
        <div className="container-sophia">
          <div className="row-sophia">
            <div className="col-sm-6 image-container">
              <img
                src={sophiatherobothat}
                alt="sophiatherobothat"
                className="sophiatherobothat"
              />
            </div>
            <div className="text-container-sophia">
              <h2 className="being">
                BEING <span className="sphia">Sophia</span>
              </h2>
              <h5>AI Coming Of Age</h5>
              <h6>
                Being Sophia is about Sophia’s emerging life, adventures, <br />
                experiences, and quest to learn and develop into a super- <br />
                intelligent, benevolent being. Join her as she embarks <br /> on
                her adventures and incredible journey of becoming <br /> a
                conscious, living machine.
              </h6>
              <button type="button" className="book">
                Book Sophia For Your Next Virtual Event!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*                              new div start                        */}

      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={robotics} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2>ARRC TECHNOLOGY</h2>
              <p>
                "AI and automation are transforming industries driving
                efficiency and opening up
                <br /> new possibilities for creativity and innovation in ways
                we never imagined."
              </p>
              <button className="technologybutton">Technology</button>
              <button className="technologybutton">Web Development</button>
              <button className="technologybutton">Tech Fun</button>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={robotics1} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2>The Best Coding Blog</h2>
              <p>Technology news, development, and Trends</p>
              <button className="technologybutton">Technology</button>
              <button className="technologybutton">Web Development</button>
              <button className="technologybutton">Tech Fun</button>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={robotics2} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Artificial Intelligence</h2>
              <p>New Era New Technology</p>
              <button className="technologybutton">Technology</button>
              <button className="technologybutton">Web Development</button>
              <button className="technologybutton">Tech Fun</button>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* new div */}

      <div className="DemoHome-backgroundcolor2">
        <div className="DemoHome-Ourservice">
          <h1 className="oservice">
            <center>
              <b>Our Services</b>
            </center>
          </h1>
          <h6 className="discover my-4">
            <center>
              Discover our diverse range of services tailored to help you
              transform your business with innovative <br /> IT solutions.
            </center>
          </h6>
        </div>

        <div className="DemoHomeCard-Container">
          <div className="DemoHome-card">
            <img src={cardimg1} className="Demohomecardimage" alt="Card 1" />
            <h1-1>
              <center>SEO/SEM Solutions</center>
            </h1-1>
            <h6>
              <center>
                Our customer-centric approach makes us a unique solutions
                provider for website designing & development. Our expert
                development team is specialized in building static, dynamic,
                functional, responsive, SEO Friendly & user-friendly websites.
              </center>
            </h6>

            <Link to="/seosem" className="DemoHomeCardButton">
              <center>
                <b>Read More</b>
              </center>
            </Link>
          </div>

          <div className="DemoHome-card">
            <img src={cardimg2} className="Demohomecardimage" alt="Card 2" />
            <h1-1>
              <center>Digital Marketing</center>
            </h1-1>
            <h6>
              <center>
                Our customer-centric approach makes us a unique solutions
                provider for website designing & development. Our expert
                development team is specialized in building static, dynamic,
                functional, responsive, SEO Friendly & user-friendly websites.
              </center>
            </h6>

            <Link to="/digitalmarketing" className="DemoHomeCardButton">
              <center>
                <b>Read More</b>
              </center>
            </Link>
          </div>

          <div className="DemoHome-card">
            <img src={cardimg3} className="Demohomecardimage" alt="Card 3" />
            <h1-1>
              <center>Website Development</center>
            </h1-1>
            <h6>
              <center>
                Our customer-centric approach makes us a unique solutions
                provider for website designing & development. Our expert
                development team is specialized in building static, dynamic,
                functional, responsive, SEO Friendly & user-friendly websites.
              </center>
            </h6>
            <Link to="/webdev" className="DemoHomeCardButton">
              <center>
                <b>Read More</b>
              </center>
            </Link>
          </div>

          <div className="DemoHome-card">
            <img src={cardimg4} className="Demohomecardimage" alt="Card 4" />
            <h1-1>
              <center>App Development</center>
            </h1-1>
            <h6>
              <center>
                We develop apps that stand out from the crowd. We are a
                fast-growing mobile application development firm, working
                closely with clients to understand their requirements & suggest
                cost-effective, scalable & robust mobile solutions.
              </center>
            </h6>
            <Link to="/appdev" className="DemoHomeCardButton">
              <center>
                <b>Read More</b>
              </center>
            </Link>
          </div>
          <div className="DemoHome-card">
            <img src={cardimg5} className="Demohomecardimage" alt="Card 5" />
            <h1-1>
              <center>Software Development</center>
            </h1-1>
            <h6>
              <center>
                Our customer-centric approach makes us a unique solutions
                provider for website designing & development. Our expert
                development team is specialized in building static, dynamic,
                functional, responsive, SEO Friendly & user-friendly websites.
              </center>
            </h6>
            <Link to="/softdev" className="DemoHomeCardButton">
              <center>
                <b>Read More</b>
              </center>
            </Link>
          </div>
          <div className="DemoHome-card">
            <img src={cardimg6} className="Demohomecardimage" alt="Card 6" />
            <h1-1>
              <center>E-Commerce Solutions</center>
            </h1-1>
            <h6>
              <center>
                Our customer-centric approach makes us a unique solutions
                provider for website designing & development. Our expert
                development team is specialized in building static, dynamic,
                functional, responsive, SEO Friendly & user-friendly websites.
              </center>
            </h6>
            <Link to="/" className="DemoHomeCardButton">
              <center>
                <b>Read More</b>
              </center>
            </Link>
          </div>
        </div>

        {/* new div started */}

        <div className="Processwefollow">
          <h1 className="process">
            <b>Process We Follow</b>
          </h1>
          <h6 className="user-friendly">
            <b>
              Our skill lies in creating websites & mobile apps that are very
              user-friendly. We enable you to design & <br />
              convey the capacities to reach your ideal customers.
            </b>
          </h6>
        </div>

        <div className="container-Design-development">
          <div className="box-demohome">
            <IoSettingsOutline />
            <h2 className="designh1">DESIGN</h2>
            <p>
              We develop a strategy for your business & plan accordingly
              considering requirements. Our solutions are designed in-house,
              from the ground up.
            </p>
          </div>

          <div className="box-demohome">
            <TbFileSearch />
            <h2 className="designh1">DEVELOPMENT</h2>
            <p>
              After design, we start the work on your project & provide you with
              drafts & prototypes. That way, you have the freedom to test your
              website, mobile app.
            </p>
          </div>

          <div className="box-demohome">
            <RiVerifiedBadgeFill />
            <h2 className="designh1">DELIVERY/LAUNCH</h2>
            <p>
              The final stage is taking the work live and ensuring that your
              website is error-free or your mobile app meets the app store
              guidelines.
            </p>
          </div>

          <div className="box-demohome">
            <HiOutlineRocketLaunch />
            <h2 className="designh1">SUPPORT</h2>
            <p>
              We value our client relationships & focus on building connections
              that last beyond our project. We pride ourselves on providing
              personal service.
            </p>
          </div>
        </div>
      </div>

      {/* new div */}

      <div className="home-backcolor1">
        <div className="container-home1">
          <div className="image-container-home1">
            <img src={manimage1} className="manimage1" alt="" />
          </div>
          <div className="text-container-home1">
            <h1>What We're All About</h1>
            <p>
              We assure you to give best innovative, creative solutions for
              digital marketing & web development. We promised to give cost
              effective online marketing solution to maximize profit.
            </p>
            <h6>
              ArrcTechnology is best Digital Marketing and Website Development
              Compa <br /> ny it's different from your traditional marketing
              agency.
            </h6>
          </div>
        </div>

        {/* counter */}

       








        <div className="processwefollow1-demohome">
          <h1 className="processwefollow-heading">Process We Follow</h1>
          <p className="processwefollow-description">
            Our skill lies in creating websites & mobile apps that are very
            user-friendly. We enable you to design & convey the capacities to
            reach your ideal customers.
          </p>
        </div>

        <div className="flipping-card-container">
          <div className="flipping-card-row">
            <div className="card-flipping card-flipping-0">
              <div className="card-inner">
                <div className="card-front">
                  <IoSettingsOutline />
                  <h3>
                    <center>DESIGN</center>
                  </h3>
                  <p>
                    <center>
                      We develop a strategy for your business & plan accordingly
                      considering requirements. Our solutions are designed
                      in-house, from the ground up
                    </center>
                  </p>
                </div>
                <div className="card-back">
                  <h3>
                    <center>DESIGN</center>
                  </h3>
                  <p>
                    <center>
                      {" "}
                      Our team develop a stratergy for your bussiness and plan
                      accordingly considering requirements. Our solutions are
                      designed in-house, from the ground up.
                    </center>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-flipping card-flipping-1">
              <div className="card-inner">
                <div className="card-front">
                  <TbFileSearch />
                  <h3>
                    <center>DEVELOPMENT</center>
                  </h3>
                  <p>
                    <center>
                      After design, we start the work on your project & provide
                      you with drafts & prototypes. That way, you have the
                      freedom to test your website, mobile app.
                    </center>
                  </p>
                </div>
                <div className="card-back">
                  <h3>
                    <center>DEVELOPMENT</center>
                  </h3>
                  <p>
                    <center>
                      Our development team ensures that your project is built to
                      the higher standereds, deleivering a robuest and scalable
                      solutions.
                    </center>
                  </p>
                </div>
              </div>
            </div>

            <div className="card-flipping card-flipping-2">
              <div className="card-inner">
                <div className="card-front">
                  <RiVerifiedBadgeFill />
                  <h3>
                    <center>DELEIVERY/LAUNCH</center>
                  </h3>
                  <p>
                    <center>
                      The final stage is taking the work live and ensuring that
                      your website is error-free or your mobile app meets the
                      app store guidelines.
                    </center>
                  </p>
                </div>
                <div className="card-back">
                  <h3>
                    <center>DELEIVERY/LAUNCH</center>
                  </h3>
                  <p>
                    <center>
                      We handled the deployment process, ensuring a smooth
                      launch and everyting is set up correctly.
                    </center>
                  </p>
                </div>
              </div>
            </div>

            <div className="card-flipping card-flipping-3">
              <div className="card-inner">
                <div className="card-front">
                  <HiOutlineRocketLaunch />
                  <h3>
                    <center>SUPPORT</center>
                  </h3>
                  <p>
                    <center>
                      We value our client relationships & focus on building
                      connections that last beyond our project. We pride
                      ourselves on providing personal service.
                    </center>
                  </p>
                </div>
                <div className="card-back">
                  <h3>
                    <center>SUPPORT</center>
                  </h3>
                  <p>
                    <center>
                      Our support team is always avialble to assist you ,
                      ensuring that your needs are met and your project runs
                      smoothly.
                    </center>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-slider-track my-4">
          <div className="slide-demohome-mltiple-image-slider">
            {slides.map((image, index) => (
              <div key={index} className="slide-multiple-images">
                <img src={image} alt={`slide ${index + 1}`} />
                <div className="caption">
                  <a href={slideLinks[index]}>{slideCaptions[index]}</a>
                </div>{" "}
                {/* Unique caption */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DemoHome;
