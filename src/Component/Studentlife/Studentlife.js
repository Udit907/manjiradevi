import React from 'react';
import './Studentlife.css'; // Import CSS file (create if needed)

function StudentLife() {
  return (
    <div className='container-fluid'>
      <section className="student-life" data-aos="zoom-out" data-aos-duration="1600">
        <h2 className="stud1">Students Life @ <span className="stud">Manjira Devi University</span></h2>
        <h4>A community of curious seekers, inventors, researchers, poets, thinkers, musicians, artists, and scholars.</h4>

        <div className="student-gallery">
          <div className="student-card">
            <img src="newimage.jpg" alt="Students practicing yoga" />
            <img src="newimage0.jpg" alt="Faculty members" />
          </div>
          <div className="student">
            <img src="new1.jpg" alt="Principal" />
          </div>
          <div className="student-card">
            <img src="newimage00.jpg" alt="Students practicing yoga" />
            <img src="newimage000.jpg" alt="Faculty members" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentLife;
