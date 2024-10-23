import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Bba() {
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
          <span>BBA - </span>
                <span className="nursing-spans">Course </span>Overview
              </h2>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          ><br/>
         <span className="nursing-span">Subjects:</span> Management Principal, Business Economics, Organizational Behavior, Marketing Management, Financial Management, Human Resource Management, Operations Management.<br></br>
       <span className="nursing-span">Skills Developed: </span>
          Leadership, communication, problem-solving, and strategic thinking.<br></br>
          
                <span className="nursing-span">Duration: </span>
                <span> 3 Years (6 Semesters).</span><br/>
                <span className="nursing-span">Eligibility: </span> 10+2 OR equivalent in any discipline  
              <br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Business Manager</b> <br/>
                 <b>2.Marketing Executive</b><br/>
                 <b>3.Human Resource Manager</b><br/>
                 <b>4.Operations Manager</b><br/>
                 <b>5.Entrepreneur</b>
            </span><br/><br/>
              </div>
        &emsp;&emsp; <div className="col-md-4 image-column"><br/><br/><br/>
            <img
          style={{width:"520px",height:"440px",borderRadius:"8px"}}
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

export default Bba;