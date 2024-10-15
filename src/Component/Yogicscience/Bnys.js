import React from 'react';

import './Bnys.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Bnys = () => {
  return <div>
     <div class="container-fluid bnysimage  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 bnyssmt  "  >Bachelor of Naturopathy & Yoga Sciences(BNYS)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 bnys-h1'><span className='bnys-span'>Best BNYS </span>University in Uttarkashi</h2>
    <p className='mt-3 bnys-p'>
    The Bachelor of Naturopathy and Yoga Sciences (BNYS) program at Smt. Manjira Devi University is a comprehensive degree that combines traditional naturopathy and yoga with modern medical science. The program spans five and a half years, including a one-year internship. The curriculum covers a wide range of subjects, including anatomy, physiology, biochemistry, pathology, microbiology, and community medicine. Students also receive in-depth training in yoga therapy, nutrition, herbology, and acupuncture. The course is designed to equip students with the skills to promote holistic health and wellness. Graduates can pursue careers in healthcare, wellness centers, research, and education. The program emphasizes hands-on experience and practical training, ensuring students are well-prepared for professional practice.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="yoga7.jpg" alt="" className="bnys1image" />
        
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
             The BNYS program is a comprehensive undergraduate course that integrates the principles of naturopathy and yogic sciences. The curriculum is designed to provide students with an in-depth understanding of natural healing methods, yoga practices, and their applications in promoting holistic health and wellness. Students learn about anatomy, physiology, pathology, and various naturopathic treatments such as diet therapy, hydrotherapy, mud therapy, massage therapy, and fasting therapy, alongside advanced yoga practices.
            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>5.5 years (4.5 years of academic study + 1-year internship)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            Completion of 10+2 or equivalent with Physics, Chemistry, and Biology from a recognized board. Minimum Aggregate Score Requirement: Gen-50 %  and OBC/SC/ST- 45 %

           </p>
           
<h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Naturopathic Doctor<br/>
•	Yoga Therapist <br/>
• Wellness Consultant<br/>
•	Health and Wellness Coach<br/>
•	Yoga Instructor<br/>
•	Naturopathy Practitioner<br/>



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

export default Bnys;