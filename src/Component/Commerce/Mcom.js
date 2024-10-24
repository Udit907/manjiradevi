import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Mcom() {
  return (
    <div className="School1-page">
      <div className='container mt-5'>
        <h1 className='library-heading'><span>M.Com - </span>	Course <span className='library-span'>Overview</span></h1>
        <div className="row" style={{
          border: "2px",
          borderRadius: "20px",
        }}>
          <div className="col-md-0"></div>
          <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            
            Advanced Accounting, Business Environment, Financial Management, Corporate Governance, Research Methodology, Tax Planning, International Business.
            Advanced financial analysis, research skills, strategic management, and in-depth understanding of commerce.
            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 Years (4 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria</h3>
            <p className='nursing-p'>
            B.Com. / B.Com. Hons. / B.B.A. / B.A. Hons. Economics
            </p>
            <h3 className='library-heading'>Subjects</h3>
            <p className='nursing-p'>
            Finance, Marketing, Human Resources (HR)
            </p>
            <h3 className='library-heading'>Career Opportunities</h3>
            <p className='nursing-p'>
              • Finance Manager<br />
              •	Marketing Director<br />
              •	HR Manager<br />
              •	Business Development Manager<br />
              •	Management Consultant<br />
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

export default Mcom;