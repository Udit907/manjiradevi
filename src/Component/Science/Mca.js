import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Mca() {
  return (
    <div className="School1-page">
        {/* <div class="container-fluid mca-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  "  > Master of Computer Applications (MCA)</h2></center>
   
  </div>
      </div>
    </div>
</div> */}
     
     
      


      <div className='container mt-5'>
        <h1 className='library-heading'><span>MCA - </span>	Course <span className='library-span'>Overview</span></h1>
        <div className="row" style={{
          border: "2px",
          borderRadius: "20px",
        }}>
          <div className="col-md-0"></div>
          <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            Advanced study in computer applications, software development, algorithms, data structures, cyber security, and project management. Includes practical training and project work
            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3 Years (6 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria</h3>
            <p className='nursing-p'>
            B.Sc. with Mathematics OR B.Sc. C.S. OR  B. Tech. C.S. (10+2+4 Scheme). Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 %  and SC/ST- 45 %.
            </p>
            <h3 className='library-heading'>Career Opportunities</h3>
            <p className='nursing-p'>
              • Software architect<br />
              •	Systems analyst<br />
              •	IT consultant<br />
              •	Database manager<br />
              •	Network administrator<br />
              •	Software developer in specialized domains like AI, cloud computing, cyber security.<br />
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
  

      {/* <Library/> */}
    </div>
  );
}

export default Mca;