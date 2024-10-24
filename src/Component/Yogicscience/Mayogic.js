import React from 'react';

import './Mayogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Mayogic = () => {
  return <div>
     {/* <div class="container-fluid mayogic-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 mayogic-smt " >Master of Arts in Yoga (M.A – Yoga)</h2></center>
   
  </div>
      </div>
    </div>
</div> */}
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 mayogic-h1'><span className='mayogic-span'>Best Master of Arts in Yoga (M.A – Yoga) </span>University in Uttarkashi</h2>
    <p className='mt-3 mayogic-p'>
    Smt. Manjira Devi University offers an M.A. in Yogic Science and Naturopathy, a 2-year program emphasizing advanced theoretical and practical knowledge in yoga and natural healing methods. The curriculum covers advanced yoga practices, meditation, naturopathic therapies, diet and nutrition, holistic health, and wellness management. Students are trained in research methodologies and therapeutic applications. Graduates can become yoga therapists, naturopathy practitioners, wellness consultants, researchers, or educators. Admission requires a bachelor's degree in a related field. For more information, visit the university's official website or contact the admissions office.
</p>
 </div>
 <div class="col-md-6 ">
    <img src="yogic.jpeg" alt="" className="mayogicimage" />
        
      </div>

    </div>

  </div>
</div>
<div className='container mt-5'>
<h1 className='library-heading'><span>MA - (Yoga) </span>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            Postgraduate program emphasizing philosophical and spiritual dimensions of yoga, with in-depth study of ancient texts and yoga ethics.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 years. (4 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            Bachelor’s degree in any discipline from a recognized university 
             </p>
             <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
• Yoga Teacher/Instructor<br/>
•	Yoga Program Developer<br/>
•	Yoga Retreat Organizer<br/>
•	Yoga and Wellness Writer/Journalist<br/>
•	Spiritual and Life Coach<br/>




</p>
        </div>
        <div className="col-md-5 image-column mt-5 mb-5"><br/>
            <img
              style={{ width: "520px", height: "440px", borderRadius: "8px" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>

</div>
<Yogiccourses/>
{/* <Library/> */}
</div>

}

export default Mayogic;