import React from "react";
import "./school1.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";
import { Link } from "react-router-dom";

function School1() {
  return (
    <div className="school1-page">
      <h1 className="mt-4 fs-2 text-success fw-bold">School Of Engineering</h1>
      {/* <div className="container-fluid engineering-image">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <center>
                <h2 className="text-white display-3 nursingsmt " >
                  School Of Engineering
                </h2>
              </center>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
<div className="container p-2">
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
          }}
        >
          <br></br>
          <div className="col-md-6"></div>
          <h2 className="mb-2 mt-1 nursingh">
                <span className="nursing-span">About </span>Us
              </h2>
          <div className="col-md-6 text-column"
               style={{ fontSize: "1.2rem", fontFamily: "serif", textAlign: "justify" }}>
            Welcome to the School of Engineering, where innovation meets excellence in education. Our institution is dedicated to shaping the engineers of tomorrow, equipping them with the skills, knowledge, and mindset needed to tackle global challenges and drive technological advancements.
            At the School of Engineering, we offer a comprehensive range of undergraduate and postgraduate programs in various disciplines such as Mechanical Engineering, Electrical Engineering, Computer Science, Civil Engineering, and more. Each program is designed with a strong emphasis on hands-on learning, cutting-edge research, and practical application, ensuring that our graduates are well-prepared for successful careers in their respective fields.<br></br>
            
          </div>
          &emsp;&emsp;&emsp;<div className="col-md-4 image-column">
            <img
              className="img-fluid"
              src="/vision.png"
              alt="School Vision"
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
<span className="history-span">1.	Comprehensive Programs:</span> We offer a wide range of diploma, and undergraduate nd postgraduate programs in diverse engineering disciplines such as Mechanical Engineering, Electrical Engineering, Computer Science, Civil Engineering, and more. Our curriculum is designed to blend theoretical knowledge with practical experience, ensuring our graduates are well-prepared for the challenges of the industry.
</p>
<p className="mission1 mt-2 ">
            <span className="history-span">2.Expert Faculty</span> Our faculty members are distinguished experts and researchers in their fields. They bring extensive industry experience and academic credentials to the classroom, providing students with top-notch education and mentorship.
</p>
<p className="mission1 mt-2 ">
           
<span className="history-span">3.	State-of-the-Art Facilities: </span>The School of Engineering boasts modern laboratories, workshops, and research centers equipped with the latest technology. These facilities provide students with hands-on learning opportunities and foster innovation and experimentation.
</p>
<p className='mission1 mt-2'>
<span className="history-span">4.	Research Opportunities:</span> We encourage and support research initiatives across various engineering disciplines. Students have the opportunity to collaborate with faculty on cutting-edge research projects that contribute to advancements in their fields.

</p>
<p className='mission1 mt-2'>
<span className="history-span">5.Industry Connections:</span>We maintain strong partnerships with industry leaders and organizations. Through internships, industry projects, and guest lectures, students gain practical insights and networking opportunities that enhance their professional development.
</p>
<p className='mission1 mt-2'>
<span className="history-span">6.Career Preparation:</span> Our programs are designed to equip students with not only technical skills but also soft skills such as communication, teamwork, and problem-solving. We offer career counseling, workshops, and placement assistance to help students launch successful careers in engineering.

</p>
<p className='mission1 mt-2'>
<span className="history-span">7.	Global Perspectives:</span> We embrace diversity and foster a global outlook among our students. Our programs include opportunities for international collaborations, study abroad programs, and exposure to global engineering practices.

</p>
<p className='mission1 mt-2'>
<span className="history-span">8.	Community and Engagement: </span>The School of Engineering is a vibrant community where students are encouraged to participate in extracurricular activities, student clubs, and events. We promote leadership development and personal growth alongside academic excellence.
</p>

</div>
<div className='row mt-3'>
    <div className='col-md-12 p-5 promise-help'>
      <h2 className='promise-bg2'>Dean's Message </h2>
      <p className='mt-4 promise-bg3'>Welcome to the School of Engineering, a vibrant community dedicated to excellence in education, innovation, and impactful engineering solutions.<br/>
      As Dean, I am honored to lead a distinguished faculty committed to nurturing aspiring engineers like you. Our mission is clear: to provide a transformative educational experience that prepares you not only for the challenges of today but also for the opportunities of tomorrow.<br/> At the School of Engineering, you will find a dynamic environment where theoretical knowledge meets practical application. Our state-of-the-art laboratories, equipped with cutting-edge technology, provide the perfect platform for hands-on learning and experimentation. Whether you are exploring the intricacies of computer algorithms, designing sustainable structures, optimizing mechanical systems, or delving into the complexities of electrical circuits, our programs are designed to inspire creativity and innovation.
</p>

    </div>

  </div>
</div>
</div>
<div className='container-fluid mt-4 baartsbg2 p-4'>
  <div className="container mt-3">
    <h1 className='baarts-heading mb-3'>Our <span className='baarts-span'>Courses</span></h1>
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card1" style={{ border: '2px'}}>
          <h4 className="card-title khusbhucard-heading">Diploma - Civil Engineering</h4>
          <p className="card-text khusbhucard-paiding">
            Learn the fundamentals of Civil Engineering and develop skills in
            designing, building, and maintaining infrastructure.
          </p>
          <Link to="/engineer" className="btn btn-primary">Know more</Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card1" style={{ border: '2px'}}>
          <h5 className="card-title khusbhucard-heading">Diploma - Mechanical Engineering</h5>
          <p className="card-text khusbhucard-paiding">
            Explore the world of Mechanical Engineering and develop skills in
            designing, manufacturing, and maintaining mechanical systems.
          </p>
          <Link to="/mechanic" className="btn btn-primary">Know more</Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card1" style={{ border: '2px'}}>
          <h5 className="card-title khusbhucard-heading">Diploma - CS & Engineering</h5>
          <p className="card-text khusbhucard-paiding">
            Dive into the world of Computer Science and Engineering and
            develop skills in designing, developing, and maintaining software
            systems.
          </p>
          <Link to="/cse" className="btn btn-primary">Know more</Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card1" style={{ border: '2px'}}>
          <h5 className="card-title khusbhucard-heading">Diploma - Electrical Engineering</h5>
          <p className="card-text khusbhucard-paiding">
            Dive into the world of Electrical Engineering and
            develop skills in designing, developing, and maintaining
            systems.
          </p>
          <Link to="/electrical" className="btn btn-primary">Know more</Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card1" style={{ border: '2px'}}>
          <h5 className="card-title khusbhucard-heading">B.Tech CS & Engineering</h5>
          <p className="card-text khusbhucard-paiding">
            Dive into the world of CS & Engineering and
            develop skills in designing, developing, and maintaining software
            systems, with a strong foundation in Electrical Engineering principles.
          </p>
          <Link to="/computer" className="btn btn-primary">Know more</Link>
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

export default School1;
