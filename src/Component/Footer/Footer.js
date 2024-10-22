import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import { Link } from 'react-router-dom';


const Footer = () => {
    const handleDownload = (fileName) => {
        const link = document.createElement('a');
        link.to = fileName;
        link.download = fileName.split('./').pop(); // Get the file name from the URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <footer className="footer mt-1">
            <div className="footer-content">
                <div className="get-in-touch">
                    <h2>GET IN TOUCH</h2>
                    <br/>
                    <p>Campus:</p>
                    <p>Smt. Manjira Devi University</p>
                    <p>Uttarkashi (श्रीमती मंजीरा देवी विश्वविद्यालय, उत्तरकाशी) Rukmani Nagar</p>
                    <p>Hitanu Dhanari, Dunda</p>
                    <p>Uttarkashi, Hitaru, Uttarakhand 249151</p>
                    <br/>
                    <p>Admissions & Outreach:</p>
                    <p>91-80063-45557 , 91-80063-45558</p>
                    <br/>
                    <p>Email:</p>
                    <p>smtmanjiradeviuniversity2024@gmail.com</p>
                    <br/>
                    <div className="social-media-icons">
                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                        <Link to="#"><i className="fab fa-youtube"></i></Link>
                    </div>
                    <br/>
                    <div className="footer-logo">
                        <img src="logo.png" height="100px" width="120px" alt="Manjira Devi University" />
                        <span>Manjira Devi University</span>
                    </div>
                </div>
                
                <div className="explore">
                    <h2>EXPLORE</h2>
                    <br/>
                    <Link to="/about">About Us</Link>
                    <Link to="#">Placements</Link>
                    <Link to="#">Alumni</Link>
                    <Link to="#">Research</Link>
                    <Link to="#">Leadership</Link>
                    <Link to="#">Campus Life</Link>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Terms and Conditions</Link>
                    <Link to="#">Refund and Cancellation Policy</Link>
                    <Link to="#">Student Code of Conduct</Link>
                    <Link to="#">Code of Conduct for Teachers</Link>
                    <Link to="#">Shodhganga</Link>
                    <Link to="#">e-Samdhaan</Link>
                </div>

                <div className="quick-links">
                    <h2>QUICK LINKS</h2>
                    <br/>
                    <Link to="/vision">Vision & Mission</Link>
                    <Link onClick={() => handleDownload('/public/Brochure.pdf')} style={{ cursor: 'pointer' }}>Download Brochure</Link>
                    <Link to="#">Annual Report</Link>
                    <Link to="#">About Uttarkashi</Link>
                    <Link to="#">News & Events</Link>
                    <Link to="#">Career</Link>
                    <Link to="#">Transport</Link>
                    <Link to="#">Call For Paper</Link>
                    <Link to="#">UGC Mandatory Disclosure</Link>
                </div>

                <div className="schools">
                    <h2>SCHOOLS</h2>
                    <br/>
                    <Link to="/school1">School of Engineering</Link>
                    <Link to="/school2">School of Science And Technology</Link>
                    <Link to="/artsschool">School of Arts and Humanities</Link>
                    <Link to="/nursingschool">School of Nursing, Paramedical & Allied Science</Link>
                    <Link to="/school3">School Of Commerce And Management Studies</Link>
                    <Link to="/school4">School of Agriculture</Link>
                    <Link to="/yogicschool">School of Yogic Science and Naturopathy</Link>
                    <Link to="/schoollegal">School of Legal Studies</Link>
                    <Link to="/hotelschool">School of Hotel Management & Tourism</Link>
                </div>

                <div className="admissions">
                    <h2>ADMISSIONS</h2>
                    <br/>
                    <Link to="#">Apply Now</Link>
                    <Link to="#">Scholarships</Link>
                    <Link onClick={() => handleDownload('/public/Prospectus.pdf')} style={{ cursor: 'pointer' }}>E-Brochure/Prospectus</Link>
                    <Link to="#">Admissions Office Contacts</Link>
                    <Link to="#">FAQ</Link>
                    <br/>
                    <h2>LOGIN</h2>
                    <br/>
                    <Link to="#">Student Corner</Link>
                    <Link to="#">Employee ERP Login</Link>
                    <Link to="#">Student ERP Login</Link>
                    <Link to="#">Faculty Exam Login</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copy">
                    <p>&copy; 2024 by Manjira Devi University, All Rights Reserved.</p>
                    <p>Developed by <Link to="https://codefusionlabs.in/" style={{display: "initial"}}>Code Fusion Labs</Link>, Manjira Devi University.</p>
                </div>
                <div className="footer-admissions">
                    <Link to="#">Admissions Open 2024</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
