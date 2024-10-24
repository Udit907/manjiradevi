import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
const Nursing = () => {
  return <div>
<div className='container-fluid mt-5  nursingbg2'>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 '><span className='nursing-span'>Best B.sc Nursing</span> University in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    Smt. Manjira Devi University, located in Uttarkashi, is renowned for its top-tier B.Sc Nursing program. The institution is dedicated to providing quality education and comprehensive training to aspiring nurses. With state-of-the-art facilities and a highly qualified faculty, the university ensures students receive both theoretical knowledge and practical experience. The curriculum is designed to meet international standards, preparing students for global healthcare challenges. Additionally, the university emphasizes research and development, encouraging students to engage in innovative healthcare solutions. Smt. Manjira Devi University stands out for its commitment to producing competent and compassionate nursing professionals. Its serene location in Uttarkashi offers a conducive environment for focused learning and personal growth.
    
 </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="nursing2.jpg" alt="" className="nursingimage" />
        
      </div>

    </div>

  </div>
</div>
<div className='container mt-5'>
<h1 className='library-heading'><span>B.sc Nursing - </span>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            A program focused on preparing students for a career in nursing, emphasizing patient care, health promotion, and disease prevention in various healthcare settings.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>4 years (8 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
             Passed 10+2/Intermediate in PCB & English from recognized board and Candidate should complete Age of 17 Years on or before 31st December of the year of admission to the course. Minimum Aggregate Score Requirement: Gen/OBC-45 % and SC/ST- 45 %

            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Registered Nurse in hospitals, clinics, and community health settings.<br/>
•	Specialized nursing roles (e.g., pediatric, psychiatric, critical care).<br/>
•	Nursing educator or administrator.<br/>
</p>
        </div>
        <div className="col-md-5 image-column"><br/>
            <img
               style={{ width: "520px", height: "440px", borderRadius: "8px" }}
               src="/medicalimage2.jpg"
              alt="School Vision"
            />
          </div>
        </div>

</div>
<Nursingcourses/>
</div>

}

export default Nursing;