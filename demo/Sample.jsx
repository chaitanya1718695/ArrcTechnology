import "../assets/CSS/Sample.css";
import React from 'react';
import robo from "../assets/robo.jpg";
import robo1 from "../assets/goldenwomen.jpg";

function Sample() {
  return (
    <div className="background-color-service">
      <div className="card-container-service">  
        <div className="card-service red-black">
          <div className="card-image-service">  
            <img src={robo} alt="Red and black themed robot" />
          </div>
          <div className="card-content">
            <h2>Why Do We Use It ?</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
        <div className="card-service green-black">
          <div className="card-image-service">
            <img src={robo1} alt="Green and black themed golden woman" />
          </div>
          <div className="card-content">
            <h2>Why Do We Use It ?</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sample;
