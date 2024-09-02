import React from "react";
import "../assets/CSS/Dummy.css";

// import "../assets/CSS/Demo1.css";
// import hand from '../assets/hand.jpg';

function Dummy() {

 
 
  const cardData = [
    { title: 'VERIZON', href: 'https://www.verizon.com' },
    { title: 'Canva', href: 'https://www.canva.com' },
    { title: 'airasia', href: 'https://www.airasia.com' },
    { title: 'Wealthsimple', href: 'https://www.wealthsimple.com' },
    { title: 'wave', href: 'https://www.waveapps.com' },
  ];
  
  
  return (
    <>
    <div className="backcolor-Dummy">
    <div className="container-Dummy my-4">
        <div className="image-container-Dummy"> 
            <div className="IMG1">
                <img
                    src="https://demo.themeim.com/html/braine/assets/images/resource/story.png"
                    alt="Description"
                />
            </div>
        </div>
        <div className="text-container-Dummy">
            <h5 className="ourstory">OUR STORY</h5>
            <h1>Navigating the frontier of</h1>
            <h1>
                Our <span >intelligence</span>
            </h1>
            <p>
                The narrative unfolds as we delve into the inception of our
                company, tracing the roots of our vision for a future intertwined
                with artificial intelligence. Through the lens of this captivating
                chronicle, readers will witness the trials and triumphs that have
                shaped. the story weaves together the intricate threads of
                innovation
            </p>
            <p>Through anecdotes and case studies, readers will witness the tangible difference our innovations make in fields ranging from healthcare and finance to education and beyond.</p>
            <button type="button" className="knowmore mt-4"><b>Know
              more</b></button>
        </div>
    </div>
</div>






{/* new div */}






      

<div className="gray">
  <h5 className="ourstory my-4">CORE VALUE</h5>
  <h1 className="unveiling">Unveiling our <span className="intelligence">Core Values</span></h1>
  <h1 className="lasting">for lasting impact.</h1>
  <div className="container-dummy-1">
    <div className="row-dummy-1">
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card-dummy-1 blue">
          <div className="card-body-dummy-1">
            <h5 className="card-title-dummy-1"><center>People</center></h5>
            <p className="card-text-dummy-1 my-4"><center>The impact of our AI solutions on the broader world forms a central theme, highlighting real-world applications and the positive changes</center></p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card-dummy-1 red">
          <div className="card-body-dummy-1">
            <h5 className="card-title-dummy-1 my-4"><center>Innovation</center></h5>
            <p className="card-text-dummy-1"><center>The impact of our AI solutions on the broader world forms a central theme, highlighting real-world applications and the positive changes</center></p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card-dummy-1 green">
          <div className="card-body-dummy-1">
            <h5 className="card-title-dummy-1 my-4"><center>Mission</center></h5>
            <p className="card-text-dummy-1"><center>The impact of our AI solutions on the broader world forms a central theme, highlighting real-world applications and the positive changes</center></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button type="button" className="join my-4">join</button>
</div>



 

     













        <div className="backgrayblack">
      <div className="trusted">
        <h5>TRUSTED ORGANIZATION</h5>
      </div>
      <div className="card-row-compony">
        {cardData.map((card, index) => (
          <div className="card-compony" key={index}>
            <h2>
              <a href={card.href} target="_blank" rel="noopener noreferrer">
                {card.title}
              </a>
            </h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>




 <div className="backgrayblack">
    <div className="two-container">
   
    <div className="one-text-container">
      <h5 className="ourteam"><center>OUR TEAM</center></h5>
      <h1>Team behind the</h1>
      <h1 className="inovationtext">innovation</h1>
      <h6 className="loremtext"><center> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam hendrerit urna.Maecenas vitae  <br />mattis tellus.</center></h6>
    </div>
    <div className="two-images-container">
      <div className="two-image-container">
        <img src="https://demo.themeim.com/html/braine/assets/images/resource/team-2.jpg" alt="" className="responsive-image"/>
      </div>
      <div className="two-image-container">
        <img src="https://demo.themeim.com/html/braine/assets/images/resource/team-1.jpg" alt="" className="responsive-image"/>
      </div>
    </div>
   
  </div>
  </div>
    </>
  );
}

export default Dummy;
