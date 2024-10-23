import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function BscAgr() {
  return (
    <div className="School1-page">
      <div className='container mt-5'>
        <h1 className='library-heading'><span>B.Sc (Agricultural) - </span>	Course <span className='library-span'>Overview</span></h1>
        <div className="row" style={{
          border: "2px",
          borderRadius: "20px",
        }}>
          <div className="col-md-0"></div>
          <div className="col-md-7"><br></br>
            <p className='nursing-p'>
         Covers agronomy, soil science, plant breeding and genetics, agricultural economics, farm management, and agricultural engineering. Includes practical training in agricultural practices and fieldwork.<br></br>
            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>4 Years (8 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria</h3>
            <p className='nursing-p'>
            Intermediate in Agri. Science/PCB/PCM/PCMB. Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 % and SC/ST- 45 %
            </p>
            <h3 className='library-heading'>Career Opportunities</h3>
            <p className='nursing-p'>
              • Agricultural Officer<br />
              •	Farm Manager<br />
              •	Crop Consultant<br />
              •	Agricultural Researcher<br />
              •	Extension Officer<br />
              •	Agribusiness Manager<br />
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

export default BscAgr;