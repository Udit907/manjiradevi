import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Mca() {
  return (
    <div className="School1-page">
        <div class="container-fluid mca-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  "  > Master of Computer Applications (MCA)</h2></center>
   
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
           <div className="col-md-0"></div>
          <h2 className="mb-2 mt-4 nursingh">
                <span className="nursing-span">Course </span>Overview
              </h2>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          >Advanced study in computer applications, software development, algorithms, data structures, cyber security, and project management. Includes practical training and project work
          <br></br>
          
                <span className="nursing-span">Duration: </span>
                <span>3 Years (6 Semesters)</span><br/>
                <span className="nursing-span">Eligibility: </span> B.Sc. with Mathematics OR B.Sc. C.S. OR  B. Tech. C.S. (10+2+4 Scheme). Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 %  and SC/ST- 45 %.
              <br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Software architect, </b><br/>
                 <b>2.Systems analyst,  </b><br/>
                 <b>3.IT consultant, </b><br/>
                 <b>4.Database manager,</b><br/>
                 <b>5.Network administrator,</b><br/>
                 <b>6.Software developer in specialized domains like AI, cloud computing, cyber security.</b>
                 </span><br/><br/>
              </div>
          &emsp;&emsp;&emsp;<div className="col-md-4 image-column"><br/><br/>
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
      
      <Library/>
    </div>
  );
}

export default Mca;