import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Msc() {
  return (
    <div className="School1-page">
      {/* <div className="container mt-3">
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
          }}
        >
          <br></br>
          <div className="col-md-0"></div>
          <h2 className="mb-2 mt-4 nursingh">
                <span className="nursing-span">Course </span>Overview
              </h2>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          >Advanced study in Physics, Chemistry, Mathematics, Biology, or Computer Science, depending on the chosen specialization. Emphasizes research, advanced theoretical concepts, and practical applications.
          <br></br>
          
                <span className="nursing-span">Duration: </span>
                <span>2 Years (4 Semesters)</span><br/>
                <span className="nursing-span">Eligibility: </span>  Bachelor’s degree in relevant discipline (e.g., B.Sc - PCM/PCB/ZBC/CS). 
              <br/>
              <span className="nursing-span">Career Opportunities:</span>Varied based on specialization:
                <span> <br/>
                 <b>1.PCM:</b> Research scientist, physicist, mathematician, data analyst, statistician.<br/>
                 <b>2.PCB: </b>Biotechnologist, microbiologist, biochemist, medical researcher, pharmacologist.<br/>
                 <b>3.ZBC: </b>Ecologist, wildlife biologist, botanist, environmental scientist, agricultural researcher.<br/>
                 <b>4.CS: </b>Data scientist, software engineer, cyber security analyst, AI specialist, IT project manager.<br/>
                 </span><br/><br/>
              </div>
         &emsp;&emsp;&emsp; <div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "65%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <br></br><br></br>
        
       
      </div> */}
      
      <div className='container mt-5'>
        <h1 className='library-heading'><span>M.Sc - </span>	Course <span className='library-span'>Overview</span></h1>
        <div className="row" style={{
          border: "2px",
          borderRadius: "20px",
        }}>
          <div className="col-md-0"></div>
          <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            Advanced study in Physics, Chemistry, Mathematics, Biology, or Computer Science, depending on the chosen specialization. Emphasizes research, advanced theoretical concepts, and practical applications.
            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 Years (4 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria</h3>
            <p className='nursing-p'>
            Bachelor’s degree in relevant discipline (e.g., B.Sc - PCM/PCB/ZBC/CS). 
            </p>
            <h3 className='library-heading'>Career Opportunities</h3>
            <p className='nursing-p'>
              • <b>PCM:</b>Research scientist, physicist, mathematician, data analyst, statistician.<br />
              • <b>PCB:</b>Biotechnologist, microbiologist, biochemist, medical researcher, pharmacologist.<br />
              • <b>ZBC:</b>Ecologist, wildlife biologist, botanist, environmental scientist, agricultural researcher.<br />
              • <b>CS:</b>Data scientist, software engineer, cyber security analyst, AI specialist, IT project manager.<br />
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

export default Msc;