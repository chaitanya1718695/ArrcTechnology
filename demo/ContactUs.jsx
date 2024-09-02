
import React, { useState } from "react";
import "./ContactUS.css";
// import robot0 from "../assets/robot0.jpg";

function ContactUs() {
  const [formData, setFormData] = useState({
    fname: "",
    cnumber: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => { 
    let tempErrors = {};
    tempErrors.fname = formData.fname ? "" : "Name is required";
    if (formData.fname && !/^[A-Za-z ]+$/.test(formData.fname)) {
      tempErrors.fname = "Name must contain only letters";
    }

    tempErrors.cnumber = formData.cnumber ? "" : "Contact number is required";
    if (
      formData.cnumber &&
      (!/^\d+$/.test(formData.cnumber) || formData.cnumber.length !== 10)
    ) {
      tempErrors.cnumber = "Contact number must be exactly 10 digits";
    }

    tempErrors.email = formData.email ? "" : "Email is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    tempErrors.address = formData.address ? "" : "Address is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleKeyPressLetter = (e) => {
    const charCode = e.charCode;
    if (
      (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122) &&
      charCode !== 32
    ) {
      e.preventDefault();
    }
  };

  const handleKeyPress = (e) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log("Form data submitted and stored in localstorage:", formData);
    }
  };

  return (
    <>
      <div className="color">
        <div className="heading my-4">
          <h1>
            <center><b>CONTACT US</b></center>
          </h1>
        </div>
        <div className="container">
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-outline">
                <label className="form-label" htmlFor="form3Example4">
                  <b className="b"> Name</b>
                </label>
                <input
                  type="text"
                  className="form-control form-border"
                  name="fname"
                  placeholder="Enter Your Full Name"
                  value={formData.fname}
                  onChange={handleChange}
                  onKeyPress={handleKeyPressLetter}
                  maxLength="30"
                />
                {errors.fname && (
                  <div className="text-danger">{errors.fname}</div>
                )}
              </div>

              <div className="form-outline my-3">
                <label className="form-label" htmlFor="cnumber">
                  <b className="b">Contact Number</b>
                </label>
                <input
                  type="text"
                  className="form-control form-border"
                  name="cnumber"
                  placeholder="Enter Your Contact Number"
                  value={formData.cnumber}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  maxLength="10"
                />
                {errors.cnumber && (
                  <div className="text-danger">{errors.cnumber}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <b className="b">Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
            
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  <b className="b">Address</b>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="address"
                  placeholder="Enter Your Address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <div className="text-danger">{errors.address}</div>
                )}
              </div>
              <button type="submit" className="btn2 btn-primary">
                <b>Submit</b>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <div className="auto-container">
          
        </div>
        
      </div> */}



{/* 
      <div className="contacts-card-container">

      </div> */}
    </>
  );
}

export default ContactUs;
