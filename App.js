import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./demo/Home";
// import About from "./demo/About";
import ContactUs from "./demo/ContactUs";
import Dummy from "./demo/Dummy";
import Service from "./demo/Service";
// import Sample from "./demo/Sample";
import Recruitment from "./demo/Recruitment";
import DemoHome from "./demo/DemoHome";
import Softwaresolutions from  "./demo/Softwaresolutions";
import Seosem from "../src/demo/Categiry/SeoSem";
import DigitalMarketing from "../src/demo/Categiry/DigitalMarketing";
import Webdev from "../src/demo/Categiry/Webdev";
import Appdev from "./demo/Categiry/Appdev";
import Softdev from "./demo/Categiry/Softdev";
import ECommerce from "./demo/Categiry/Ecommerce";
import Cybersecurity from "./demo/Cybersecurity";
// import Websitedev from "./demo/Softwaresolutions/WebsiteDev.jsx";
 


import Navbaar from "./demo/Navbaar";
// import "./assets/CSS/Service.css"


import Footer from "./demo/Footer";


function App() {
  return (
    <div className="Cursor">
      <Router>
        <Navbaar/>
       
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/contactus" element={<ContactUs />} />
       
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/service"element={<Service />} />
          {/* <Route path="/sample" element={<Sample />} /> */}
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/" element={<DemoHome />} />
          <Route path="softwaresolutions" element={<Softwaresolutions />} />
          <Route path="/seosem" element={<Seosem />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="appdev" element={<Appdev />} />
          <Route path="/softdev" element={<Softdev />} />
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
            
          
          {/* <Route path="/websitedev" element={<Websitedev />} /> */}
         
          
        </Routes>
        <Footer/>

      </Router>
    </div>
  );
} 

export default App;



