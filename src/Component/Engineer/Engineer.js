import React from "react";
import "./school1.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const InfoSection = ({ title, content }) => {
  return (
    <div className="info-section">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const HighlightItem = ({ content }) => {
  return (
    <div className="highlight-item">
      <p>{content}</p>
    </div>
  );
};

function Engineer() {
  return (
    <div className="School1-page">
      <div className="container-fluid civil-image">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <center>
                <h2 className="text-white display-3 nursingsmt">
                  Diploma - Civil Engineering
                </h2>
              </center>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row">
          <div className="col-md-12">
            <div className="program-details">
              <div className="program-overview">
                <h1>Program Overview</h1>
                <p style={{ fontSize: "18px" }}>
                  Diploma in Civil Engineering focuses on the study of designing, constructing, and
                  maintaining physical infrastructure such as buildings, roads,
                  bridges, dams, and water supply systems. It combines theoretical
                  knowledge with practical skills to equip students with the
                  necessary expertise to plan, analyze, and execute civil
                  engineering projects. During the course, students learn about
                  various aspects of civil engineering, including structural
                  analysis, construction materials, geotechnical engineering,
                  transportation engineering, environmental engineering, and
                  hydraulic engineering. They also gain hands-on experience
                  through practical sessions, laboratory work, and site visits.
                  They play a vital role in designing safe and efficient
                  structures, managing construction projects, ensuring compliance
                  with regulations, and implementing innovative solutions for
                  infrastructure development.
                </p>
              </div>
              <div className="program-info">
                <div className="info-box">
                  <p><strong>Duration</strong></p>
                  <p>3 Years(6 semester)</p>
                  <p>Lateral Entry: 2 Years (4 Semesters)</p>
                </div>
                <div className="info-box">
                  <p><strong>Program Name :</strong></p>
                  <p>Diploma Civil Engineering</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="program-tracks">
              <h2>Program's Major Tracks</h2>
              <div className="tracks">
                <div className="track">Construction materials</div>
                <div className="track"> Surveying</div>
                <div className="track"> Structural analysis</div>
                <div className="track"> Project management</div>
              </div>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="main-page">
              <div className="cards">
                <Card
                  title="Civil Engineering Technician"
                  description="Learn to conduct site inspections, prepare project estimates, and ensure compliance with engineering standards and safety regulations."
                  image="science1.jpeg"
                />
                <Card
                  title="Site Supervisor"
                  description="Supervise on-site construction activities, ensuring projects are completed on time, within budget, and according to specifications."
                  image="science7.jpeg"
                />
                <Card
                  title="Construction Project Coordinator"
                  description="Oversee the coordination of construction projects, from planning to completion. Manage project schedules, liaise with contractors and stakeholders."
                  image="science3.jpeg"
                />
                <Card
                  title="CAD Technician"
                  description="Utilize computer-aided design software. Collaborate with engineers and architects to translate conceptual designs into precise blueprints for building and infrastructure development."
                  image="science4.jpeg"
                />
              </div>
              <div className="info-sections">
                <InfoSection
                  title="Eligibility Criteria"
                  content="3 Years (6 Semesters). The candidate must have passed 10th examination or equivalent with 40% marks or equivalent Grade Point Average (GPA) from a recognized board."
                />
                <InfoSection
                  title="Duration and Eligibility (Lateral Entry)"
                  content="2 Years (4 Semesters). 10+2 or equivalent with PCM OR ITI Diploma (2 Years) with 40% marks or equivalent Grade Point Average (GPA) from a recognized board"
                />
              </div>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="program-highlights">
              <h2>Program Highlights</h2>
              <div className="highlight-items">
                <HighlightItem content="Learn by Doing: Hands-on learning through case studies and projects." />
                <HighlightItem content="Industry Ready: Six-month industry internship for real-world experience." />
                <HighlightItem content="Industry Connections: Dedicated industry-academia partnerships for internship and placement opportunities." />
                <HighlightItem content="Entrepreneurship Support: On-campus incubator for entrepreneurial opportunities." />
                <HighlightItem content="Advanced Labs: State-of-the-art labs with cutting-edge technology." />
                <HighlightItem content="Global Exposure: National and international immersion programs." />
                <HighlightItem content="Beyond Academics: Essential skill development through workshops." />
                <HighlightItem content="Expert Learning: Renowned faculty and industry guest speakers." />
                <HighlightItem content="Master the Latest Technologies: In-demand skills in structural engineering, transportation engineering, geotechnical engineering, environmental engineering, hydraulic engineering, and more." />
              </div>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Engineer;
