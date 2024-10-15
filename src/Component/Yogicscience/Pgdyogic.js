import React from 'react';

import './Pgdyogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Pgdyogic = () => {
  return <div>
     <div class="container-fluid pgdyogic-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 pgdyogic-smt "  >Post Graduation Diploma in Yoga (PGD - Yoga)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 pgdyogic-h1'><span className='pgdyogic-span'>Best Post Graduation Diploma in Yoga (PGD - Yoga)  </span>University in Uttarkashi</h2>
    <p className='mt-3 pgdyogic-p'>
    Smt. Manjira Devi University offers a Postgraduate Diploma (PGD) in Yogic Science and Naturopathy, a 1-year program designed to provide specialized knowledge in yoga and natural health practices. The curriculum includes training in yoga asanas, pranayama, meditation, naturopathic treatments, diet and nutrition, and holistic health principles. This program is ideal for those seeking to enhance their skills in wellness and health management. Graduates can work as yoga instructors, naturopathy practitioners, wellness coaches, and holistic health consultants. Admission requires a bachelor's degree in any field. For more information, visit the university's official website or contact the admissions office.
</p>
 </div>
 <div class="col-md-6 ">
    <img src="yogic.jpeg" alt="" className="pgdyogicimage" />
        
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
            Diploma program designed for graduates seeking specialized knowledge in yoga, combining theoretical and practical aspects of yoga for health and wellness applications.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>1 years (2 Semesters)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            <span className='history-span '>	•	Educational Qualification 	</span>
            Bachelor’s degree in any discipline from a recognized university.
               </p>
               <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Advanced Yoga Instructor<br/>
•	Yoga Therapist<br/>
•	Wellness Consultant<br/>
•	Manager Yoga Studio<br/>

</p>
        </div>
        <div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "75%" }}
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

export default Pgdyogic;