import React from "react";
import "./school1.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Mechanic() {
  return (
    <div className="School1-page">
       <div class="container-fluid mechanical-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  "  >Diploma In Mechanical Engineering</h2></center>
   
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
            Covers basics of mechanical engineering, including thermodynamics, manufacturing processes, machine design, and maintenance.
              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3 Years (6 Semesters) </h6></p><br></br>
            <h3 className='library-heading'>Duration & Eligibility (Lateral Entry)</h3>
            <p className='nursing-p'>
            2 Years (4 Semesters). 10+2 or equivalent with PCM OR ITI Diploma (2 Years) with 40% marks or equivalent Grade Point Average (GPA) from a recognized board.
            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
• Mechanical engineering technician<br/>
•	Maintenance engineer<br/>
•	Production supervisor<br/>
•	Quality control inspector<br/>

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
    </div>
  );
}

export default Mechanic;