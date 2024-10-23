import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Bsc() {
  return (
    <div className="School1-page">
      <div>

</div>
    
      <div className="container mt-3">
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
          }}
        >
          <br></br>
          <div className="col-md-0"></div>
          <h2 className="nursingh">
            <span>B.Sc - </span>
                <span className="nursing-spans">Course </span>Overview
              </h2>
              
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          >Provides foundational knowledge in Physics, Chemistry, Mathematics/Biology/Computer Science based on the chosen stream. Includes theoretical study and practical laboratory work.
          <br></br>
          
                <span className="nursing-span">Duration: </span>
                <span>3 Years (6 Semesters)</span><br/>
                <span className="nursing-span">Eligibility: </span>Overview
              Completion of higher secondary education (10+2) with Physics, Chemistry, Mathematics (PCM), Physics, Chemistry, Biology (PCB), Zoology, Botany, Chemistry (ZBC), or Computer Science (CS) as relevant to the chosen stream. 
              <br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span>Depends on the specific stream chosen: <br/>
                 <span className="span">1.PCM:</span> Careers in engineering, technology, research, analytics, data science, finance, etc.<br/>
                 <span className="span">2.PCB:</span> Opportunities in medical sciences, healthcare, biotechnology, pharmaceuticals, research, etc.<br/>
                 <span className="span">3.ZBC:</span> Careers in zoology, botany, environmental sciences, wildlife biology, forestry, etc.<br/>
                 <span className="span">4.CS:</span> Paths in software development, information technology, cybersecurity, data analytics, artificial intelligence, etc.</span><br/>
              </div>
          &emsp;&emsp;<div className="col-md-4 image-column"><br/><br/>
            <img
            style={{width:"520px",height:"440px",borderRadius:"8px"}}
              src="/bsc.jpg"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
       </div>
    </div>
  );
}

export default Bsc;