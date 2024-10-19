import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";
import { Link } from "react-router-dom";

function School4() {
  return (
    <div className="school1-page">
      {/* <div className="container-fluid agriculture-image">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <center>
                <h2 className="text-white display-3 nursingsmt " >
                School of Agriculture
                </h2>
              </center>
            </div>
          </div>
        </div>
      </div> */}
<h1 className="mt-4 fs-2 text-success fw-bold text-center">School of Agriculture</h1>
      
      <div className="container-fluid mt-5">
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
          <div className="col-md-6"></div>
          <h2 className="mb-2 mt-1 nursingh">
                <span className="nursing-span">About </span>Us
              </h2>
          <div className="col-md-6 text-column"
               style={{ fontSize: "1.2rem", fontFamily: "serif", textAlign: "justify" }}>
            Welcome to the School of Agriculture, where tradition meets innovation in agricultural education and research.
            Our school is dedicated to preparing future leaders in agriculture by offering comprehensive programs that blend theoretical knowledge with practical experience. At the School of Agriculture, we understand the vital role that agriculture plays in global sustainability, food security, and economic development. Therefore, our curriculum is designed to equip students with the skills, expertise, and ethical values necessary to address current and emerging challenges in agriculture.<br></br>
            
          </div>
          &emsp;&emsp;&emsp;<div className="col-md-4 image-column">
            <img
              className="img-fluid"
              src="/comm1.jpeg"
              alt="commerce"
            />
          </div>
        </div>
        </div>
        </div>
        <div className='container-fluid mt-3 whycolor p-4'>
<div className='container'>
<div className='row'>
<h2 className=' about-history'>Why  <span className='about-span'>Choose Us?</span></h2>
<p className="mission1 mt-3">
<span className="history-span">1.	Comprehensive Programs:</span> 1.We offer a diverse range of programs such as B.Sc Agriculture, M.Sc Agronomy, M.Sc Horticulture, and Diploma - Agriculture, each designed to provide a solid foundation in their respective fields. Our curriculum blends rigorous academics with hands-on practical experience, ensuring you are well-prepared for the challenges of the agricultural industry.
</p>
<p className="mission1 mt-2 ">
            <span className="history-span">2.Expert Faculty and Research Opportunities:</span> Our faculty members are experienced professionals and researchers who are passionate about agriculture. They provide mentorship and guidance, encouraging students to explore cutting-edge research and innovative solutions to global agricultural issues.
</p>
<p className="mission1 mt-2 ">
           
<span className="history-span">3.	State-of-the-Art Facilities: </span>The School of Agriculture boasts modern laboratories, research farms, and greenhouses equipped with advanced technology. These facilities provide a dynamic environment for hands-on learning, experimentation, and fieldwork, enhancing your practical skills and knowledge.
</p>
<p className='mission1 mt-2'>
<span className="history-span">4.	Career Opportunities:</span> Graduates from our programs are in high demand across various sectors of agriculture. Whether you aspire to become a registered nurse in healthcare settings, a horticulturist specializing in crop production, or an agricultural technician managing farm operations, our programs prepare you for diverse career paths.

</p>
<p className='mission1 mt-2'>
<span className="history-span">5.Focus on Sustainability and Innovation:</span>We emphasize sustainable agricultural practices, resource management, and the integration of technology in farming. You will gain insights into modern agricultural techniques and contribute to addressing global food security challenges.
</p>
<p className='mission1 mt-2'>
<span className="history-span">6.Community and Networking:</span> Joining the School of Agriculture means becoming part of a supportive and inclusive community. Through industry partnerships, internships, and alumni networks, you will have opportunities to connect with professionals and experts in the field, expanding your career prospects and knowledge base.

</p>
<p className='mission1 mt-2'>
<span className="history-span">7.	Global Perspectives:</span> Our programs offer opportunities for international collaboration, study abroad programs, and exposure to global agricultural practices. This global perspective prepares you to tackle agricultural issues on a global scale and adapt to diverse cultural and environmental contexts.

</p>
<p className='mission1 mt-2'>
<span className="history-span">8.	Personal Growth and Leadership Development:  </span>Beyond academics, we foster personal growth, leadership skills, and ethical values. You will develop critical
</p>

</div>
<div className='row mt-3'>
    <div className='col-md-12 p-5 promise-help'>
      <h2 className='promise-bg2'>Dean's Message </h2>
      <p className='mt-4 promise-bg3'>Welcome to the School of Agriculture, where we cultivate knowledge, innovation, and leadership in the field of agriculture.<br/>
      At our esteemed institution, we are committed to preparing future leaders who will shape the future of agriculture and contribute to global food security. Our programs, including B.Sc Agriculture, M.Sc Agronomy, M.Sc Horticulture, and Diploma in Agriculture, are designed to provide you with a comprehensive understanding of agricultural principles, sustainable practices, and technological advancements.<br/> As Dean, I am proud to lead a dedicated faculty of experts who are passionate about agricultural research, education, and community service. Our faculty members bring a wealth of experience and knowledge to the classroom, ensuring that you receive a rigorous education that combines theory with hands-on practical experience
</p>

    </div>

  </div>
</div>
</div>
<div className='container-fluid mt-4 baartsbg2 p-4'>
<div className="container mt-3">
<h1 className='baarts-heading mb-3'>Our <span className='baarts-span'>Courses</span> </h1>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card1">
              <h4 className="card-title khusbhucard-heading">Diploma in Agriculture </h4>
              <p className="card-text khusbhucard-paiding">
                Learn the fundamentals of Agriculture and develop skills in
                crop cultivation, soil management, agricultural economics and etc.
              </p>
              <Link to="/diploma" className="btn btn-primary">Know more</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1">
              <h5 className="card-title khusbhucard-heading">Bachelor of Science in Agriculture</h5>
              <p className="card-text khusbhucard-paiding">
                Explore the world of Agriculture and develop skills in
                practical training in agricultural practices and fieldwork.
              </p>
              <Link to="/bscagr" className="btn btn-primary">Know more</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1">
              <h5 className="card-title khusbhucard-heading">Master of Science in Agriculture</h5>
              <p className="card-text khusbhucard-paiding">
                Dive into the world of Agriculture and
                develop skills in  Agronomy, Horticulture, Soil Science, Plant Pathology, Agricultural Economics, and etc.
              </p>
              <Link to="/mscagr" className="btn btn-primary">Know more</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1">
              <h5 className="card-title khusbhucard-heading">Master of Science in Horticulture </h5>
              <p className="card-text khusbhucard-paiding">
                Dive into the world of Horticulture and
                develop skills in practical training in horticultural practices and research.
              </p>
              <Link to="/mschor" className="btn btn-primary">Know more</Link>
            </div>
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
          <div className="col-md-6">
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
}

export default School4;
