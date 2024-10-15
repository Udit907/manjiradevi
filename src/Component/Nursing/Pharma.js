import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
const Pharma = () => {
  return <div>
     <div class="container-fluid dpharmaimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  "  >School Of D.Pharma </h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2'>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 dpharma-h1'><span className='nursing-span'>Best D.Pharma</span> University in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The D.Pharm course at Smt. Manjira Devi University is a two-year diploma program focused on pharmacy education and practice. The curriculum includes subjects such as pharmacology, pharmaceutical chemistry, pharmaceutics, and pharmacognosy. Students gain practical skills through laboratory work, industrial visits, and internships in healthcare settings. The course emphasizes the importance of ethical practices, patient care, and medication management. Faculty members are experienced pharmacists and educators dedicated to providing high-quality instruction and support. The program also includes training in community pharmacy and hospital pharmacy operations. Graduates are prepared to take up roles in various pharmaceutical sectors, including retail, hospitals, and research. The University offers state-of-the-art facilities and a supportive learning environment. Scholarships and financial aid options are available to assist eligible students in their studies.

</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="bpharma.jpg" alt="" className="psychologyimage" />
        
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
            A foundational course in pharmacy and pharmaceuticals, providing essential knowledge and skills for various roles in the pharmaceutical field.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 years  4 Semesters</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            10+2 OR equivalent with PCB/PCM & Student must have attained age of 17 Years on or before 31st December of the year of admission to the course. Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 % and SC/ST- 45 %

            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Pharmacist in retail or hospital pharmacies.<br/>
•	Pharmaceutical sales and marketing.<br/>
•	Assistant roles in pharmaceutical manufacturing.<br/>



</p>
        </div>
        <div className="col-md-4 image-column"><br/>
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

export default Pharma;