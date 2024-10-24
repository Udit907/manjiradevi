import React from 'react';

import './BaArts.css';

import Artscourses from './Artscourses';

const Maarts = () => {
  return <div>
     {/* <div class="container-fluid maartsimage  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 artssmt  ">M.A in Arts and  Humanities</h2></center>
   
  </div>
      </div>
    </div>
</div> */}
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 arts-h1'><span className='arts-span'>Best M.A in Arts and  Humanities</span> University in Uttarkashi</h2>
    <p className='mt-3 arts-p'>
    MA (Master of Arts) at Smt. Manjira Devi University in Uttarkashi offers advanced education in humanities and social sciences, encompassing disciplines such as literature, history, philosophy, and languages. The program typically spans 1-2 years and emphasizes research, critical analysis, and specialized knowledge in chosen fields. Faculty members are experienced scholars who guide students through rigorous coursework and thesis projects. Students benefit from a stimulating academic environment, seminars, and opportunities for practical application of theoretical learning. An MA degree from the university prepares graduates for careers in academia, research, cultural institutions, publishing, and various sectors requiring expertise in the arts and humanities.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="arts6.jpg" alt="" className="arts1image" />
        
      </div>

    </div>

  </div>
</div>
<div className='container mt-5'>
<h1 className='library-heading'><span>MA - </span>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-7"><br></br>
            <p className='nursing-p'>
            A 2-year postgraduate program for advanced studies in humanities and social sciences, including research methodology and a dissertation. It prepares students for careers in academia, research, public policy, and cultural management.

            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 yrs. (4 Semesters)</h6></p>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            <span className='history-span '>	•	Educational Qualification:</span> Graduation in relevant discipline	</p> 
            <p className='nursing-p'>
            <span className='history-span '>	•	Subjects:	</span>	  English, Hindi, Sanskrit, History, Political Science, Sociology, Education, Economics.</p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Journalist<br/>
•	Content Writer<br/>
•	Civil Servant<br/>
•	Social Worker<br/>
•	Policy Analyst<br/>


</p>
      
        </div>
        <div className="col-md-5 image-column"><br/>
            <img
              style={{ width: "520px", height: "440px", borderRadius: "8px" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>

</div>
<Artscourses/>
</div>

}

export default Maarts;