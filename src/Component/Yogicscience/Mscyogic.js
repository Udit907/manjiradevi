import React from 'react';

import './Mscyogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Mscyogic = () => {
  return <div>
     <div class="container-fluid mscyogic1image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 mscyogicsmt "  >Master of Science in Yoga (M.Sc – Yoga)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 mscyoic-h1'><span className='mscyogic-span'>Best Master of Science in Yoga (M.Sc – Yoga)  </span> University in Uttarkashi</h2>
    <p className='mt-3 mscyogic-p'>
    Smt. Manjira Devi University offers an M.Sc. in Yogic Science and Naturopathy, a 2-year program focused on advanced studies in yoga and natural health practices. The curriculum includes in-depth training in advanced asanas, pranayama, meditation techniques, naturopathic treatments, dietetics, and holistic health management. Students also engage in research methodologies, clinical applications, and therapeutic techniques. Graduates can pursue careers as advanced yoga therapists, naturopathic practitioners, researchers, and educators in wellness institutions. Admission requires a relevant bachelor's degree in science. For detailed information, visit the university's official website or contact the admissions office.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="yoga7.jpg" alt="" className="mscyogicimage" />
        
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
            Postgraduate program focused on the scientific and therapeutic aspects of yoga, including advanced yoga techniques, research methodology, and yoga therapy.
             </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 years (4 Semesters)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            Bachelor’s degree in Yoga (B.Sc Yoga) or a related field from a recognized university.
               </p>
               <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Yoga Therapist<br/>
•	Researcher in Yoga and Health Sciences<br/>
•	Lecturer/Professor in Yoga Studies<br/>
•	Health and Wellness Consultant<br/>
•	Corporate Wellness Specialist<br/>




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

export default Mscyogic;