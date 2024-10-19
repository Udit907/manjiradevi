import React from 'react';
import './Artscourses.css';
import Artscourses from './Artscourses';
import Library from '../Library/Library';

const Artsschool = () => {
  return (
    <div>
      {/* <div className="container-fluid artsimage1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <center>
                <h2 className="text-white display-3 nursingsmt " >
                  School Of Arts and Humanities
                </h2>
              </center>
            </div>
          </div>
        </div>
      </div> */}
<h1 className="mt-4 fs-2 text-success fw-bold text-center"> School Of Arts and Humanities</h1>

      <div className="container-fluid mt-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-2 mt-4 nursingh">
                <span className="nursing-span">About </span>Us
              </h2>
              <p className="mt-4 nursing-p">
              The School of Arts and Humanities at Smt. Manjira Devi University, Uttarkashi is a vibrant academic community dedicated to the study and exploration of human culture, thought, and expression. Our programs are designed to foster critical thinking, creativity, and a deep understanding of the diverse aspects of human life, both past and present.
              </p>
            </div>
            <div className="col-md-6">
              <img src="ourschool3.png" alt="" className="artsimage" />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-3 whycolor p-5'>
<div className='container'>
<div className='row'>
<h2 className=' about-history'>Why  <span className='about-span'>Choose Us?</span></h2>
<p className="mission1 mt-3">
<span className="history-span">1.	Experienced Faculty:</span> Our faculty members are highly qualified, with extensive academic and professional experience.
</p>
<p className="mission1 mt-2 ">
            <span className="history-span">2.	Comprehensive Curriculum:</span> We offer a wide range of programs and specializations to cater to diverse academic interests and career goals.
</p>
<p className="mission1 mt-2 ">
           
<span className="history-span">3.	Research Opportunities: </span>Students have access to cutting-edge research facilities and are encouraged to engage in innovative projects.
</p>
<p className='mission1 mt-2'>
<span className="history-span">4.	Interdisciplinary Approach:</span> Our programs promote interdisciplinary study, allowing students to explore connections between different fields.

</p>
<p className='mission1 mt-2'>
<span className="history-span">5.	Cultural Engagement:</span> Regular events, workshops, and study abroad programs enhance cultural awareness and intellectual engagement.

</p>
<p className='mission1 mt-2'>
<span className="history-span">6.	Global Perspectives:</span> Our curriculum incorporates global perspectives, preparing students to thrive in an interconnected world.

</p>
<p className='mission1 mt-2'>
<span className="history-span">7.	Career Support:</span> We provide robust career services, including internships, job placements, and career counselling.
</p>
</div>
<div className='row mt-3'>
    <div className='col-md-12 p-5 promise-help'>
      <h2 className='promise-bg2'>Dean's Message </h2>
      <p className='mt-4 promise-bg3'>Welcome to the School of Arts and Humanities at Smt. Manjira Devi University. It is my great honor and privilege to serve as the Dean of this vibrant and dynamic academic community.<br/>
In the School of Arts and Humanities, we explore the rich tapestry of human experience through a wide range of disciplines, including English, Hindi, Sanskrit, History, Political Science, Sociology, Education, Economics, and Library and Information Science.<br/> Our programs are designed to cultivate critical thinking, creative expression, and a deep understanding of cultural and historical contexts.

</p>

    </div>

  </div>
</div>
</div>
      <Artscourses />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-2">
            <div className="vision-section">
              <h2>Vision</h2>
              <p style={{ color: 'white' }}>
                To become a center of excellence in skill development and groom the Engineering professional to cope up with the changing global scenario through research and innovation.
              </p>
              <hr />
              <h2>Mission</h2>
              <ul style={{ color: 'white' }}>
                <li>Enhancing academics by including the latest technologies to make the students industry-ready.</li>
                <li>Providing a scholarly and professional environment in the field of engineering.</li>
                <li>Promote cutting-edge research and innovation for the development of the nation.</li>
                <li>To create academic-industry linkage for experiential learning and practical exposure.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-2">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/img2.jpg" className="d-block w-100 carousel-image" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="/img3.jpeg" className="d-block w-100 carousel-image" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src="/img5.jpg" className="d-block w-100 carousel-image" alt="Slide 3" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Library />
    </div>
  );
};

export default Artsschool;
