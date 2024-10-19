import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-3">Get in Touch</h1>
      <div className="d-flex justify-content-center mb-4">
        <a href="tel:+918006345557" className="btn mr-2" style={{ background: "orange", color: "white" }}>
          <i className="fas fa-phone-alt rotate-icon"></i> Call us
        </a>
        <a href="https://wa.me/+918006345557" className="btn mr-2" style={{ background: "orange", color: "white" }}>
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
      <div className="row">
        <div className="col-md-6 contact-info">
          <div>
            <h3>Campus</h3>
            <p>
              Smt. Manjira Devi University, Uttarkashi (श्रीमती मंजीरा देवी विश्वविद्यालय, उत्तरकाशी) Rukmani Nagar, Hitanu Dhanari, Dunda, Uttarkashi, Hitaru, Uttarakhand 249151
            </p>
            <hr />
            <h3>Phone Number</h3>
            <p>+91-80063-45557 , 80063-45558</p>
            <hr />
            <h3>Email</h3>
            <p>
              General: info@smdu.edu.in
              <br />
              Admissions: admissioncell@smdu.edu.in
            </p>
            <hr />
          </div>
        </div>
        <div className="col-md-6 map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1765.8180775280537!2d78.35633659813259!3d30.687554817106555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908ebbd487e609d%3A0x807acc9d2c510d3d!2zU210LiBNYW5qaXJhIERldmkgVW5pdmVyc2l0eSwgVXR0YXJrYXNoaSAo4KS24KWN4KSw4KWA4KSu4KSk4KWAIOCkruCkguCknOClgOCksOCkviDgpKbgpYfgpLXgpYAg4KS14KS_4KS24KWN4KS14KS14KS_4KSm4KWN4KSv4KS-4KSy4KSvLCDgpIngpKTgpY3gpKTgpLDgpJXgpL7gpLbgpYAp!5e0!3m2!1sen!2sin!4v1726731149527!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Manjira Devi Campus Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
