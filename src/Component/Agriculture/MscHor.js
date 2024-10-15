import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function MscHor() {
  return (
    <div className="School1-page">
     
      <div className="container mt-3">
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
          }}
        >
          <br></br>
          <div className="col-md-0"></div>
          <h2 className="mb-0 mt-2 nursingh">
                <span className="nursing-span">Course </span>Overview
              </h2>
          <div
            className="col-md-6 text-column p-3"
            style={{ fontSize: "18px",textAlign:"justify",fontFamily:"serif" }}
          >Focuses on the study of fruits, vegetables, floriculture, landscape design, post-harvest management, and medicinal plants. Includes practical training in horticultural practices and research.<br/>
           <span className="nursing-span">Duration: </span>
           <span> 2 Years (4 Semesters).</span><br/>
           <span className="nursing-span">Eligibility: </span>B.Sc. (Ag) | B.Sc. (Ag) Hons. from Recognized University. Minimum Aggregate Score Requirement: Gen/OBC/Minority-55 % and SC/ST- 50 %<br/>
                <span> 
                <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Horticulturist, </b> <br/>
                 <b>2.Plant Breeder, </b><br/>
                 <b>3.Nursery Manager,</b><br/>
                 <b>4.Landscape Designer,</b><br/>
                 <b>5.Research Scientist,  </b><br/>
                 <b>6.Extension Specialist.</b></span><br/><br/>
            </span><br/>
          </div>
          
         &emsp;&emsp; <div className="col-md-4 image-column"><br/><br/><br/>
            <img
              style={{ height: "65%" }}
              src="/science7.jpeg"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <br></br><br></br>
      </div>
      
    </div>
  );
}

export default MscHor;