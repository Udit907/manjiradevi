import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Phd() {
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
          1.Research Areas: Finance, Marketing, Human Resources, Organizational Behavior, Strategic Management, Entrepreneurship, International Business.
          <br/>
          2.Skills Developed:
          Advanced research skills, critical analysis, academic writing, and subject matter expertise.<br></br>
         
                <span className="nursing-span">Duration: </span>
                <span> 3-6 Years.</span><br/>
                <span className="nursing-span">Eligibility: </span><b><br/>1. Educational Qualification:</b>  Master’s Degree from any UGC recognized University/ AICTE approved Institutions or any other qualification recognized as equivalent there to in the notified fields of study with a minimum 55% of marks or equivalent CGPA (50% marks or equivalent CGPA for SC/ST candidates)<br/>
               <b> 2. </b>Admission to the Ph.D. program (both formats) is based on Academic Record, Performance in the University Entrance Test and Interview. Candidates with valid NET/ SLET/GATE qualified are exempted from the Entrance Test.<br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.University Professor</b> <br/>
                 <b>2.Senior Researcher</b><br/>
                 <b>3.Business Analyst</b><br/>
                 <b>4.Policy Advisor</b><br/>
                 <b>5.Consultant</b>
            </span><br/><br/>
              </div>
        &emsp;&emsp;&emsp;&emsp; <div className="col-md-4 image-column"><br/><br/><br/>
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

export default Phd;