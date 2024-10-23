import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Bba() {
  return (
    <div className="School1-page">     
      <div className='container mt-5'>
        <h1 className='library-heading'><span>BBA -  </span>	Course <span className='library-span'>Overview</span></h1>
        <div className="row" style={{
          border: "2px",
          borderRadius: "20px",
        }}>
          <div className="col-md-0"></div>
          <div className="col-md-7"><br></br>
            <h3 className='library-heading'>Subjects:</h3>
            <p><h6 className='nursing-p'>Management Principal, Business Economics, Organizational Behavior, Marketing Management, Financial Management, Human Resource Management, Operations Management.</h6></p>
            <h3 className='library-heading'>Skills Developed:</h3>
            <p><h6 className='nursing-p'> Leadership, communication, problem-solving, and strategic thinking.</h6></p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3 Years (6 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria</h3>
            <p className='nursing-p'>
            10+2 OR equivalent in any discipline  
            </p>
            <h3 className='library-heading'>Career Opportunities</h3>
            <p className='nursing-p'>
              • Business Manager<br />
              •	Marketing Executive<br />
              •	Human Resource Manager<br />
              •	Operations Manager<br />
              •	Entrepreneur<br />
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

export default Bba;