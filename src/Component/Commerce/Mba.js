import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Mba() {
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
          1.Core Subjects: Strategic Management, Business Analytics, Financial Accounting, Organizational Behavior, Operations Management.
          <br/>
          2.Finance Specialization:
          Corporate Finance, Investment Analysis, Financial Markets, Risk Management.<br></br>
          3.Marketing Specialization:
          Corporate Finance, Investment Analysis, Financial Markets, Risk Management.<br></br>
          4.Finance Specialization: 
          Corporate Finance, Investment Analysis, Financial Markets, Risk Management.<br></br>
          5.HR Specialization:
          Talent Management, Organizational Development, Employee Relations, Compensation Management.<br></br>
          6.Skills Developed:
          Leadership, strategic thinking, analytical skills, specialized knowledge in chosen field.<br></br>
          <span className="nursing-span">Subjects:</span>
                <span> Finance, Marketing, Human Resources (HR)</span><br/>
                <span className="nursing-span">Duration: </span>
                <span> 2 Years (4 Semesters).</span><br/>
                <span className="nursing-span">Eligibility: </span><b><br/>1. Educational Qualification:</b> Any Graduation<br/>
               <b> 2.Minimum Aggregate Score Requirement:</b> Gen/OBC-50 % OR equivalent CGPA/OGPA  and SC/ST- 45 % <br/>
                <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Finance Manager</b> <br/>
                 <b>2.Marketing Director</b><br/>
                 <b>3.HR Manager</b><br/>
                 <b>4.Business Development Manager</b><br/>
                 <b>5.Management Consultant</b>
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

export default Mba;