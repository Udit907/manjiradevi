
import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
const Mph = () => {
  return <div>
     <div class="container-fluid mphimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of Master of Public Health(MPH)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 mph-h1'><span className='nursing-span'>Best MPH</span> College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The Master of Public Health (MPH) program at Smt. Manjira Devi University is a comprehensive two-year course aimed at equipping students with the knowledge and skills necessary for addressing public health challenges. The curriculum covers a wide range of subjects, including Epidemiology, Biostatistics, Health Policy and Management, Environmental Health, and Social and Behavioral Sciences. Students benefit from experienced faculty members who provide mentorship and guidance throughout the program. The university offers state-of-the-art facilities and resources to support learning and research endeavors. The program includes practical training through internships and fieldwork, enabling students to gain hands-on experience in real-world public health settings. Accredited by relevant authorities, the MPH program ensures quality education and prepares graduates for impactful careers in public health practice, research, policy-making, and advocacy. 
    
</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="gnm2.jpg" alt="" className="psychologyimage" />
        
      </div>

    </div>

  </div>
</div>
<div className='container mt-5'>
<h1 className='library-heading'>Programme<span className='library-span'> Details</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-6"><br></br>
            <p className='nursing-p'>Designed as a skill enable program, the students actually learn by doing and progress from basics to higher order skills like planning, designing and maintaining small and large structures. Diploma graduates can start entrepreneurial ventures or can pursue higher studies.</p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 yrs. (4 Semesters)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>Pass with 50% aggregate marks in 10th (with Mathematics, Science and English) or equivalent.

For a candidate, who has not studied English as a subject, the condition of English may be waived off provided the candidate in his qualifying exam has studied in English medium or an equivalent subject.

Note: In case any student has studied Physics instead of Science then also eligible </p>
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
<Nursingcourses/>
</div>

}

export default Mph;