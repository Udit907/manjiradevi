import React from 'react';
import './about.css';
import { Link } from "react-router-dom";
import Library from '../Library/Library';

const Visemsg = () => {
  return (
    <div>

      <div className='container-fluid whycolor p-5'>
        <div className='container'>
          <div className='row'>
            <h2 className='about-history' style={{ textAlign: 'center' }}>
              Vice Chancellor's <span className='about-span'>Message</span>
            </h2>
            <div className="vices col-md-12 d-flex gap-4">
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <img src="/vc.jpg" alt="Vice Chancellor" className="registrar-photo" style={{ width: '350px', borderRadius:"8px" }} />
            </div>
            <div className="presidentP">
            <p className='history1 mt-3'>
              Dear Students, Faculty, Staff, and Esteemed Members of the Smt. Manjira Devi University Community,
            </p>
            <p className='history1 mt-2'>
              It is with great pleasure and pride that I extend my warmest greetings to all of you. As we embark on a new phase of our journey at Smt. Manjira Devi University, nestled in the serene Himalayan region of Uttarakshi, Uttarakhand, we reaffirm our commitment to excellence in education and community service.
            </p>
            <p className='history1 mt-2'>
              Our university holds a profound responsibility to our local community and the broader Himalayan region. With a legacy of promoting education that respects and integrates the rich cultural heritage and environmental significance of our surroundings, we are dedicated to nurturing future leaders and professionals who will contribute meaningfully to society.
            </p>
            </div>
            </div>
            
            <p className='history1 mt-2'>
              At Smt. Manjira Devi University, we offer a diverse array of programs designed to provide excellence in education across various disciplines. From Science and Technology to Commerce and Management, from Yoga to Environmental Studies, and from Legal Studies to Naturopathy and Health Sciences, our curriculum is crafted to equip our students with not only theoretical knowledge but also practical skills that are relevant to the evolving global landscape.
            </p>
            <p className='history1 mt-2'>
              Our commitment to promoting education in the Himalayan region extends beyond academic excellence. We emphasize holistic development, nurturing well-rounded individuals who are not only proficient in their fields but also ethical, compassionate, and socially responsible. Our faculty, known for their expertise and dedication, are committed to fostering a learning environment that encourages critical thinking, innovation, and a deep appreciation for our natural environment.
            </p>
            <p className='history1 mt-2'>
              As we look forward to the future, we remain steadfast in our mission to advance knowledge, promote sustainable practices, and contribute positively to our community and society at large. Through research, community engagement, and partnerships with local stakeholders, we aim to address the unique challenges and opportunities presented by our Himalayan context.
            </p>
            <p className='history1 mt-2'>
              I extend my heartfelt gratitude to our faculty, staff, students, alumni, and supporters who have contributed to our journey thus far. Your dedication and enthusiasm are the driving forces behind our success and accomplishments.
            </p>
            <p className='history1 mt-2'>
              Together, let us continue to uphold the values of integrity, inclusivity, and excellence that define Smt. Manjira Devi University. As we embark on this journey together, I am confident that we will inspire positive change and make a lasting impact in our region and beyond.
            </p>
            <p className='history1 mt-2'>
              Thank you for choosing Smt. Manjira Devi University as your academic home. Here's to a future filled with learning, discovery, and achievement.
            </p>
            <p className='history1 mt-2'> 
              Warm regards
            </p>
            <p className='history1 mt-2'> 
              Prof. (Dr.) Bhagwan Nautiyal
            </p>
            <p className='history1 mt-2'> 
              Email: vc@smdu.edu.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visemsg;
