import React from 'react';
import "../Categiry/CSS/Digitalmarketing.css";
import digital from "./digitalmarket.jpg";
import marketing from "./marketing.jpg";

function DigitalMarketing() {
  return ( 
    <>
      <div className="backgroundcolordigitalmarketing">
        <div className="digital-image">
          <img src={digital} alt="Digital Marketing" />
        </div>
      </div>

      <div className="backgroundcolordigitalmarketing1">
        <div className="digitalmediamarketing my-4">
          <h1>Digital Media Marketing Services</h1>
          <p>Grow your online presence with the best result-driven Digital Marketing Agency. Arrc Technology offers solutions for SEO, SEM, PPC, ORM, Lead Generation campaigns along with innovative digital solutions.</p>
          <p>Digital marketing is the marketing of products or services using digital technologies and media, mainly on the internet. It covers advertising through online channels such as search engines, websites, social media, email, mobile apps, and other digital mediums.</p>
          <p>Digital marketing focuses on engaging with customers and growing your business. It plays a significant role for both customers and companies. Arrc Technology provides synergistic platforms as per the customer's requirements, believing in long-term commitment to attract new prospects, build brand awareness, and generate leads.</p>
        </div>
      </div>

      <div className="backgroundcolordigitalmarketing2">
        <div className="digital-container">
          <img src={marketing} className="marketingimg" alt="Digital Marketing" />
          <div className="text-content">
            <h2>Advantages of Digital Marketing For Business</h2>
            <ul>
              <li>Digital marketing is the most powerful form of marketing.</li>
              <li>It is the most cost-effective way to market your business.</li>
              <li>Digital marketing is highly measurable.</li>
              <li>Targeted campaigns reach the right customers at a lower cost compared to traditional methods.</li>
              <li>Allows you to target your ideal buyers effectively.</li>
              <li>Helps you reach customers on social media.</li>
              <li>Adapt strategies quickly for best results.</li>
              <li>Earn people’s trust and build brand reputation.</li>
              <li>Gain insights into competitors.</li>
              <li>Real-time results.</li>
              <li>Improve outreach.</li>
            </ul>
          </div>
        </div>
      </div>




      {/* new div */}

      <div className='backgroundcolordigitalmarketing3 '>
        <h2 className='whatwe my-4'>What We Do</h2>
        <h5>We are a creatively led, strategically driven, techno-friendly full-service Digital Marketing Agency with an expert team. We help companies strike a conversation with their target audience through a strong digital marketing strategy. This involves understanding:</h5>
        <ul className='customers-objectives'>
            <li>The customer's objectives</li>
            <li>The customer segment they are trying to serve</li>
            <li>The values the customer stands for</li>
        </ul>

        <h5>We create performing ads with strategic precision for your brands, ad servers, and audiences, and re-target verified leads for your business continuously.</h5>
     




      <div className='agency my-4'>
        <h2>What Makes Us the Best Digital Marketing Agency
        </h2>
        <ul className='provide-360'>
         <li>We provide a 360° approach to Digital Marketing.</li>
         <li>Our culture of going above and beyond to deliver results, no matter what.</li>
         <li>We believe in "When you win, we win. When you lose, we lose."</li>
         <li>Empowering brands with end-to-end digital solutions and services.</li>
         <li>The leading independent digital agency in India.</li>
         <li>Award-winning campaigns and business-critical ideas.</li>
         <li>Established client engagement models for maximum ROI.</li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default DigitalMarketing;
