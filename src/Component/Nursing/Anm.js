
import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
const Anm = () => {
  return <div>
     <div class="container-fluid anmimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt "  >School Of ANM</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 anm-h1'><span className='nursing-span'>Best ANM</span> University in Uttarkashi</h2>
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
            A course designed to train students in basic nursing and midwifery, providing essential care and maternal services in hospitals and community health centers.

             </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 years (4 Semesters)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
             The minimum age for admission shall be 17 years on 31st December of the year in which admission is sought. Minimum education: 10+2 class passed with science (PCB) & English core/English elective with an aggregate of 45% marks from recognized board 

               </p>
               <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	ANM in hospitals, primary health care centers, and rural health clinics.<br/>
•	Community health worker.<br/>
•	Maternity care assistant.<br/>



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

export default Anm;