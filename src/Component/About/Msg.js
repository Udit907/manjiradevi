import React from 'react';
import './about.css';
import { Link } from "react-router-dom";
import Library from '../Library/Library';

const Msg = () => {
  return (
     <div>

      <div className='container-fluid whycolor p-5'>
        <div className='container'>
          <div className='row'>
            <h2 className='about-history' style={{ textAlign: 'center' }}>
              President's <span className='about-span'>Message</span>
            </h2>
            <div className="president col-md-12 d-flex  gap-4">
            <div style={{ textAlign: 'center', margin: '20px 0' }} >
              <img src="/psdt.jpg" alt="President" className="registrar-photo" style={{ width: '450px' , borderRadius:"8px" }} /> {/* Adjust width here */}
            </div>
            <div className="presidentP">
            <p className='history1 mt-3'>
              It is with immense pride and joy that I extend my warmest greetings to each of you as we embark on a momentous chapter in the history of our institution. From our humble beginnings as a group of institutions, we have now reached a significant milestone—the establishment of Smt. Manjira Devi University, nestled in the picturesque Himalayan region of Uttarakshi, Uttarakhand.
            </p>
            <p className='history1 mt-2'>
              For over 20 years, our journey has been guided by a steadfast commitment to excellence in education, innovation, and community service. Today, as we transition to university status, we celebrate not only our growth but also the enduring values that have shaped us into the institution we are today.
            </p>
            </div>
            </div>
            <div className='row mt-3'>
              <p className='history1 mt-2'>
                Our university stands as a testament to the transformative power of education in the heart of the Himalayas. The majestic surroundings of Uttarakhand provide a unique backdrop for learning, research, and personal growth. As we embrace our new status, we reaffirm our dedication to providing a holistic educational experience that prepares our students to navigate the complexities of the modern world while honoring the rich cultural heritage and ecological significance of our region.
              </p>
              <p className='history1 mt-2'>
                At Smt. Manjira Devi University, we are committed to fostering academic excellence and innovation. Our diverse range of programs, informed by cutting-edge research and industry partnerships, equips our students with the knowledge and skills needed to succeed in their chosen fields. Our faculty members, renowned for their expertise and dedication, nurture a spirit of inquiry and critical thinking that inspires our students to push the boundaries of knowledge.
              </p>
              <p className='history1 mt-2'>
                As we look to the future, sustainability remains at the forefront of our mission. We recognize the importance of environmental stewardship in the Himalayan region and are committed to promoting sustainable practices in all aspects of university life. Through our research initiatives and community engagement efforts, we strive to address local and global challenges while preserving the natural beauty and biodiversity of Uttarakhand.
              </p>
              <p className='history1 mt-2'>
                I am deeply grateful to our faculty, staff, students, alumni, and partners who have contributed to our success over the years. Your dedication and passion have been instrumental in shaping the identity and legacy of our university. Together, we will continue to uphold our values of integrity, inclusivity, and social responsibility as we chart a course toward a future filled with promise and possibility.
              </p>
              <p className='history1 mt-2'>
                Thank you for being part of the Smt. Manjira Devi University community. Let us embrace this new chapter with optimism and determination, united in our commitment to excellence and service.
              </p>
              <p className='history1 mt-2'> 
                Warm regards
              </p>
              <p className='history1 mt-2'> 
                Dr. H. S. Nautiyal
              </p>
              <p className='history1 mt-2'> 
                Email: president@smdu.edu.in 
              </p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Msg;
