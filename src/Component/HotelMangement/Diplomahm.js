import React from 'react';

import './Hotel.css';

import Hotelcourses from './Hotelcourses';

const Diplomahm = () => {
  return <div>
    <div class="container-fluid diplomahm-image  ">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 mt-4 ">
            <center> <h2 class="text-white  display-3 artssmt  "  >Diploma In Hotel Management</h2></center>

          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid mt-5 nursingbg2 '>
      <div className='container p-5'>
        <div className='row'>
          <div className='col-md-6 '>
            <h2 className='mb-2 mt-2 arts-h1'><span className='arts-span'>Best Diploma in H.M </span> University in Uttarkashi</h2>
            <p className='mt-3 arts-p'>
              The Diploma in Hotel Management at SMT Manjira Devi University offers a robust program designed to provide students with foundational knowledge and practical skills in the hospitality industry. Our curriculum includes courses in front office operations, housekeeping management, food and beverage service, and hospitality marketing. Students gain hands-on experience through internships and real-world projects, ensuring they are industry-ready upon graduation. The program is taught by experienced faculty with deep industry insights and connections. State-of-the-art training facilities and industry partnerships enhance the learning experience. Emphasizing customer service excellence, operational efficiency, and cultural awareness, the diploma prepares students for diverse career opportunities. Join us to embark on a rewarding journey in hotel management.
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
        <div className="col-md-7"><br></br>
          <p className='nursing-p'>
            Diploma in Hotel Management is a shorter-term program focusing on foundational knowledge and skills in hotel operations, hospitality services, and customer relations.

          </p>
          <h3 className='library-heading'>Duration</h3>
          <p><h6 className='nursing-p'>1 years </h6></p><br></br>
          <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
          <p className='nursing-p'>
            10+2 examination with English as one of the subjects at 10+2 level in any stream. Minimum 45% marks(40% in case of SC/ST category)
          </p>
          <h3 className='library-heading'>	Career Opportunities</h3>
          <p className='nursing-p'>
            • Front Desk Executive<br />
            •	Housekeeping Supervisor<br />
            •	Food and Beverage Supervisor<br />
            •	Guest Relations Executive<br />
            •	Sales and Marketing Executive<br />
            •	Culinary Assistant<br />
            •	Event Coordinator<br />
          </p>
        </div>
        <div className="col-md-5 image-column"><br />
          <img
            style={{ width: "520px", height: "440px", borderRadius: "8px" }}
            src="/vision.png"
            alt="School Vision"
          />
        </div>
      </div>

    </div>
    <Hotelcourses />
  </div>

}

export default Diplomahm;