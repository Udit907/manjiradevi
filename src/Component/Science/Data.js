import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Data() {
  return (
    <div className="School1-page">
         <div class="container-fluid data-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  "  > Diploma - Artificial Intelligence and Machine Learning / Data Science & Cloud Technology / Cyber Security / Forensic Science</h2></center>
   
  </div>
      </div>
    </div>
</div>
      
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
          <h2 className="mb-2 mt-4 nursingh">
                <span className="nursing-span">Course </span>Overview
              </h2>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          > Provides specialized training in Artificial Intelligence (AI) and Machine Learning, Data Science and Cloud Technology, Cyber Security, or Forensic Science. Focuses on practical skills and applications in respective fields.
          <br></br>
          
                <span className="nursing-span">Duration: </span>
                <span>1 Years</span><br/>
                <span className="nursing-span">Eligibility: </span>  Requires a minimum of higher secondary education (10+2) or equivalent. 
              <br/>
              <span className="nursing-span">Career Opportunities:</span>
                <span> <br/>
                 <b>1.AI and Machine Learning:</b> AI engineer, machine learning engineer, data scientist.<br/>
                 <b>2.Data Science & Cloud Technology: </b>Data analyst, cloud engineer, data engineer.<br/>
                 <b>3.Cyber Security </b>oCyber security analyst, ethical hacker, security consultant.<br/>
                 <b>4.Forensic Science: </b>Forensic scientist, crime scene investigator, forensic analyst.<br/>
                 </span><br/>
              </div>
          &emsp;&emsp;&emsp;&emsp;<div className="col-md-4 image-column"><br/><br/>
            <img
              style={{ height: "65%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <br></br>
      </div>
      
      <Library/>
    </div>
  );
}

export default Data;