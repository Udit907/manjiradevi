import React from 'react';

import './Hotel.css';

import Hotelcourses from './Hotelcourses';

const Bachelorhm = () => {
  return <div>
     <div class="container-fluid bachelorhm-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 artssmt  "  >Bachelor of Hotel Management and Catering Technology (BHMCT)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 arts-h1'><span className='arts-span'>Best  (BHMCT) </span>University in Uttarkashi</h2>
    <p className='mt-3 arts-p'>
    The Bachelor of Hotel Management at SMT Manjira Devi University offers an in-depth program designed to develop future leaders in the hospitality industry. Our curriculum encompasses key areas such as front office management, culinary arts, food and beverage service, and hospitality marketing. Students gain hands-on experience through internships, practical workshops, and industry projects, ensuring they are well-prepared for real-world challenges. Taught by experienced faculty with extensive industry knowledge, the program emphasizes customer service excellence, operational efficiency, and innovative management practices. State-of-the-art facilities and strong industry partnerships enhance the learning experience. Graduates are equipped with the skills needed for diverse roles in hotels, resorts, restaurants, and event management. Join us to embark on a successful career in hotel management.
    </p>

    </div>
 
    <div class="col-md-6 ">
    <img src="hm4.jpg" alt="" className="arts1image" />
        
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
            BHMCT is a comprehensive undergraduate program that covers various aspects of hotel management, hospitality operations, catering technology, and food service management.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>4 Years (8 Semester) </h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            10+2 examination with English as one of the subjects at 10+2 level in any stream. Minimum 45% marks(40% in case of SC/ST category)
            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
• Hotel Manager<br/>
•	Restaurant Manager<br/>
•	Food and Beverage Manager<br/>
•	Catering Manager<br/>
•	Event Manager<br/>
•	Front Office Manager<br/>
•	Executive Chef<br/>
•	Banquet Manager<br/>



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
<Hotelcourses/>
</div>

}

export default Bachelorhm;