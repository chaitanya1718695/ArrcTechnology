import React from 'react';
import ecommerce from "../Categiry/e.jpg";
import "./CSS/Ecommerce.css";
import ecommerceboy from "../Categiry/onlineisbetter.jpg";

function Ecommerce() {
  return ( 
    <> 
      <div className='ecommerce'>
        <img src={ecommerce} className='ecommerce-img' alt="E-commerce Background" />
      </div>
 
      <div className='backcolorecommerce'>
        <div className="container-ecommerce">
          <div className="image-container-ecommerce">
            <img src={ecommerceboy} alt="E-commerce Example" className="responsive-image" />
          </div>
          <div className="text-container-ecommerce">
            <h2>Professional Ecommerce Web Development Company</h2>
            <p>Arrc Technology is an eCommerce web development company in Pune which offers e-commerce development to various types of retailers, sellers, and manufacturers. E-commerce development depends on the type of business model you have like...</p>
            <p>We are a top-notch eCommerce developer in Pune. E-commerce business markets are developing at observable rates. E-commerce website design for any business enables clients to buy items from their home and from anywhere. On the web and traditional markets have different methodologies for conducting business. Traditional retailers offer fewer items due to limited space, whereas online retailers don’t require physical space as there is no rush of customers in their shop. Products are delivered to customers at their address. Pricing strategies are also different for traditional and online retailers. With the help of e-commerce web design, we can manage our product list, offers, prices, and many other things from one place.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ecommerce;
