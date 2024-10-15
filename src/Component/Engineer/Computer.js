import React from "react";
import "./school1.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Computer() {
  return (
    <div className="School1-page">
       <div class="container-fluid mechanical-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  "  >B.Tech Computer Science & Engineering (CSE)</h2></center>
   
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
          >Comprehensive study of computer science and engineering, including software development, algorithms, database systems, artificial intelligence, and cyber security.
          <br></br>
          
                <span className="nursing-span">Duration: </span>
                <span>  4 Years (8 Semesters).</span><br/>
                <span className="nursing-span">Eligibility: </span> Candidate must have passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/ Electronics/ Information Technology/Biology/Informatics Practices and have obtained at least 55% marks (50% in case of candidate belonging to reserved category) in the above subjects taken together from a recognized board/university. 
              <br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Software engineer,  </b> <br/>
                 <b>2.Data scientist,</b><br/>
                 <b>3.Systems analyst,   </b><br/>
                 <b>4.IT consultant,</b><br/>
                 <b>5.Web developer, </b><br/>
                 <b>6.Cyber security analyst.</b><br/>

                 </span><br/><br/>
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

export default Computer;