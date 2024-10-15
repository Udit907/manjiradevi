import React from 'react';

import './BaArts.css';

import Artscourses from './Artscourses';

const Bedarts = () => {
  return <div>
     <div class="container-fluid bedartsimage  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 artssmt  "  >B.Ed in Arts and  Humanities</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 arts-h1'><span className='arts-span'>Best B.Ed in Arts and Humanities </span>University in Uttarkashi</h2>
    <p className='mt-3 arts-p'>
    A Bachelor of Education (B.Ed) in Arts and Humanities at Smt. Manjira Devi University in Uttarkashi is a specialized program designed to prepare students for teaching careers in subjects such as literature, history, philosophy, languages, and other humanities disciplines. The program typically spans 2 years and combines theoretical learning with practical teaching experiences. Students engage in pedagogical studies, curriculum development, educational psychology, and classroom management techniques. Faculty members are experienced educators who provide mentorship and guidance throughout the program. Graduates of the B.Ed program are equipped with the knowledge, skills, and certification necessary to pursue careers as teachers in schools, colleges, educational institutions, and other educational settings.
</p>
    </div>
 
    <div class="col-md-6 ">
    <img src="arts7.jpg" alt="" className="arts1image" />
        
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
            <p className='nursing-p'>A 2-year program for graduates aimed at preparing students for teaching careers, focusing on pedagogy, educational technology, and inclusive education. Graduates can pursue roles in school teaching, educational administration, and curriculum design.


            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>2 years</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            <span className='history-span '>	Educational Qualification:</span> Graduation/ Post-Graduation in any discipline
             </p>
             <p className='nursing-p'>
             <span className='history-span '>	Minimum Aggregate Score Requirement:</span> Gen-50 % and OBC/SC/ST- 5 % relaxation to permanent residents of Uttarakhand state only.
</p>
<p className='nursing-p'>
	Admission to the B.Ed program (both formats) is based on Academic Record, Performance in the University Entrance Test. Candidates with valid CUET qualified are exempted from the Entrance Test.

</p>
<h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	School Teacher<br/>
•	Educational Administrator<br/>
•	Curriculum Developer<br/>
•	Educational Consultant<br/>


</p>
        </div>
        <div className="col-md-4 image-column mt-5 "><br/>
            <img
              style={{ height: "100%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>

</div>
<Artscourses/>
</div>

}

export default Bedarts;