import React from "react";
import { Link } from "react-router-dom";
import OurSchool from "../Component/OurSchool/OurSchool";
import Program from "../Component/Program/Program";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Nav.css";
import "./Home.css"
import StudentSpeak from "./Testimonial/StudentSpeak";
import StudentLife from "./Studentlife/Studentlife";
import Gallery from "./Gallery/Gallery";
import Accreditations from "./Accreditations/Accreditations";
import Schoolhighlight from "./Schoolhighlight/Schoolhighlight";
import homeimg from "../images/123.jpeg"
import homeimg1 from "../images/124.jpeg"
import homeimg2 from "../images/125.jpg"


function Home() {


  return (
    <div>
       <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
       
      >
        <div className="carousel-inner">
          <div className="carousel-item active" >
            <img src={homeimg} className="d-block w-100" alt="..."  data-bs-interval="3000" />
          </div>
          <div className="carousel-item">
            <img src={homeimg1} className="d-block w-100" alt="..."  data-bs-interval="1000" />
          </div>
          <div className="carousel-item">
            <img src={homeimg2} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      <div className="container mt-5 ww1">
        <div className="row">
          <div className="col-md-5">
            <h1 className="text-center">
              <span className="bg3">19+ Years</span> Of Excellence
            </h1>
            <div className="row mt-3 ">
              <div className="col-md-5 me-0 bg7 p-2">
                <h1 className="bg5">250+</h1>
                <p className="bg8">Placed in Govt. Sector</p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 bg7 ms-0 p-2">
                <h1 className="bg5">100+</h1>
                <p className="bg8">Medical Camps</p>
              </div>
            </div>
            <div className="row mt-3 ">
              <div className="col-md-5 me-0 bg7 p-2">
                <h1 className="bg5">80%</h1>
                <p className="bg8">Placement Record</p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 bg7 ms-0 p-2 ">
                <h1 className="bg5">4000+</h1>
                <p className="bg8">Pass Out Students</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-2 ">
            <h1 className="text-center">
              <span className="bg3">Academics</span> Notifications
            </h1>
            <div className="row cards">
              <div className="col-md-4 ww  ">
                <div className="card bf mt-2 p-3">
                  <center>
                    <h5 className="bf1 g-0 p-1">18-06-2024</h5>
                  </center>
                  <center>
                    <p className="mt-3 bf3 ">
                      Details Notifications Ph.D Entrance Examination session
                      2024-25 <span className="new p-1">New</span>
                    </p>
                  </center>
                  <center>
                    {" "}
                    <Link to="/phdpdf" class="btn  bf4">
                      Open Pdf
                    </Link>
                  </center>
                </div>
              </div>
              <div className="col-md-4 ww  ">
                <div className="card bf mt-2 p-3 ">
                  <center>
                    <h5 className="bf1 g-0 p-1">18-06-2024</h5>
                  </center>
                  <center>
                    <p className="mt-3 bf3 ">
                      Details Notifications B.Ed Entrance Examination session
                      2024-25 <span className="new p-1">New</span>
                    </p>
                  </center>
                  <center>
                    {" "}
                    <Link to="/bedpdf" class="btn  bf4  ">
                      Open Pdf
                    </Link>
                  </center>
                </div>
              </div>
              <div className="col-md-4 ww  ">
                <div className="card bf mt-2 p-3 ">
                  <center>
                    <h5 className="bf1 g-0 p-1">18-06-2024</h5>
                  </center>
                  <center>
                    <p className="mt-3 bf3 ">
                      Application Form Ph.D & B.Ed Entrance Examination session
                      2024-25 <span className="new p-1">New</span>
                    </p>
                  </center>
                  <center>
                    {" "}
                    <Link
                      to="/entrancepdf"
                      class="btn  bf4  "
                    >
                      Open Pdf
                    </Link>
                  </center>
                </div>
              </div>

              <Link to="/academics" className="notification">
                Click here for all Notifications
                <i class="fa-solid fa-arrow-right p-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 about mb-5">
        <div className="row p-5">
          <div className="col-md-2"></div>
          <div className="col-md-8" data-aos="fade-left" data-Aos-duration="1600">
            <center>
              <h1 className="bga">
                <span className="bgudit">SMT. </span>Manjira Devi University
              </h1>
              <h1 className="bgb">
                The Best University in Uttarkashi, Uttarakhand
              </h1>
              <p className="bgc">
                The Smt. Manjira Devi Shikshan Avam Prashikshan Sanstan in this
                remote hilly region have established a new university in Hitanu
                Dhanari village, a small but historic town on the banks of
                Bhagirathi river in Uttarkashi, Uttarakhand with the objective
                of providing quality technical, scientific and vocational
                education with skills to make the area socio-economically
                prosperous and to prevent migration of youth. It was an
                expression of the desire to empower the future generation so
                that they can overcome their economic and social backwardness,
                geographical and environmental barriers, re-establish the
                cultural identity of the local natural and human resources for
                development.
              </p>

              <Link to="/about" class="btn bgd">
                Know more
              </Link>
            </center>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <Program />

      <OurSchool />
      <Accreditations />

      <StudentSpeak />
      <StudentLife />
      <Gallery />
      <Schoolhighlight />
    </div>
  );
}

export default Home;
