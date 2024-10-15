import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
const Msccp = () => {
  return <div>
     <div class="container-fluid psychologyimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  "  >Bachelor of Medical Laboratory Technology (BMLT) </h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 msc-h1'><span className='nursing-span'>Best Bachelor of Medical Laboratory Technology (BMLT)  </span> University in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    Smt. Manjira Devi University offers a Bachelor of Medical Laboratory Technology (BMLT) program. This program is designed to provide students with the necessary skills and knowledge to excel in the field of medical laboratory technology. Graduates are equipped to work in various medical and research laboratories, contributing to the diagnosis and treatment of diseases.
    
</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="psychology2.jpg" alt="" className="psychologyimage" />
        
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
            A program that trains students in laboratory techniques and diagnostics, preparing them to work in medical laboratories and handle various diagnostic procedures.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3.5 years(including Internship),6 Semesters</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            10+2 OR equivalent with PCM/PCB. Minimum Aggregate Score Requirement: Gen/OBC-50 % and SC/ST- 45 %
            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Medical Laboratory Technologist in hospitals, diagnostic labs, and research facilities.<br/>
•	Quality control analyst.<br/>
•	Laboratory manager or supervisor.<br/>

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

export default Msccp;