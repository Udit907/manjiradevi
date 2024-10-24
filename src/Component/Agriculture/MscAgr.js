import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function MscAgr() {
  return (
    <div className="School1-page">
      <div className='container mt-5'>
        <h1 className='library-heading'><span>M.Sc (Agricultural) - </span>	Course <span className='library-span'>Overview</span></h1>
        <div className="row" style={{
          border: "2px",
          borderRadius: "20px",
        }}>
          <div className="col-md-0"></div>
          <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            Specializes in areas such as Agronomy, Horticulture, Soil Science, Plant Pathology, Agricultural Economics, and Agricultural Extension. Emphasizes advanced research, technology application in agriculture, and sustainable practices.
            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 Years (4 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria</h3>
            <p className='nursing-p'>
            B.Sc. (Ag) | B.Sc. (Ag) Hons. from Recognized University. Minimum Aggregate Score Requirement: Gen/OBC/Minority-55 % and SC/ST- 50 %
            </p>
            <h3 className='library-heading'>Career Opportunities</h3>
            <p className='nursing-p'>
              • Agricultural Scientist<br />
              •	Researcher<br />
              •	Agricultural Consultant<br />
              •	Government Agricultural Officer<br />
              •	Seed Technologist<br />
              •	Farm Supervisor<br />
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

export default MscAgr;