import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Ai() {
  return (
    <div className="School1-page">
       <div class="container-fluid ai-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" > Diploma in AI And Machine Learning</h2></center>
   
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
          >
           The Department of Diploma in AI and Machine Learning is an integral part of the School of Science and Technology, designed to equip students with foundational and advanced knowledge in artificial intelligence and machine learning. This department offers a comprehensive curriculum that covers essential topics such as data analysis, neural networks, natural language processing, computer vision, and deep learning. The program is structured to provide both theoretical understanding and practical skills, ensuring that students can apply AI and machine learning techniques to real-world problems.<br></br>
           Faculty members are industry professionals and academic researchers who bring a wealth of experience and insights into the classroom. They mentor students through collaborative projects and research initiatives, providing opportunities to engage with cutting-edge AI developments. The program also features guest lectures, workshops, and seminars by leading AI experts, fostering a vibrant learning environment. Graduates of the diploma program are well-prepared for careers as AI engineers, data scientists, machine learning specialists, and research analysts, ready to drive innovation and technological advancements in various industries.</div>
         &emsp;&emsp; <div className="col-md-4 image-column"><br/><br/><br/>
            <img
              style={{ height: "65%" }}
              src="/science4.jpeg"
              alt="ai and ml"
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
            <p className="nursing-p">2 yrs. (4 Semesters)</p><br></br>
            <h3 className="library-heading">Eligibility Criteria(Qualifying Exam)</h3>
            <p className="nursing-p"><i className="fas fa-arrow-circle-right"></i> Completion of Secondary Education: Candidates must have completed their secondary education (10+2) or its equivalent from a recognized board.<br></br>
            <i className="fas fa-arrow-circle-right"></i> Minimum Marks Requirement: A minimum aggregate score of 50% to 60% in the qualifying examination, though this may vary depending on the institution. </p>
        </div>&emsp;&emsp;
        <div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "75%" }}
              src="/science7.jpeg"
              alt="School Vision"
            />
          </div>
        </div>
      </div>
      
      <Library/>
    </div>
  );
}

export default Ai;