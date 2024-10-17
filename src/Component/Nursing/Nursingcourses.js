import React from 'react';
import { Link } from "react-router-dom";
import './Nursing.css';
const Nursingcourses = () => {
  return <div>
    <div className='container-fluid mt-5 nursingbg2 p-5'>
      <div className='container'>
        <h1 className=' library-heading mb-3'>Our <span className='library-span'>Courses</span> </h1>
        <div className='row'>
          <div className='col-md-4 hhover mt-2 '>
            <div class="card cad-col">
              <img src="course1.jpg" class="card-img-top" alt="..." className='card-image1' />
              <h4 class="card-title cardh  mt-3 mb-3 "  >Bachelor of Medical Laboratory Technology (BMLT)</h4>
              <Link to="/nursingmsc" class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
            </div>
          </div>
          <div className='col-md-4 hhover  mt-2 '>
            <div class="card cad-col">
              <img src="course8.jpg" class="card-img-top" alt="..." className='card-image1' />
              <h4 class="card-title cardh  mt-3 mb-3 "  >D.Pharma</h4>
              <Link to="/dpharma" class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
            </div>
          </div>
          <div className='col-md-4 hhover  mt-2 '>
            <div class="card cad-col">
              <img src="course3.jpg" class="card-img-top" alt="..." className='card-image1' />
              <h4 class="card-title cardh  mt-3 mb-3 "  >B.sc Nursing</h4>
              <Link to="/nursing" class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
            </div>
          </div>
          </div>
          <div className='row mt-2'>
          <div className='col-md-4 hhover  mt-2 '>
            <div class="card cad-col">
              <img src="course9.jpg" class="card-img-top" alt="..." className='card-image1' />
              <h4 class="card-title cardh  mt-3 mb-3 "  >B.Pharma</h4>
              <Link to="/bpharma" class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
            </div>
          </div>



          <div className='col-md-4 hhover  mt-2 '>
            <div class="card cad-col">
              <img src="course6.jpg" class="card-img-top" alt="..." className='card-image1' />
              <h4 class="card-title cardh  mt-3 mb-3 "  >Bachelor of Physiotherapy (BPT)</h4>
              <Link to="/bpt" class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
            </div>
          </div>
          <div className='col-md-4 hhover  mt-2 '>
            <div class="card cad-col">
              <img src="course4.jpg" class="card-img-top" alt="..." className='card-image1' />
              <h4 class="card-title cardh  mt-3 mb-3 "  >General Nursing and Midwifery(GNM)</h4>
              <Link to="/gnm" class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
            </div>
          </div>
        </div>
           
           <div className="row mt-2">
           <div className='col-md-3 hhover  mt-2 '>
            <div class="card cad-col">
              <img src="course5.jpg" class="card-img-top" alt="..." className='card-image1' />
              <h4 class="card-title cardh  mt-3 mb-3 "  >Auxiliary Nurse and Midwife(ANM)</h4>
              <Link to="/anm" class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
            </div>
          </div>
         
          
         

        </div>
      </div>

    </div>
  </div>;
};

export default Nursingcourses;