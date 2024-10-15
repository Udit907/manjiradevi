
import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
const Bpt = () => {
  return <div>
     <div class="container-fluid bptimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt "  >School Of Bachelor of Physiotherapy (BPT)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2'>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 bpt-h1'><span className='nursing-span'>Best BPT </span>University in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The Bachelor of Physiotherapy (BPT) course at Smt. Manjira Devi University is a comprehensive program designed to equip students with the necessary knowledge and skills to become competent physiotherapy professionals. Spanning four years and divided into eight semesters, the curriculum covers a diverse range of subjects, including Anatomy, Physiology, Biomechanics, Pharmacology, and Rehabilitation. With a focus on both theoretical learning and practical application, students undergo rigorous clinical training, facilitated by experienced faculty members and supported by state-of-the-art facilities and equipment. The program also emphasizes research opportunities, allowing students to engage in projects aimed at advancing the field of physiotherapy. A mandatory internship period provides valuable hands-on experience in various healthcare settings, preparing graduates for a fulfilling career in hospitals, rehabilitation centers, sports clinics, or private practice.
     </p>
    </div>
 
    <div class="col-md-6 ">
    <img src="theraphy.jpg" alt="" className="psychologyimage" />
        
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
            A course designed to prepare students to become physiotherapists, focusing on rehabilitation, physical therapy techniques, and patient care.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>4.5 years (including internship), 8 Semesters</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            10+2 OR equivalent with PCM/PCB. Minimum Aggregate Score Requirement: Gen/OBC-50 % and SC/ST- 45 %.

            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Physiotherapist in hospitals, clinics, and sports facilities.<br/>
•	Rehabilitation specialist.<br/>
•	Private practice or consultancy.<br/>


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

export default Bpt;