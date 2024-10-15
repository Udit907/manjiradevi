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
   <center> <h2 class="text-white  display-3 nursingsmt  "  >Diploma - Mechanical Engineering</h2></center>
   
  </div>
      </div>
    </div>
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
          <h2 className="mb-2 mt-4 nursingh">
                <span className="nursing-span">Course </span>Overview
              </h2>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          >Covers basics of mechanical engineering, including thermodynamics, manufacturing processes, machine design, and maintenance.
          <br></br>
          
                <span className="nursing-span">Duration: </span>
                <span> 3 Years (6 Semesters).</span><br/>
                <span className="nursing-span">Eligibility: </span> The candidate must have passed 10th examination or equivalent with 40% marks or equivalent Grade Point Average (GPA) from a recognized board  
              <br/>
                <span className="nursing-span">Duration & Eligibility (Lateral Entry): </span> 2 Years (4 Semesters). 10+2 or equivalent with PCM OR ITI Diploma (2 Years) with 40% marks or equivalent Grade Point Average (GPA) from a recognized board.
              <br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Mechanical engineering technician, </b> <br/>
                 <b>2.Maintenance engineer</b><br/>
                 <b>3.Production supervisor,  </b><br/>
                 <b>4.Quality control inspector</b></span><br/><br/>
              </div>
        &emsp;&emsp;  <div className="col-md-4 image-column">
            <img
              style={{ height: "85%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <br></br><br></br>
      </div>
    </div>
  );
}

export default Mechanic;