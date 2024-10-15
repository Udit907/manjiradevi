import React from 'react';
import './BaArts.css';
import Artscourses from './Artscourses';

const Blibarts = () => {
  return (
    <div>
      <div className="container-fluid baartsimage">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <center>
                <h2 className="text-white display-3 artssmt " >
                Bachelor of Library and Information Science (B.Lib.)
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
                <span className="arts-span">Best Bachelor of Library and Information Science (B.Lib.)</span>University in Uttarkashi
              </h2>
              <p className="mt-3 arts-p">
              The Bachelor of Library and Information Science (B.Lib.) program at Smt. Manjira Devi University in Uttarkashi offers a comprehensive curriculum that explores literature, history, philosophy, languages, and performing arts. This program emphasizes critical thinking, cultural appreciation, and communication skills, integrating theoretical knowledge with practical applications through workshops and seminars. Dedicated faculty members foster intellectual growth and prepare students for diverse career paths in education, journalism, public relations, and creative and cultural industries. The program aims to equip students with a well-rounded education in the liberal arts.
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
            A 1-year course for graduates focusing on library science fundamentals, management, and information technology. Graduates can become librarians, information managers, or digital librarians.
            </p>
            <h3 className="library-heading">Duration</h3>
            <p><h6 className="nursing-p">1 years (2 Semesters)</h6></p><br />
            <h3 className="library-heading">Eligibility Criteria (Qualifying Exam)</h3>
            
            <p className='nursing-p'>
            <span className='history-span '>• Educational Qualification: </span> Graduation with 50% marks for GEN and 45% for SC/ST/OBC</p> 
            
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•   Librarian<br/>
•	Information Manager<br/>
•	Archivist<br/>
•	Digital Content Manager<br/>


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

export default Blibarts;
