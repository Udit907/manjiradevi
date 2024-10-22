import React, { useState} from "react";
import { Link} from "react-router-dom";
import "./Nav.css";
import TopNavBar from "./TopNav/TopNavbar";
import Notnav from "./NotNav/Notnav";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeSubsubDropdown, setActiveSubsubDropdown] = useState(null);
  const [programDropDown,setProgramDropDown] = useState(false);

    

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleSubDropdown = (subDropdown) => {
    setActiveSubDropdown(activeSubDropdown === subDropdown ? null : subDropdown);
  };

  const toggleSubsubDropdown = (subsubDropdown) => {
    setActiveSubsubDropdown(activeSubsubDropdown === subsubDropdown ? null : subsubDropdown)
  }

 

  return (
    <div>
      <TopNavBar />
      <Notnav />
      <nav className="navbar navbar-expand-lg navbar-dark mt-0 p-2 sticky-top" onMouseLeave={() => {
          setActiveDropdown(null);
          setActiveSubDropdown(null);
          setActiveSubsubDropdown(null);
          setProgramDropDown(false)
        }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                    <Link className="nav-link ms-4" aria-current="page" to="/" onMouseEnter={()=>{
                      setActiveDropdown(false)
                      setProgramDropDown(false)
                      }}>Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white ms-4 dropdown-toggle-no-arrow"
                  role="button"
                  onMouseEnter={() =>{ toggleDropdown('about');
                    setProgramDropDown(false)
                  }
                  }
                  to="/" // Link to the page
                >
                  About us {activeDropdown === 'about' ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}

                </Link>
                {activeDropdown === 'about' && (
                  <ul className="dropdown-menu no-arrow mt-2" style={{ columns: '1' }}>
                    <li><Link className="dropdown-item mt-2" to="/about">History</Link></li><hr className="hr1nav" />
                    <li ><Link className="dropdown-item mt-2" to="/vision">Vision and Mission</Link></li><hr className="hr1nav" />
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item mt-2" to="#" onMouseEnter={() => toggleSubDropdown('leadership')}>
                        Leadership
                        <i className="fas fa-angle-right float-end"></i>
                      </Link><hr className="hr1nav" />
                      {activeSubDropdown === 'leadership' && (
                        <ul className="dropdown-menu" style={{ columns: '1' }}>
                          <li><Link className="dropdown-item" to="/msg">President</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/visemsg">Vice Chancellor</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/pro-vice-chancellor">Pro Vice Chancellor</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/registarmsg">Registrar</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/controller-exams">Controller of Examinations</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/officers">Officers of the University</Link></li>
                        </ul>
                      )}
                    </li>
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item mt-2" to="#" onMouseEnter={() => toggleSubDropdown('governingBodies')}>
                        Governing Bodies
                        <i className="fas fa-angle-right float-end"></i>
                      </Link><hr className="hr1nav" />
                      {activeSubDropdown === 'governingBodies' && (
                        <ul className="dropdown-menu" style={{ columns: '1' }}>
                          <li><Link className="dropdown-item" to="/board-governors">Board of Governors</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/board-management">Board of Management</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/academic-council">Academic Council</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/finance-committee">Finance Committee</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/board-examination">Board of Examination</Link></li>
                        </ul>
                      )}
                    </li>
                    <li><a className="dropdown-item mt-2" href="/UGCApproval.pdf" target="_blank" rel="noopener noreferrer">Approvals</a></li><hr className="hr1nav" />
                    <li><a className="dropdown-item mt-2" href="/Gazette.pdf" target="_blank" rel="noopener noreferrer">Gazzette Notification</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" onMouseEnter={()=>{
                  setProgramDropDown(true)
                  setActiveDropdown(null)
                }
                } >Programmes</Link>
               {programDropDown &&  <div className="programDropDown" >
                      <div className="row">
                        <div className="col-md-3">
                          <div className="underGraduate">
                          <h5>UNDERGRADUATE</h5>
                          </div>
                          <div className="underGraduateDetails">
                            <span style={{fontSize:"14px"}}>School of Science And Technology</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/bsc" onClick={()=>setProgramDropDown(false)}>B.Sc</Link>
                            <Link to="/bca" onClick={()=>setProgramDropDown(false)}>BCA</Link>
                            </div>
                            <span style={{fontSize:"13px"}}>School Of Commerce And Management Studies</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/bcom" onClick={()=>setProgramDropDown(false)}>B.Com</Link>
                            <Link to="/bba" onClick={()=>setProgramDropDown(false)}>BBA</Link>
                            </div>
                            <span style={{fontSize:"14px"}}>School of Agriculture</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/bscagr" onClick={()=>setProgramDropDown(false)}>B.Sc (Agriculture)</Link>
                            </div>
                            <span style={{fontSize:"14px"}}>School of Arts and Humanities</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/baarts" onClick={()=>setProgramDropDown(false)}>BA (Hindi/Sanskrit/English/Sociology/Education/Political Science/History/Economics)</Link>
                            </div>
                            <span style={{fontSize:"14px"}}>School of Yogic Science and Naturopathy</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/yogicbnys" onClick={()=>setProgramDropDown(false)}>BNYS</Link>
                            <Link to="/yogicbsc" onClick={()=>setProgramDropDown(false)}>BSC</Link>
                            </div>
                            <span style={{fontSize:"13px"}}>School of Nursing Paramedical & Allied Science</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/" onClick={()=>setProgramDropDown(false)}>B.Pharma</Link>
                            <Link to="/nursingbsc" onClick={()=>setProgramDropDown(false)}>B.Sc Nursing</Link>
                            <Link to="/nursingbpt" onClick={()=>setProgramDropDown(false)}>BPT</Link>
                            </div>
                            <span style={{fontSize:"14px"}}>School of Legal Studies</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/legalballb" onClick={()=>setProgramDropDown(false)}>BA LLB</Link>
                            <Link to="/legalllb" onClick={()=>setProgramDropDown(false)}>LLB</Link>
                            </div>
                            <span style={{fontSize:"14px"}}>School of Hotel Management & Tourism</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/hotelbhm" onClick={()=>setProgramDropDown(false)}>Bachelor of Hotel Management</Link>
                            <Link to="/hotelbba" onClick={()=>setProgramDropDown(false)}>BBA - Tourism</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="postGraduate">
                            <h5>POSTGRADUATE</h5>
                          </div>
                           <div className="postGraduateDetails">
                            <span style={{fontSize:"14px"}}>School of Science And Technology</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/msc" onClick={()=>setProgramDropDown(false)}>M.Sc</Link>
                            <Link to="/mca" onClick={()=>setProgramDropDown(false)}>MCA</Link>
                            </div>
                            <span style={{fontSize:"13px"}}>School Of Commerce And Management Studies</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/mcom" onClick={()=>setProgramDropDown(false)}>M.Com</Link>
                            <Link to="/mba" onClick={()=>setProgramDropDown(false)}>MBA</Link>
                            <Link to="/phd-commerce" onClick={()=>setProgramDropDown(false)}>Ph.D</Link>
                            </div>
                            <span style={{fontSize:"14px"}}>School of Agriculture</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/mscagr" onClick={()=>setProgramDropDown(false)}>M.Sc in Agriculture</Link>
                            <Link to="/mschor" onClick={()=>setProgramDropDown(false)}>M.Sc in Horticulture</Link>
                            </div>
                            <span style={{fontSize:"14px"}}>School of Arts and Humanities</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/maarts" onClick={()=>setProgramDropDown(false)}>M.A</Link>
                            </div>
                            <span style={{fontSize:"14px"}}>School of Yogic Science and Naturopathy</span>
                            <div className="degree" style={{display:"grid"}}>
                            <Link to="/yogicma" onClick={()=>setProgramDropDown(false)}>M.A</Link>
                            <Link to="/yogicmsc" onClick={()=>setProgramDropDown(false)} >M.Sc</Link>
                            </div>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="diploma">
                            <h5>DIPLOMA</h5>
                           </div>
                           <div className="diplomaDetails">
                            <span style={{fontSize:"14px"}}>School of Engineering</span>
                            <div className="degree" style={{display:"grid"}} >
                            <Link to="/engineer" onClick={()=>setProgramDropDown(false)}>Diploma in CE</Link>
                            <Link to="/mechanic" onClick={()=>setProgramDropDown(false)}>Diploma in CE</Link>
                            <Link to="/cse" onClick={()=>setProgramDropDown(false)}>Diploma in CE</Link>
                           </div>
                            <span style={{fontSize:"14px"}}>School of Science And Technology</span>
                            <div className="degree" style={{display:"grid"}} >
                            <Link to="/data" onClick={()=>setProgramDropDown(false)}>AI and ML / Data Science & Cloud Technology / Cyber Security / Forensic Science</Link>
                           </div>
                            <span style={{fontSize:"14px"}}>School of Agriculture</span>
                            <div className="degree" style={{display:"grid"}} >
                            <Link to="/diploma" onClick={()=>setProgramDropDown(false)}>Diploma in Agriculture</Link>
                           </div>
                            <span style={{fontSize:"13px"}}>School of Nursing Paramedical & Allied Science</span>
                            <div className="degree" style={{display:"grid"}} >
                            <Link to="/nursinganm" onClick={()=>setProgramDropDown(false)}>ANM</Link>
                            <Link to="/nursinggnm" onClick={()=>setProgramDropDown(false)}>GNM</Link>
                            <Link to="/nursingdpharma" onClick={()=>setProgramDropDown(false)}>D.Pharma</Link>
                           </div>
                            <span style={{fontSize:"14px"}}>School of Hotel Management & Tourism</span>
                            <div className="degree" style={{display:"grid"}} >
                            <Link to="/hoteldiploma" onClick={()=>setProgramDropDown(false)}>Diploma - Hotel Management</Link>
                           </div>
                           </div>
                        </div>
                        <div className="col-md-3">
                          <div className="doctorRate">
                            <h5>DOCTORATE</h5>
                          </div>
                           <div className="doctorRateDetails">
                            <span style={{fontSize:"13px"}}>School Of Commerce And Management Studies</span>
                            <div className="degree" style={{display:"grid"}} >
                            <Link to="/phd" onClick={()=>setProgramDropDown(false)}>Ph.D</Link>
                            </div>
                            <span style={{fontSize:"13px"}}>School of Arts and Humanities</span>
                            <div className="degree" style={{display:"grid"}} >
                            <Link to="/phdarts" onClick={()=>setProgramDropDown(false)}>Ph.D</Link>
                            </div>
                           </div>
                        </div>
                      </div>
                </div>}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white ms-4 dropdown-toggle-no-arrow"
                  role="button"
                  onMouseEnter={() => {
                    toggleDropdown('academics')
                    setProgramDropDown(false)
                  }}
                  aria-expanded={activeDropdown === 'academics'}
                  to="/"
                >
                  Academics {activeDropdown === 'academics' ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </Link>
                {activeDropdown === 'academics' && (
                  <ul className="dropdown-menu no-arrow mt-2" style={{ columns: '1' }}>
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item mt-2" to="#" onMouseEnter={() => toggleSubDropdown('ourSchools')}>
                        Our Schools
                        <i className="fas fa-angle-right float-end"></i>
                      </Link><hr className="hr1nav" />
                      {activeSubDropdown === 'ourSchools' && (
                        <ul className="dropdown-menu" style={{ columns: '1' }}>
                          <li><Link className="dropdown-item" to="/school1">School of Engineering</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/school2">School of Science and Technology</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/school3">School of Commerce and Management Studies</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/school4">School of Agriculture</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/artsschool">School of Arts and Humanities</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/yogicschool">School of Yoga Science and Naturopathy</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/nursingschool">School of Nursing, Paramedical & Applied Science</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/schoollegal">School of Legal</Link></li><hr className="hr1nav" />
                          <li><Link className="dropdown-item" to="/hotelschool">School of Hotel Management and Tourism</Link></li>
                        </ul>
                      )}
                    </li>
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item mt-2" to="#" onMouseEnter={() => toggleSubDropdown('examination')}>
                        Examination
                        <i className="fas fa-angle-right float-end"></i>
                      </Link><hr className="hr1nav" />
                      {activeSubDropdown === 'examination' && (
                        <ul className="dropdown-menu" style={{ columns: '1' }}>
                          <li><Link className="dropdown-item" to="/notification">Notification</Link></li><hr className="hr1nav" />
                          <li className="dropdown-submenu">
                            <Link className="dropdown-item" to="#" onMouseEnter={() => toggleSubsubDropdown('forms')}>
                              Forms
                              <i className="fas fa-angle-right float-end"></i>
                            </Link><hr className="hr1nav" />
                            {activeSubsubDropdown === 'forms' && (
                              <ul className="dropdown-menu" style={{ columns: '1' }}><hr className="hr1nav" />
                                <li><Link className="dropdown-item" to="/enrollment-form">Enrollment Form</Link></li><hr className="hr1nav" />
                                <li><Link className="dropdown-item" to="/examination-form">Examination Form</Link></li><hr className="hr1nav" />
                                <li><Link className="dropdown-item" to="/admit-card-verification">Admit Card & Verification Form</Link></li><hr className="hr1nav" />
                                <li><Link className="dropdown-item" to="/migration-provisional">Application for Migration / Provisional</Link></li><hr className="hr1nav" />
                                <li><Link className="dropdown-item" to="/character-degree-certificate">Character / Degree - Certificate</Link></li><hr className="hr1nav" />
                                <li><Link className="dropdown-item" to="/scrutiny-form">Scrutiny Form</Link></li>
                              </ul>
                            )}
                          </li>
                          <li><Link className="dropdown-item" to="/results">Results</Link></li>
                        </ul>
                      )}
                    </li>
                    <li><Link className="dropdown-item mt-2" to="/student-feedback">Student Feedback</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/woman-cell">Woman Cell</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/anti-ragging-cell">Anti-Ragging Cell</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/anti-drug-cell">Anti-Drug Cell</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/grievance-redressal">Grievance Redressal Cell</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/disciplinary-committee">Disciplinary Committee</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/right-to-information">Right to Information</Link></li><hr className="hr1nav" />
                    <li><a className="dropdown-item mt-2" href="/calendar.pdf" target="_blank" rel="noopener noreferrer">Academic Calendar</a></li><hr className="hr1nav" />
                    <li><a className="dropdown-item mt-2" href="/holidays.pdf" target="_blank" rel="noopener noreferrer">List of Holidays</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white ms-4 dropdown-toggle-no-arrow"
                  role="button"
                  onMouseEnter={() => {
                    toggleDropdown('admission')
                    setProgramDropDown(false)
                  }
                }
                  aria-expanded={activeDropdown === 'admission'}
                  to="/"
                >
                  Admission {activeDropdown === 'admission' ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </Link>
                {activeDropdown === 'admission' && (
                  <ul className="dropdown-menu no-arrow mt-2" style={{ columns: '1' }}>
                    <li><Link className="dropdown-item mt-2" to="/fee-structure">Fee Structure</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/Enquiryform">Enquiry Form</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/online-registration">Online Registration Form</Link></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/placement" onMouseEnter={()=>setActiveDropdown(null)}>Placements</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/gallery1" onMouseEnter={()=>setActiveDropdown(null)}>Gallery</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white ms-4 dropdown-toggle-no-arrow"
                  role="button"
                  onMouseEnter={() =>{
                     toggleDropdown('events')
                     setProgramDropDown(false)
                    }
                }
                  aria-expanded={activeDropdown === 'events'}
                  to="/"
                >
                  Events {activeDropdown === 'events' ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </Link>
                {activeDropdown === 'events' && (
                  <ul className="dropdown-menu no-arrow mt-2" style={{ columns: '1' }}>
                    <li><Link className="dropdown-item mt-2" to="/news-events">News / Events</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/blogs">Blogs</Link></li>
                  </ul>
                )}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white ms-4 dropdown-toggle-no-arrow"
                  role="button"
                  onMouseEnter={() => {
                    toggleDropdown('career')
                    setProgramDropDown(false)
                  }}
                  aria-expanded={activeDropdown === 'career'}
                  to="/lifemanjira" // Link to the Career page
                >
                  Career {activeDropdown === 'career' ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </Link>
                {activeDropdown === 'career' && (
                  <ul className="dropdown-menu no-arrow mt-2" style={{ columns: '1' }}>
                    <li><Link className="dropdown-item mt-2" to="/application-form">Application Form</Link></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/contact" onMouseEnter={()=>setActiveDropdown(null)}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;