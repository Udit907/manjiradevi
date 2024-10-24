import React from 'react';

import './Bnys.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Bnys = () => {
  return <div>
<div className='container mt-5'>
<h1 className='library-heading'><span>BNYS - </span>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-7"><br></br>
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
        <div className="col-md-5 image-column mt-5"><br/>
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

export default Bnys;