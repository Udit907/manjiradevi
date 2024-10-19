import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Footer = () => {
    const handleDownload = (fileName) => {
        const link = document.createElement('a');
        link.href = fileName;
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
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
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
                    <a href="/about">About Us</a>
                    <a href="#">Placements</a>
                    <a href="#">Alumni</a>
                    <a href="#">Research</a>
                    <a href="#">Leadership</a>
                    <a href="#">Campus Life</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Refund and Cancellation Policy</a>
                    <a href="#">Student Code of Conduct</a>
                    <a href="#">Code of Conduct for Teachers</a>
                    <a href="#">Shodhganga</a>
                    <a href="#">e-Samdhaan</a>
                </div>

                <div className="quick-links">
                    <h2>QUICK LINKS</h2>
                    <br/>
                    <a href="/vision">Vision & Mission</a>
                    <a onClick={() => handleDownload('/public/Brochure.pdf')} style={{ cursor: 'pointer' }}>Download Brochure</a>
                    <a href="#">Annual Report</a>
                    <a href="#">About Uttarkashi</a>
                    <a href="#">News & Events</a>
                    <a href="#">Career</a>
                    <a href="#">Transport</a>
                    <a href="#">Call For Paper</a>
                    <a href="#">UGC Mandatory Disclosure</a>
                </div>

                <div className="schools">
                    <h2>SCHOOLS</h2>
                    <br/>
                    <a href="/school1">School of Engineering</a>
                    <a href="/school2">School of Science And Technology</a>
                    <a href="/artsschool">School of Arts and Humanities</a>
                    <a href="/nursingschool">School of Nursing, Paramedical & Allied Science</a>
                    <a href="/school3">School Of Commerce And Management Studies</a>
                    <a href="/school4">School of Agriculture</a>
                    <a href="/yogicschool">School of Yogic Science and Naturopathy</a>
                    <a href="/schoollegal">School of Legal Studies</a>
                    <a href="/hotelschool">School of Hotel Management & Tourism</a>
                </div>

                <div className="admissions">
                    <h2>ADMISSIONS</h2>
                    <br/>
                    <a href="#">Apply Now</a>
                    <a href="#">Scholarships</a>
                    <a onClick={() => handleDownload('/public/Prospectus.pdf')} style={{ cursor: 'pointer' }}>E-Brochure/Prospectus</a>
                    <a href="#">Admissions Office Contacts</a>
                    <a href="#">FAQ</a>
                    <br/>
                    <h2>LOGIN</h2>
                    <br/>
                    <a href="#">Student Corner</a>
                    <a href="#">Employee ERP Login</a>
                    <a href="#">Student ERP Login</a>
                    <a href="#">Faculty Exam Login</a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copy">
                    <p>&copy; 2024 by Manjira Devi University, All Rights Reserved.</p>
                    <p>Developed by Upscale Technologies, Manjira Devi University.</p>
                </div>
                <div className="footer-admissions">
                    <a href="#">Admissions Open 2024</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
