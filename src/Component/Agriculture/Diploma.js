import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Diploma() {
  return (
    <div className="School1-page">
    <div class="container-fluid data-image  ">
<div class="container">
<div class="row">
  <div class="col-sm-12 mt-4 ">
<center> <h2 class="text-white  display-3 nursingsmt  "  > Diploma In Agriculture</h2></center>

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
       Provides foundational knowledge in agriculture, including crop cultivation, soil management, agricultural economics, farm machinery, and pest management. Practical training in agricultural techniques.
         </p>
       <h3 className='library-heading'>Duration</h3>
       <p><h6 className='nursing-p'>1 Years </h6></p><br></br>
       <h3 className='library-heading'>Eligibility Criteria</h3>
       <p className='nursing-p'>
       Class 10th Passed and Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 % and SC/ST- 45 %.</p>
       <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
• Agricultural Technician<br/>
•	Farm Supervisor<br/>
•	Extension Worker<br/>
•	Agricultural Sales Representative,5.Field Inspector<br/>




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

export default Diploma;