import React from "react";
import "./school2.css";
import Library from "../Library/Library";
import { Link } from "react-router-dom";
function School2() {
  return (
    <div className="School1-page">
         {/* <div class="container-fluid science-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt "  >School Of Science and Technology</h2></center>
   
  </div>
      </div>
    </div>
</div> */}
<h1 className="mt-4 fs-2 text-success fw-bold text-center">School Of Science and Technology</h1>
     
<div className="container-fluid">
<div className="container p-5">
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
          }}
        >
          <br></br>
          <div className="col-md-6"></div>
          <h2 className="mb-2 nursingh">
                <span className="nursing-span">About </span>Us
              </h2>
          <div
            className="col-md-6 text-column p-3"
            style={{ fontSize: "1.2rem",fontFamily:"serif",textAlign:"justify" }}
          >
            Welcome to the School of Science and Technology, where exploration, discovery, and innovation converge to shape the future of technology and scientific inquiry.
            Our school is dedicated to fostering a dynamic learning environment that nurtures curiosity, critical thinking, and creativity. We offer a diverse array of programs designed to equip students with the knowledge, skills, and practical experience needed to excel in their chosen fields within science and technology.
          </div>
          <div className="col-md-4 image-column">
            <img
              style={{ height: "85%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
          </div>
          </div>
          </div>
          <div className='container-fluid mt-3 whycolor p-5'>
<div className='container'>
<div className='row'>
<h2 className=' about-history'>Why  <span className='about-span'>Choose Us?</span></h2>
<p className="mission1 mt-3">
<span className="history-span">1.	Comprehensive Programs:</span> We offer a wide range of programs including B.Sc in various streams (PCM/PCB/ZBC/CS), BCA, M.Sc in PCM/PCB/ZBC/CS, MCA, and specialized Diploma programs in Artificial Intelligence and Machine Learning, Data Science & Cloud Technology, Cyber Security, and Forensic Science. Our programs are carefully crafted to provide a robust blend of theoretical knowledge and practical skills necessary for today’s competitive job market.
</p>
<p className="mission1 mt-2 ">
            <span className="history-span">2.Expert Faculty</span>Our faculty members are experienced professionals and scholars in their respective fields. They bring a wealth of knowledge and industry expertise to the classroom, ensuring that you receive a high-quality education that meets industry standards and prepares you for real-world challenges.
</p>
<p className="mission1 mt-2 ">
           
<span className="history-span">3.	State-of-the-Art Facilities: </span>The institution boasts state-of-the-art laboratories, research centers, and computing facilities. These facilities provide an immersive learning environment where you can conduct experiments, engage in hands-on projects, and explore innovative ideas under the guidance of expert faculty.
</p>
<p className='mission1 mt-2'>
<span className="history-span">4.	Industry-Relevant Curriculum:</span> Our curriculum is designed in consultation with industry experts to ensure it remains current and relevant. We emphasize practical learning experiences, industry internships, and projects that allow you to apply classroom knowledge to real-world scenarios.

</p>
<p className='mission1 mt-2'>
<span className="history-span">5.Career Opportunities:</span> Graduates from our programs are highly sought after by employers in diverse sectors including technology firms, healthcare, research institutions, government agencies, and more. Our alumni have secured positions as software engineers, data scientists, cybersecurity analysts, researchers, and IT professionals globally.

</p>
<p className='mission1 mt-2'>
<span className="history-span">6.	Global Perspectives:</span> We promote a global outlook through international collaborations, exchange programs, and exposure to global trends in science and technology. This prepares you to thrive in a multicultural and interconnected world.

</p>
<p className='mission1 mt-2'>
<span className="history-span">7.	Supportive Learning Environment:</span>We prioritize your personal and academic growth. Our institution fosters a supportive learning environment where you can collaborate with peers, participate in extracurricular activities, and develop leadership and interpersonal skills that complement your academic achievements.
</p>
<p className='mission1 mt-2'>
<span className="history-span">8.Career Guidance and Placement Support:</span>We provide comprehensive career guidance and placement support services to help you transition smoothly from academia to your desired career path. Our network of alumni and industry partnerships offers valuable networking opportunities and professional connections.
</p>
</div>
<div className='row mt-3'>
    <div className='col-md-12 p-5 promise-help'>
      <h2 className='promise-bg2'>Dean's Message </h2>
      <p className='mt-4 promise-bg3'>Welcome to Smt. Manjira Devi University, Uttarkashi, where innovation meets education in the dynamic fields of science, technology, and computer applications.<br/>
      At Smt. Manjira Devi University, Uttarkashi , we are committed to fostering a learning environment that inspires curiosity, nurtures creativity, and promotes academic excellence. Our institution stands at the forefront of advancing knowledge and preparing the next generation of leaders who will drive innovation and solve complex challenges in our rapidly evolving world.<br/> As Dean, I am privileged to lead a distinguished faculty of dedicated educators and researchers who are experts in their fields. Our faculty members are not only committed to delivering high-quality education but also to mentoring and guiding students towards achieving their academic and professional goals.

</p>

    </div>

  </div>
</div>
</div>
<div className='container-fluid mt-5 baartsbg2 p-5'>
<div className="container mt-5">
<h1 className=' baarts-heading mb-3'>Our <span className='baarts-span'>Courses</span> </h1>
          <div className="row mt-5">
          <div className="col-md-4">
            <div className="card1">
              <h4 className="card-title khusbhucard-heading">Bachelor of Science in PCM/PCB/ZBC/CS</h4>
              <p className="card-text khusbhucard-paiding">
                Learn the fundamentals of Science and develop skills in
                designing, building, and maintaining infrastructure.
              </p>
              <Link  to="/bsc" className="btn btn-primary">Know more</Link>
             
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" >
              <h4 className="card-title khusbhucard-heading">Bachelor of Computer Applications (BCA)</h4>
              <p className="card-text khusbhucard-paiding">
                Explore the world of Computer Application and develop skills in
                designing, manufacturing, and maintaining computer applications.
              </p>
              <Link  to="/bca" className="btn btn-primary">Know more</Link>
             
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" >
              <h4 className="card-title khusbhucard-heading">Master of Science - PCM/PCB/ZBC/CS</h4>
              <p className="card-text khusbhucard-paiding">
                Learn the fundamentals of Science and develop skills in
                designing, building, and maintaining Application.
              </p>
              <Link  to="/msc" className="btn btn-primary">Know more</Link>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" >
              <h4 className="card-title khusbhucard-heading">Master of Computer Applications (MCA)</h4>
              <p className="card-text khusbhucard-paiding">
                Explore the world of Mechanical Engineering and develop skills in
                designing, manufacturing, and maintaining mechanical systems.
              </p>
              <Link  to="/mca" className="btn btn-primary">Know more</Link>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1">
              <h4 className="card-title khusbhucard-heading" >Diploma - AI and ML / Data Science & Cloud Technology / Cyber Security / Forensic Science</h4>
              <p className="card-text khusbhucard-paiding">
                Dive into the world of technologies and
                develop skills in maintaining software and Mechanical
                systems.
              </p>
              <Link  to="/data" className="btn btn-primary">Know more</Link>
              
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
              <p style={{color:'white'}}>To become a center of excellence in skill development and groom the Engineering professional to cope up
                 with the changing global scenario through research and innovation.</p>
           <hr></hr>
              <h2>Mission</h2>
              <ul style={{color:'white'}}>
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
      <img src="/science1.jpeg" className="d-block w-100 carousel-image" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src="/science2.jpeg" className="d-block w-100 carousel-image" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img src="/science3.jpeg" className="d-block w-100 carousel-image" alt="Slide 3" />
    </div>
    <div className="carousel-item">
      <img src="/science4.jpeg" className="d-block w-100 carousel-image" alt="Slide 3" />
    </div>
    <div className="carousel-item">
      <img src="/science5.jpeg" className="d-block w-100 carousel-image" alt="Slide 3" />
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
        <Library/>
    </div>
  );
}

export default School2;