import React from "react";
import "./schoolhightlight.css";

const Schoolhighlight = () => {
  return (
    <div>
      <div className="container-fluid whycolor p-5">
        <div className="container">
          <h2 className="hightlight-school1">
            School <span className="hightlight-school">Highlights</span>
          </h2>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 high1 p-3 mstud mb-4">
                  <h1 className="text-center promise-h1">
                    <i className="bi bi-calendar3 promise-bg"></i>
                  </h1>
                  <h3 className="high-text">Strong Placement Support</h3>
                  <p className="high-p">
                    Smt. Manjira Devi University offers excellent placement
                    support through a dedicated placement cell. This cell
                    collaborates with top companies to ensure students have
                    access to ample job opportunities. As a result, graduates
                    consistently achieve high placement rates.
                  </p>
                </div>

                <div className="col-md-6 high1 p-3 mstud1 mb-4">
                  <h1 className="text-center promise-h1">
                    <i className="bi bi-bag-check-fill promise-bg"></i>
                  </h1>
                  <h3 className="high-text">5I Pedagogy</h3>
                  <p className="high-p">
                    The 5I Pedagogy at Smt. Manjira Devi University enhances
                    learning with interactive, innovative teaching methods,
                    integrating theory and practice to inspire students to reach
                    their full potential. It is inclusive, ensuring support for
                    all students.
                  </p>
                </div>
              </div>
              <div className="row mstud3 mstud2">
                <div className="col-md-6 high1 p-3 mstud mb-4">
                  <h1 className="text-center promise-h1">
                    <i className="bi bi-book-fill promise-bg"></i>
                  </h1>
                  <h3 className="high-text">Experiential Learning</h3>
                  <p className="high-p">
                    Experiential learning at Smt. Manjira Devi University
                    emphasizes hands-on experiences through real-world projects,
                    internships, and simulations, complementing academic studies
                    and preparing students for professional success.
                  </p>
                </div>

                <div className="col-md-6 high1 p-3 mstud1 mb-4">
                  <h1 className="text-center promise-h1">
                    <i className="bi bi-calendar3 promise-bg"></i>
                  </h1>
                  <h3 className="high-text">Industry Interaction</h3>
                  <p className="high-p">
                    Industry interaction at Smt. Manjira Devi University bridges
                    the gap between academia and the professional world through
                    guest lectures, workshops, and collaborations with industry
                    leaders, enhancing employability and preparing students for
                    real-world challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <h3 className="hightlight-school2">
                  Here’s what you can avail yourself at MANJIRA
                </h3>
                <div className="col-6 col-md-4 high2 mt-3 ms-2 me-1 mb-4">
                  <h1 className="text-center high4">
                    <i className="bi bi-people-fill promise-bg"></i>
                  </h1>
                  <h3 className="high3 text-white mb-0 p-1">Mentorship</h3>
                </div>
                <div className="col-6 col-md-4 high2 mt-3 ms-3 mb-4">
                  <h1 className="text-center high4">
                    <i className="bi bi-calendar3 promise-bg"></i>
                  </h1>
                  <h3 className="high3 text-white mb-0 p-1">Infrastructure</h3>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-6 col-md-4 high2 mt-3 ms-2 me-1 mb-4">
                  <h1 className="text-center high4">
                    <i className="bi bi-reception-4 promise-bg"></i>
                  </h1>
                  <h3 className="high3 text-white mb-0 p-1">Resources</h3>
                </div>
                <div className="col-6 col-md-4 high2 mt-3 ms-3 mb-4">
                  <h1 className="text-center high4">
                    <i className="bi bi-phone-vibrate-fill promise-bg"></i>
                  </h1>
                  <h3 className="high3 text-white mb-0 p-1">Networking</h3>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-6 col-md-4 high2 mt-3 ms-2 me-1 mb-4">
                  <h1 className="text-center high4">
                    <i className="bi bi-person-lines-fill promise-bg"></i>
                  </h1>
                  <h3 className="high3 text-white mb-0 p-1">Investors</h3>
                </div>
                <div className="col-6 col-md-4 high2 mt-3 ms-3 mb-4">
                  <h1 className="text-center high4">
                    <i className="bi bi-card-heading promise-bg"></i>
                  </h1>
                  <h3 className="high3 text-white mb-0 p-1">Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schoolhighlight;
