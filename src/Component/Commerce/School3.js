import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";
import { Link } from "react-router-dom";
function School3() {
  return (
    <div className="School1-page">
       {/* <div class="container-fluid commerce-image  "> */}
 {/* <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  ">School of Commerce and Management Studies</h2></center>
   
  </div>
      </div>
    </div>
</div> */}
<h1 className="mt-4 fs-2 text-success fw-bold text-center">School of Commerce and Management Studies</h1>

<div className="container-fluid">
      <div className="container p-2">
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}
        >
          <br></br>
          <div className="col-md-6 mt-4"></div>
          <h2 className="mb-2 nursingh">
                <span className="nursing-span">About </span>Us
              </h2>
          <div className="col-md-6 text-column p-3" style={{ fontSize: "18px",fontFamily:"serif",textAlign:"justify" }}>
          The School of Commerce and Management Studies at Smt. Manjira Devi University, Uttarkashi, is dedicated to providing top-tier education and fostering excellence in the fields of business, commerce, and management. Our school offers a wide array of programs designed to equip students with the knowledge, skills, and experiences needed to excel in the dynamic world of business. Our comprehensive curriculum, experienced faculty, and strong industry connections ensure that our graduates are well-prepared to meet the demands of the global marketplace.
          </div>
          
          <div className="col-md-4 image-column">
            <img style={{ height: "85%" }} src="/comm1.jpeg" alt="commerce" className="img-fluid" />
          </div>
          </div>
          </div>
        </div>
        <div className='container-fluid mt-3 whycolor p-4'>
<div className='container'>
<div className='row'>
<h2 className=' about-history'>Why  <span className='about-span'>Choose Us?</span></h2>
<p className="mission1 mt-3">
<span className="history-span">1.	Experienced Faculty:</span> Our faculty members are highly qualified, with extensive academic and industry experience.
</p>
<p className="mission1 mt-2 ">
            <span className="history-span">2.Comprehensive Curriculum: </span> We offer a wide range of programs and specializations to cater to diverse academic interests and career goals.
</p>
<p className="mission1 mt-2 ">
           
<span className="history-span">3.	Research Opportunities</span>Students have access to cutting-edge research facilities and are encouraged to engage in innovative projects.
</p>
<p className='mission1 mt-2'>
<span className="history-span">4.Industry Connections:</span> Strong partnerships with industry leaders provide valuable networking opportunities and real-world experience
</p>
<p className='mission1 mt-2'>
<span className="history-span">5.Career Preparation:</span> Our programs are designed to equip students with not only technical skills but also soft skills such as communication, teamwork, and problem-solving. We offer career counseling, workshops, and placement assistance to help students launch successful careers in engineering.

</p>
<p className='mission1 mt-2'>
<span className="history-span">6.	Global Perspectives:</span> Our curriculum incorporates global perspectives, preparing students to thrive in an interconnected world.

</p>
<p className='mission1 mt-2'>
<span className="history-span">7.	Career Support: </span>We provide robust career services, including internships, job placements, and career counselling.
</p>

</div>
<div className='row mt-3'>
    <div className='col-md-12 p-5 promise-help'>
      <h2 className='promise-bg2'>Dean's Message </h2>
      <p className='mt-4 promise-bg3'>As the Dean of this prestigious university, it is my honor to extend a warm welcome to all our students, faculty, staff, and partners. Our School stands at the forefront of business education, driven by a commitment to excellence, innovation, and the holistic development of our students.<br/>
      In today’s dynamic and interconnected world, the role of commerce and management education has never been more critical. At Smt. Manjira Devi University, Uttarkashi,  we equip our students with the knowledge, skills, and ethical foundation necessary to navigate and lead in the global marketplace. Our rigorous academic programs, coupled with real-world experiences, prepare our graduates to become influential leaders and change makers in their respective fields.<br/>Our faculty comprises distinguished scholars and industry experts who are dedicated to fostering an environment of intellectual curiosity and practical insight. Their research and teaching not only contribute to the advancement of knowledge but also ensure that our curriculum remains relevant and forward-thinking.
</p>

    </div>

  </div>
</div>
</div>
<div className='container-fluid mt-4 baartsbg2 p-4'>
<div className="container mt-3">
<h1 className=' baarts-heading mb-3'>Our <span className='baarts-span'>Courses</span> </h1>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card1" >
              <h5 className="card-title khusbhucard-heading">B.Com</h5>
              <p className="card-text khusbhucard-paiding">
                Learn the fundamentals of B.Com and develop skills in
                Financial Accounting, Business Law, Economics, Taxation and etc .
              </p>
              <Link  to="/bcom" className="btn btn-primary">Know more</Link>
             
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" >
              <h5 className="card-title khusbhucard-heading">BBA</h5>
              <p className="card-text khusbhucard-paiding">
                Explore the world of BBA and develop skills in
                Management Principles, Business Economics, Organizational Behavior and etc.
              </p>
              <Link  to="/bba" className="btn btn-primary">Know more</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1">
              <h5 className="card-title khusbhucard-heading">M.Com</h5>
              <p className="card-text khusbhucard-paiding">
                Dive into the world of M.Com and develop skills in
                Financial Management, Corporate Governance, Research Methodology, Tax Planning and etc.
              </p>
              <Link  to="/mcom" className="btn btn-primary">Know more</Link>
              
            </div>
          </div>
        </div>
        <div className="row mt-5">
        <div className="col-md-4">
            <div className="card1" >
              <h5 className="card-title khusbhucard-heading">MBA</h5>
              <p className="card-text khusbhucard-paiding">
                Learn the fundamentals of MBA and develop skills in Strategic Management, Business Analytics, Financial Accounting, Organizational Behavior, Operations Management
              </p>
              <Link  to="/mba" className="btn btn-primary">Know more</Link>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" >
              <h5 className="card-title khusbhucard-heading">P.hd</h5>
              <p className="card-text khusbhucard-paiding">
                Learn the fundamentals of P.hd and develop skills in
                Finance, Marketing, Human Resources, Organizational Behavior, Strategic Management, and etc.
              </p>
              <Link  to="/phd" className="btn btn-primary">Know more</Link>
              
            </div>
          </div>
        </div>
        </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="vision-section">
              <h2>Vision</h2>
              <p style={{ color: 'white' }}>To become a center of excellence in skill development and groom the Engineering professional to cope up
                with the changing global scenario through research and innovation.</p>
              <hr></hr>
              <h2>Mission</h2>
              <ul style={{ color: 'white' }}>
                <li>Enhancing academics by including the latest technologies to make the students industry-ready.</li>
                <li>Providing a scholarly and professional environment in the field of engineering.</li>
                <li>Promote cutting-edge research and innovation for the development of the nation.</li>
                <li>To create academic-industry linkage for experiential learning and practical exposure.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/img2.jpg" className="d-block w-100 carousel-image img-fluid" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="/img3.jpeg" className="d-block w-100 carousel-image img-fluid" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src="/img5.jpg" className="d-block w-100 carousel-image img-fluid" alt="Slide 3" />
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
      </div>
      <Library />
    </div>
  );
}

export default School3;
