import React from 'react';
import './BaArts.css';
import Artscourses from './Artscourses';

const BaArts = () => {
  return (
    <div>
      <div className="container-fluid baartsimage">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <center>
                <h2 className="text-white display-3 artssmt " >
                Bachelor of Arts (B.A.)
                </h2>
              </center>
            </div>
          </div>
        </div>
      </div>
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
        <div className="row" style={{ border: "2px", borderRadius: "20px", boxShadow: "10px 10px 20px rgb(240, 117, 3)" }}>
          <div className="col-md-0"></div>
          <div className="col-md-6"><br />
            <p className="nursing-p">
            A 3-year undergraduate program offering a broad education in subjects like English, History, and Political Science, with options for electives and skill enhancement courses. Career opportunities include civil services, journalism, teaching, and public administration.
            </p>
            <h3 className="library-heading">Duration</h3>
            <p><h6 className="nursing-p">3 yrs. (6 Semesters)</h6></p><br />
            <h3 className="library-heading">Eligibility Criteria (Qualifying Exam)</h3>
            
            <p className='nursing-p'>
            <span className='history-span '>	•	</span>	Passed 10+2/Intermediate in any discipline</p> 
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
          <div className="col-md-4 image-column mt-5"><br />
            <img style={{ height: "100%" }} src="/vision.png" alt="School Vision" />
          </div>
        </div>
      </div>
      <Artscourses />
    </div>
  );
}

export default BaArts;
