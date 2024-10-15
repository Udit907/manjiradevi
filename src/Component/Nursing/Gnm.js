
import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
const Gnm = () => {
  return <div>
     <div class="container-fluid gnmimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt " >School Of GNM</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 gnm-h1'><span className='nursing-span'>Best GNM </span>University in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The MSc Clinical Psychology course at Smt. Manjira Devi University offers a comprehensive curriculum designed to provide in-depth knowledge and practical skills in clinical psychology. The program covers various theoretical frameworks, diagnostic techniques, and therapeutic approaches. Students receive hands-on training through supervised clinical placements and internships. The course emphasizes evidence-based practices and psychological research methods. Faculty members are experienced professionals dedicated to mentoring and guiding students. Graduates are well-prepared for careers in clinical settings, research, and higher education. The University also provides opportunities for students to engage in community outreach programs. Scholarships and financial aid are available for eligible students to support their academic journey.
    
</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="review2.jpg" alt="" className="psychologyimage" />
        
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
             A program that offers comprehensive training in general nursing and midwifery, equipping students to provide patient care and specialized midwifery services.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3 years (6 Semesters)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            Passed 10+2/Intermediate in PCB & English from recognized board and Candidate should complete Age of 17 Years on or before 31st December of the year of admission to the course. Minimum Aggregate Score Requirement: Gen/OBC-45 %  and SC/ST- 45 %

            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	General Nurse in hospitals and health care centers.<br/>
•	Midwifery specialist.<br/>
•	Community health nurse.<br/>
</p>
        </div>
        <div className="col-md-4 image-column mt-5"><br/>
            <img
              style={{ height: "auto",width:"auto" }}
              src="/medicalimage2.jpg"
              alt="School Vision"
            />
          </div>
        </div>

</div>
<Nursingcourses/>
</div>

}

export default Gnm;