import React from "react";
import "./school1.css";

function Cse() {
  return (
    <div className="School1-page">
       <div class="container-fluid diplomacse-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  "  > Diploma - Computer Science & Engineering</h2></center>
   
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
          >Provides foundational knowledge in computer science and engineering principles, including programming, data structures, algorithms, and computer networks.
          <br></br>
          
                <span className="nursing-span">Duration: </span>
                <span>3 Years (6 Semesters)</span><br/>
                <span className="nursing-span">Eligibility: </span>The candidate must have passed 10th examination or equivalent with 40% marks or equivalent Grade Point Average (GPA) from a recognized board 
              <br/>
                <span className="nursing-span">Duration & Eligibility (Lateral Entry): </span> 2 Years (4 Semesters). 10+2 or equivalent with PCM OR ITI Diploma (2 Years) with 40% marks or equivalent Grade Point Average (GPA) from a recognized board.
              <br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span><br/>
                 <b>1.Computer technician,</b> <br/>
                 <b>2.Technical support specialist, </b><br/>
                 <b>3.Junior software developer,</b><br/>
                 <b>4.System administrator</b></span><br/><br/>
              </div>
         &emsp;&emsp;&emsp;&emsp; <div className="col-md-4 image-column"><br></br>
            <img
              style={{ height: "75%" }}
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

export default Cse;