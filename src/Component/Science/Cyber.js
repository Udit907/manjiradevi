import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Cyber() {
  return (
    <div className="School1-page">
        <div class="container-fluid cyber-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >  Diploma in Cyber Security</h2></center>
   
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
          <div
            className="col-md-6 text-column p-3"
            style={{ fontSize: "18px",textAlign:"justify",fontFamily:"serif" }}
          >The Department of Cyber Security within the School of Science and Technology is dedicated to educating and equipping students with the necessary skills to protect digital information and systems from cyber threats. This department offers specialized programs designed to provide a comprehensive understanding of cyber security principles, practices, and technologies, preparing students for careers in one of the fastest-growing fields in IT.<br></br>
          The Department of Cyber Security is committed to producing highly skilled professionals capable of addressing the complex challenges of securing digital information and systems. Through a blend of theoretical knowledge, practical skills, and research opportunities, the department prepares students to become leaders in the field of cyber security.
          </div>
          <div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "75%" }}
              src="/science10.jpeg"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <br></br><br></br>
        
        <h1 className='library-heading'>Programme<span className='library-span'> Details</span></h1>
            <div className="row p-3" style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-6"><br></br>
            <p className="nursing-p">Designed as a skill enable program, the students actually learn by doing and progress from basics to higher order skills like planning, designing and maintaining small and large structures. Diploma graduates can start entrepreneurial ventures or can pursue higher studies.</p>
            <h3 className="library-heading">Duration</h3>
            <p className="nursing-p">3 yrs. (6 Semesters)</p><br></br>
            <h3 className="library-heading">Eligibility Criteria(Qualifying Exam)</h3>
            <p className="nursing-p"><i className="fas fa-arrow-circle-right"></i>Candidates should have a minimum of 10+2 (Higher Secondary) qualification in any stream (Science, Commerce, or Arts) from a recognized board.<br/>
            <i className="fas fa-arrow-circle-right"></i>Minimum percentage of marks in the qualifying examination, typically 50% or above.<br/>
            <i className="fas fa-arrow-circle-right"></i>Candidates with a background in computer science, information technology, or related fields may have an advantage in the admission process.<br/>
            <i className="fas fa-arrow-circle-right"></i>Working professionals with a bachelor's degree in any field and some experience in IT or related areas may also be eligible for the diploma program.</p></div>
        <div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "75%" }}
              src="/science4.jpeg"
              alt="School Vision"
            />
          </div>
        </div>
      </div>
      
      <Library/>
    </div>
  );
}

export default Cyber;
