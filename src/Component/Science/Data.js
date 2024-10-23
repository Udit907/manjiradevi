import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Data() {
  return (
    <div className="School1-page">
         <div class="container-fluid data-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  "  > Diploma In Artificial Intelligence and Machine Learning / Data Science & Cloud Technology / Cyber Security / Forensic Science</h2></center>
   
  </div>
      </div>
    </div>
</div>
      
<div className='container mt-5'>
<h1 className='library-heading'>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-6"><br></br>
            <p className='nursing-p'>
            Provides specialized training in Artificial Intelligence (AI) and Machine Learning, Data Science and Cloud Technology, Cyber Security, or Forensic Science. Focuses on practical skills and applications in respective fields.
              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>1 Years </h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria</h3>
            <p className='nursing-p'>
            Requires a minimum of higher secondary education (10+2) or equivalent.</p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
• AI and Machine Learning<br/>
•	Data Science & Cloud Technology<br/>
•	Cyber Security<br/>
•	Forensic Science<br/>




</p>
        </div>
        <div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "75%" }}
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

export default Data;