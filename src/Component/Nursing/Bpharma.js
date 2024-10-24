import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
const Bpharma = () => {
  return <div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 dpharma-h1'><span className='nursing-span'>Best B.Pharma</span> University in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The B.Pharm course at Smt. Manjira Devi University is a four-year undergraduate program designed to equip students with comprehensive knowledge and skills in the field of pharmacy. The curriculum encompasses a wide range of subjects, including pharmaceutical chemistry, pharmacology, pharmaceutics, and pharmacognosy. Students receive extensive practical training through well-equipped laboratories, industrial visits, and internships in pharmaceutical industries and healthcare settings. The program emphasizes the development of critical thinking, problem-solving abilities, and ethical practices in pharmacy. Faculty members are experienced professionals dedicated to mentoring students and providing quality education. Graduates are well-prepared for careers in pharmaceutical research, clinical pharmacy, regulatory affairs, and quality control. The college boasts modern facilities and a conducive learning environment.
</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="dpharma.jpg" alt="" className="psychologyimage" />
        
      </div>

    </div>

  </div>
</div>
<div className='container mt-5'>
<h1 className='library-heading'><span>B.Pharma - </span>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            This program focuses on the study of pharmaceuticals, drug development, and patient care, preparing students for diverse roles within the pharmaceutical industry and healthcare sector.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>4 years (8 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            10+2 OR equivalent with PCB/PCM & Student must have attained age of 17 Years on or before 31st December of the year of admission to the course. Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 % and SC/ST- 45 %

            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Pharmacist in retail or hospital pharmacies.<br/>
•	Pharmaceutical industry roles (e.g., research and development, quality control).<br/>
•	Clinical research and regulatory affairs.<br/>

</p>
        </div>
        <div className="col-md-5 image-column mt-5"><br/>
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

export default Bpharma;