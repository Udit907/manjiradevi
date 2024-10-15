import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupForm from './PopupForm';  // Ensure this file exists and the name is correct
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Notnav.css";

const Notnav = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

 
  return (
    <div>
      <div className="container-fluid ww3">
        <div className="row mb-0">
          <div className="col-md-4 mt-1 ">
            <img src="smt3.png" height="110px" width="230px" alt="Manjira Logo" />
          </div>
          
          <div className="col-md-3">
            <p className="a1">
            <a href="tel:+91-80063-45557" className="bi bi-telephone-fill a me-2 mb-0 "><span className="me-5">+91-80063-45557</span></a>
            <br />
            <a href="tel:+91-80063-45558" className="bi bi-telephone-fill a me-2 mb-0 "><span className="me-5">+91-80063-45558</span></a>
          
          {/*  <a  href="https://wa.me/918006345557" className="fa-brands fa-whatsapp -/* a me-2 mb-0 "><span className="me-5">918006345557</span></a>*/}
           
</p>
          </div>
          <div className="col-md-3 lo">
            
          <button type="button" class="btn btn-outline-warning"><Link to="/enquiryform" className=" p-2 lo1 " >Enquiry Form</Link></button>
            <h6 className="ml-2 cl mt-2">Click here Fee payment</h6>
          </div>
          <div className="col-md-2">
            <Link to="/entrancepdf" className="n" data-aos="fade-up">
              <h6 className="add p-1">Ph.D & B.Ed Admissions open June- 2024</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notnav;
