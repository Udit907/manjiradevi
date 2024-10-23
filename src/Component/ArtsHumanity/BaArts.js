import React from 'react';
import './BaArts.css';
import Artscourses from './Artscourses';

const BaArts = () => {
  return (
    <div>
      <h2 className='text-center mt-4 ' style={{fontSize:"45px",color:"orange"}}>Bachelor of Arts (B.A.)</h2>
      <div className="container-fluid mt-5 nursingbg2">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-2 mt-2 arts-h1">
                <span className="arts-span">Best B.A in Arts and  Humanities </span>University in Uttarkashi
              </h2>
              <p className="mt-3 arts-p">
                At Smt. Manjira Devi University in Uttarkashi, BA in Arts and Humanities offers a comprehensive exploration of subjects like literature, history, philosophy, languages, and performing arts. This undergraduate program is designed to provide students with a well-rounded education in the liberal arts, emphasizing critical thinking, cultural appreciation, and communication skills. The curriculum integrates theoretical knowledge with practical applications through workshops, seminars, and cultural events. Faculty members are dedicated to fostering intellectual growth and preparing students for diverse career paths in education, journalism, public relations, and various creative and cultural industries.
              </p>
            </div>
            <div className="col-md-6">
              <img src="arts7.jpg" alt="" className="arts1image" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
      <h1 className='library-heading'>	Course <span className='library-span'>Overview</span></h1>
        <div className="row" >
          <div className="col-md-6"><br />
            <p className="nursing-p">
            A 3-year undergraduate program offering a broad education in subjects like English, History, and Political Science, with options for electives and skill enhancement courses. Career opportunities include civil services, journalism, teaching, and public administration.
            </p>
            <span className="nursing-span">Duration: </span>
            <span>3 Years (6 Semesters)</span><br/>
            <span className="nursing-span">Eligibility: </span>
            Passed 10+2/Intermediate in any discipline <br />
            <span className="nursing-span">Career Opportunities: </span>
            <span className='history-span '>	•	Subjects:	</span>	  English, Hindi, Sanskrit, History, Political Science, Sociology, Education, Economics
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Journalist<br/>
•	Content Writer<br/>
•	Civil Servant<br/>
•	Social Worker<br/>
•	Policy Analyst<br/>


</p>
            
          </div>
          <div className="col-md-5  mt-5"><br />
            <img style={{width:"520px",height:"440px",borderRadius:"8px"}}s src="/vision.png" alt="School Vision" />
          </div>
        </div>
      </div>
      <Artscourses />
    </div>
  );
}

export default BaArts;
