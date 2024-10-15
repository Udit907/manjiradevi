import React from 'react';

import './Phdyogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Phdyogic = () => {
  return <div>
     <div class="container-fluid phdyogic-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 phdyogic-smt "  >Doctoral in Yoga (Ph. D. – Yoga)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 phdyogic-h1'><span className='phdyogic-span'>Best Doctoral in Yoga (Ph. D. – Yoga)  </span> University in Uttarkashi</h2>
    <p className='mt-3 phdyogic-p'>
    Smt. Manjira Devi University offers a Ph.D. in Yogic Science and Naturopathy, focusing on advanced research and specialization in yoga and natural health practices. This doctoral program involves in-depth study of advanced yogic techniques, naturopathic treatments, holistic health, and wellness science. Candidates conduct original research, contributing to the field's academic and practical knowledge. Graduates can pursue careers as researchers, university professors, advanced practitioners, and consultants in holistic health. Admission requires a relevant master's degree and a research proposal. For detailed information, visit the university's official website or contact the admissions office.
    </p>
 </div>
 <div class="col-md-6 ">
    <img src="yoga7.jpg" alt="" className="phdyogicimage" />
        
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
            Doctoral program for advanced research in yoga philosophy, practices, and therapeutic applications.
              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3-6 years</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            <span className='history-span '>	•	Educational Qualification 	</span>
            Master’s Degree from any UGC recognized University/ AICTE approved Institutions or any other qualification recognized as equivalent there to in the notified fields of study with a minimum 55% of marks or equivalent CGPA (50% marks or equivalent CGPA for SC/ST candidates)

            </p> 
            <p className='nursing-p'>
            	Admission to the Ph.D. program (both formats) is based on Academic Record, Performance in the University Entrance Test and Interview. Candidates with valid NET/ SLET/GATE qualified are exempted from the Entrance Test.
</p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Advanced Yoga Instructor<br/>
•	Yoga Therapist<br/>
•	Wellness Consultant<br/>
•	Yoga Studio Manager<br/>
</p>
              
        </div>
        <div className="col-md-4 image-column mt-5"><br/>
            <img
              style={{ height: "100%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>

</div>
<Yogiccourses/>
<Library/>
</div>

}

export default Phdyogic;