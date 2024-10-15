import React from 'react';
import { Link } from "react-router-dom";
import './Hotel.css';
const Hotelcourses = () => {
  return <div>
    <div className='container-fluid mt-5 baartsbg2 p-5'>
  <div className='container'>
  <h1 className=' baarts-heading mb-3'>Our <span className='baarts-span'>Courses</span> </h1>
    <div className='row'>
<div className='col-md-4  mt-2 '>
<div class="card cad-col">
<img src="hm.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >Diploma in H.M</h4>
<Link  to="/hoteldiploma" class="btn baarts-bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-4   mt-2 '>
<div class="card cad-col">
<img src="hm1.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >BBA in Tourism</h4>
<Link  to="/hotelbba"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-4   mt-2 '>
<div class="card cad-col">
<img src="hm2.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >Bachelor of Hotel Management</h4>
<Link  to="/hotelbhm"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
         
         
         

</div>

    </div>

  </div>
        </div>;
};

export default Hotelcourses;