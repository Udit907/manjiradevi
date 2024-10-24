import React from 'react';
import { Link } from "react-router-dom";
import './Legal.css';
const Legalcourses = () => {
  return <div>
    <div className='container-fluid mt-5 baartsbg2 p-5'>
  <div className='container'>
  <h1 className=' baarts-heading mb-3'>Our <span className='baarts-span'>Courses</span> </h1>
    <div className='row'>

          <div className='col-md-4   mt-2 '>
<div class="card cad-col">
<img src="law4.jpg" style={{height:"190px"}} class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >B.A in LLB</h4>
<Link  to="/legalballb"class="btn bt mb-4   " >Read more</Link>
</div>
          </div>
          <div className='col-md-4   mt-2 '>
<div class="card cad-col">
<img src="law3.jpg"  style={{height:"190px"}} class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >Bachelor of Legislative Law (LLB)</h4>
<Link  to="/legalllb"class="btn bt mb-4   " >Read more</Link>
</div>
          </div>
          <div className='col-md-4   mt-2 '>
<div class="card cad-col">
<img src="law3.jpg" style={{height:"190px"}} class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >Bachelor of Legislative Law (LLB)</h4>
<Link  to="/legalllb"class="btn bt mb-4   " >Read more</Link>
</div>
          </div>
          
         
         

</div>

    </div>

  </div>
        </div>;
};

export default Legalcourses;