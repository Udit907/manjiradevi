import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Phd() {
  return (
    <div className="School1-page">
       <div className="container mt-5">
        <h1 className="library-heading">
          {" "}
          Course <span className="library-span">Overview</span>
        </h1>
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
          }}
        >
          <div className="col-md-0"></div>
          <div className="col-md-6">
            <br></br>
            <p className="nursing-p">
              1.Research Areas: Finance, Marketing, Human Resources,
              Organizational Behavior, Strategic Management, Entrepreneurship,
              International Business. <br />
              <br />
              2.Skills Developed: Advanced research skills, critical analysis,
              academic writing, and subject matter expertise.
            </p>
            <h3 className="library-heading">Duration</h3>
            <p>
              <h6 className="nursing-p">3-6 Years.</h6>
            </p>
            <br></br>
            <h3 className="library-heading">Eligibility Criteria</h3>
            <p className="nursing-p">
              1. Educational Qualification: Master’s Degree from any UGC
              recognized University/ AICTE approved Institutions or any other
              qualification recognized as equivalent there to in the notified
              fields of study with a minimum 55% of marks or equivalent CGPA
              (50% marks or equivalent CGPA for SC/ST candidates) 
              <br/><br/>
              2. Admission
              to the Ph.D. program (both formats) is based on Academic Record,
              Performance in the University Entrance Test and Interview.
              Candidates with valid NET/ SLET/GATE qualified are exempted from
              the Entrance Test.
            </p>
            <h3 className="library-heading"> Career Opportunities</h3>
            <p className="nursing-p">
              • University Professor
              <br />
              • Senior Researcher
              <br />
              • Business Analyst
              <br />
              • Policy Advisor
              <br />
              • Consultant              <br />
            </p>
          </div>
          <div className="col-md-4 image-column">
            <br />
            <img
              style={{ height: "75%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phd;
