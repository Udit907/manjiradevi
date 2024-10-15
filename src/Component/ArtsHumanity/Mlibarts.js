import React from 'react';
import './BaArts.css';
import Artscourses from './Artscourses';

const Mlibarts = () => {
  return (
    <div>
      <div className="container-fluid baartsimage">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <center>
                <h2 className="text-white display-3 artssmt " >
                Master of Library and Information Science (M.Lib.)
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
                <span className="arts-span">Best Master of Library and Information Science (M.Lib.)</span> University in Uttarkashi
              </h2>
              <p className="mt-3 arts-p">
              The Master of Library and Information Science (M.Lib.) program at Smt. Manjira Devi University in Uttarkashi provides an in-depth study of literature, history, philosophy, languages, and performing arts. Emphasizing advanced critical thinking and research skills, the curriculum combines theoretical knowledge with practical experience through workshops, seminars, and cultural events. Expert faculty members guide students in achieving intellectual growth and prepare them for leadership roles in education, journalism, public relations, and various creative and cultural industries. This program aims to develop proficient professionals equipped with a comprehensive understanding of the liberal arts.
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
        <div className="row" style={{ border: "2px", borderRadius: "20px"}}>
          <div className="col-md-0"></div>
          <div className="col-md-6"><br />
            <p className="nursing-p">
            A 1- year advanced program for M.Lib graduates, focusing on advanced library science, research, digital libraries, and information policy. Career paths include senior librarian, information analyst, library educator, and digital curator.
            </p>
            <h3 className="library-heading">Duration</h3>
            <p><h6 className="nursing-p">1 years (2 Semesters)</h6></p><br />
            <h3 className="library-heading">Eligibility Criteria (Qualifying Exam)</h3>
            
            <p className='nursing-p'>
            <span className='history-span '>• Educational Qualification: </span> 
            Candidate applying for admission in this Program should have passed B.Lib./BLIS with 50% marks from a recognized University. 
            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
• Senior Librarian
• Library Director
• Information Systems Specialist
• Knowledge Manager	


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

export default Mlibarts;
