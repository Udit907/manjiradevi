import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function BscAgr() {
  return (
    <div className="School1-page">

     
      <div className="container mt-2">
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
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          ><br/>
         Covers agronomy, soil science, plant breeding and genetics, agricultural economics, farm management, and agricultural engineering. Includes practical training in agricultural practices and fieldwork.<br></br>
                <span className="nursing-span">Duration: </span>
                <span> 4 Years (8 Semesters).</span><br/>
                <span className="nursing-span">Eligibility: </span>Intermediate in Agri. Science/PCB/PCM/PCMB. Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 % and SC/ST- 45 %<br/>
                <span> 
                <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Agricultural Officer,  </b> <br/>
                 <b>2.Farm Manager, </b><br/>
                 <b>3.Crop Consultant,</b><br/>
                 <b>4.Agricultural Researcher,</b><br/>
                 <b>5.Extension Officer, </b><br/>
                 <b>6.Agribusiness Manager</b></span><br/><br/>
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

export default BscAgr;