import React from 'react';
import { Link } from "react-router-dom";
import './Artscourses.css';
const Artscourses = () => {
  return <div>
    <div className='container-fluid mt-5 baartsbg2 p-5'>
  <div className='container'>
  <h1 className=' baarts-heading mb-3'>Our <span className='baarts-span'>Courses</span> </h1>
    <div className='row'>
<div className='col-md-3  mt-2 '>
<div class="card cad-col">
<img src="arts1.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >M.A in Arts and Humanities</h4>
<Link  to="/maarts" class="btn baarts-bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-3   mt-2 '>
<div class="card cad-col">
<img src="arts.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >B.A in Arts and Humanity</h4>
<Link  to="/baarts"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-3   mt-2 '>
<div class="card cad-col">
<img src="arts3.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >Ph.d in Arts and  Humanities</h4>
<Link  to="/phdarts"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-3   mt-2 '>
<div class="card cad-col">
<img src="arts4.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >B.Ed in Arts and  Humanities</h4>
<Link  to="/bedarts"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
         
         

</div>
<div className='row mt-3'>
<div className='col-md-3  mt-2 '>
<div class="card cad-col">
<img src="arts3.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >Bachelor of Library and Information Science (B.Lib.)</h4>
<Link  to="/blibarts" class="btn baarts-bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-3   mt-2 '>
<div class="card cad-col">
<img src="arts1.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >Master of Library and Information Science (M.Lib.)</h4>
<Link  to="/mlibarts"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          
         
         

</div>

    </div>

  </div>
        </div>;
};

export default Artscourses;