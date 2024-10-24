import React from 'react';

import './Bscyogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Bscyogic = () => {
  return <div>
     <div class="container-fluid bscyogic-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 bscyogic-smt" >Bachelor of Science in Yoga (B.Sc  - Yoga)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 bscyogic-h1'><span className='bscyogic-span'>Best Bachelor of Science in Yoga (B.Sc  - Yoga)  </span> University in Uttarkashi</h2>
    <p className='mt-3 bscyogic-p'>
    Smt. Manjira Devi University offers a B.Sc. in Yogic Science and Naturopathy, combining traditional yoga practices with naturopathic treatments. This 3-year program includes training in yoga asanas, pranayama, meditation, diet, hydrotherapy, and herbal medicine, along with studies in anatomy, physiology, and preventive healthcare. Graduates can work as yoga instructors, naturopaths, wellness coaches, or health educators. Admission requires higher secondary education, preferably in science. The course emphasizes holistic health, preparing students for various wellness industry roles. For more information, visit the university's official website or contact the admissions office.
</p>
 </div>
 <div class="col-md-6 ">
    <img src="yogic.jpeg" alt="" className="bscyogicimage" />
        
      </div>

    </div>

  </div>
</div>
<div className='container mt-5'>
<h1 className='library-heading'><span>B.Sc (Yoga) - </span>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            Undergraduate program that includes comprehensive study of yoga, anatomy, physiology, yoga therapy, and advanced yoga practices.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3 Years (6 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            Completion of 10+2 or equivalent from a recognized board.
            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Yoga Instructor<br/>
•	Wellness Coach<br/>
•	Fitness Trainer<br/>
•	Yoga Studio Manager<br/>
• Community Health Worker<br/>


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

export default Bscyogic;