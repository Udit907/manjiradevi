import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Bsc() {
  return (
    <div className="School1-page">
       <div className='container mt-5'>
      <h1 className='library-heading'><span>B.Sc</span>	Course <span className='library-span'>Overview</span></h1>
      <div className="row" style={{
        border: "2px",
        borderRadius: "20px",
      }}>
        <div className="col-md-0"></div>
        <div className="col-md-7"><br></br>
          <p className='nursing-p'>
          Provides foundational knowledge in Physics, Chemistry, Mathematics/Biology/Computer Science based on the chosen stream. Includes theoretical study and practical laboratory work.
          </p>
          <h3 className='library-heading'>Duration</h3>
          <p><h6 className='nursing-p'>1 years </h6></p>
          <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
          <p className='nursing-p'>
          Completion of higher secondary education (10+2) with Physics, Chemistry, Mathematics (PCM), Physics, Chemistry, Biology (PCB), Zoology, Botany, Chemistry (ZBC), or Computer Science (CS) as relevant to the chosen stream. 
          </p>
          <h3 className='library-heading'>Career Opportunities</h3>
          <p className='nursing-p'>
            • <b>PCM</b>:Careers in engineering, technology, research, analytics, data science, finance, etc.<br />
            •	<b>PCB</b>:Opportunities in medical sciences, healthcare, biotechnology, pharmaceuticals, research, etc.<br />
            •	<b>ZBC</b>:Careers in zoology, botany, environmental sciences, wildlife biology, forestry, etc.<br />
            •	<b>CS</b>:Paths in software development, information technology, cybersecurity, data analytics, artificial intelligence, etc.<br />
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

export default Bsc;