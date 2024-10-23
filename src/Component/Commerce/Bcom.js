import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Bcom() {
  return (
    <div className="School1-page">
      <div className='container mt-5'>
        <h1 className='library-heading'><span>B.Com - </span>	Course <span className='library-span'>Overview</span></h1>
        <div className="row" style={{
          border: "2px",
          borderRadius: "20px",
        }}>
          <div className="col-md-0"></div>
          <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            Focuses on computer applications, software development, programming languages, database management, and computer networks. Includes practical training in software development and applications.
            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3 Years (6 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria</h3>
            <p className='nursing-p'>
            10+2 OR equivalent in any discipline  
            </p>
            <h3 className='library-heading'>Career Opportunities</h3>
            <p className='nursing-p'>
              • Accountant<br />
              •	Financial Analyst<br />
              •	Business Consultant<br />
              •	Auditor<br />
              •	Tax Advisor<br />
            </p>
          </div>
          <div className="col-md-5 image-column"><br />
            <img
              style={{ width: "520px", height: "440px", borderRadius: "8px" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Bcom;