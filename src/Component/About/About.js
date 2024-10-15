import React from 'react';
import './about.css';
import { Link } from "react-router-dom";
import Gallery from '../Gallery/Gallery';

const About = () => {
  return (
    <div>
      

      <div className="container-fluid  aboutbg2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-4 ">
              <h1 className="mb-2 mt-2 about-h1"><span className="about-span">About </span>Us</h1>
              <p className="mt-3 about-p">
              Smt. Manjira Devi University, Uttarkashi is established as a Private University of Uttarakhand vide Sate Government Notification No 114/XXXVI(3)/2024/13(1)/2024 dated 16th March, 2024.
              </p>
              <p className='mt-2 about-p'>
              The Smt. Manjira Devi Shikshan Avam Prashikshan Sanstan in this remote hilly region have established a new university in Hitanu Dhanari village, a small but historic town on the banks of Bhagirathi river in Uttarkashi, Uttarakhand with the objective of providing quality technical, scientific and vocational education with skills to make the area socio-economically prosperous and to prevent migration of youth. It was an expression of the desire to empower the future generation so that they can overcome their economic and social backwardness, geographical and environmental barriers, re-establish the cultural identity of the local natural and human resources for development.

              </p>
              <p className='mt-2 about-p'>
              Smt. Manjira Devi University, located in the serene Himalayan region of Uttarakshi, Uttarakhand, emerged from over two decades of experience as a group of institutions. Founded on principles of academic excellence, cultural preservation, and environmental stewardship, the university stands as a beacon of holistic education and community empowerment.

              </p>
            </div>

            <div className="col-md-6 p-5">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="img1.jpeg" className="d-block w-100 about-crousel " alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="img2.jpg" className="d-block w-100 about-crousel" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="img3.jpeg" className="d-block w-100 about-crousel" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className='container-fluid mt-5'>
<div className='container'>
<div className='row'>
<h2 className=' about-history'>History <span className='about-span'>and Context:</span></h2>
<p className='history1 mt-3'>
Uttarkashi is a town located in<span className='history-span'> Uttarkashi district in Uttarakhand, India.</span> Uttarkashi town is headquarters of the district. Uttarkashi is also known as Somya Kashi. Uttarkashi is a Hindu religious place for spiritual and adventurous tourism. Uttarkashi town is also called as Shivnagri. The town has number of temples and ashrams. Uttarkashi is known for its religious people, weather, education. Uttarkashi is situated on the banks of river Bhagirathi at an altitude of 1158 m above sea level. Uttarkashi is generally known as a holy town close to Rishikesh. 

</p>
<p className='history1 mt-2'>
Its holds deep cultural roots and spiritual significance in the Indian Himalayas. The region is renowned for its natural beauty, ancient temples, and as a gateway to numerous pilgrimage sites and trekking destinations. The university's establishment builds upon this rich legacy,<span className='history-span'> integrating local traditions with modern educational practices</span> to foster a unique learning environment.

</p>
<p className='history1 mt-2'>
In summary,<span className='history-span'> Smt. Manjira Devi University</span> exemplifies a blend of tradition and modernity, dedicated to shaping future leaders who are grounded in local ethos yet globally competent, while championing sustainable development in the Himalayan region

</p>
</div>
</div>
</div>
      <div className="container-fluid mt-5 about mb-5">
        <div className="row p-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <center>
              <h1 className="bga">Manjira Devi University</h1>
              <h1 className="bgb">The Best University in Uttarkashi, Uttarakhand</h1>
              <p className="bghu">
              The Smt. Manjira Devi Shikshan Avam Prashikshan Sanstan in this remote hilly region have established a new university in Hitanu Dhanari village, a small but historic town on the banks of Bhagirathi river in Uttarkashi, Uttarakhand with the objective of providing quality technical, scientific and vocational education with skills to make the area socio-economically prosperous and to prevent migration of youth. It was an expression of the desire to empower the future generation so that they can overcome their economic and social backwardness, geographical and environmental barriers, re-establish the cultural identity of the local natural and human resources for development.
              </p>

              <Link to="/about" className="btn bgd" data-aos="fade-up">Know more</Link>
            </center>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
