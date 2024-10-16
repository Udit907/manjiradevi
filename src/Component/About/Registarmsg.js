import React from 'react';
import './about.css';

const Registarmsg = () => {
  return (
    <div>

      <div className='container-fluid whycolor p-5'>
        <div className='container'>
          <div className='row'>
            <h2 className='about-history text-center'>Registrar's <span className='about-span'>Message</span></h2>
            {/* Make the image smaller */}
            <div className="col-md-12 d-flex gap-4">
            <div style={{ textAlign: 'center'}}>
            <img src="/rgstr.png" alt="Registrar" className="registrar-photo" style={{ width: '400px', marginTop: '18px', borderRadius:'8px'}} />
            </div>
            <div className="presidentP">
            <p className='history1 mt-3'>
              Welcome to Smt. Manjira Devi University, nestled in the serene and majestic Himalayan region of Uttarakshi, Uttarakhand!
            </p>
            <p className='history1 mt-2'>
              As the Registrar of this esteemed institution, it is my privilege to welcome you to our vibrant academic community. At Smt. Manjira Devi University, we are dedicated to providing an exceptional educational experience that combines academic excellence with the unique cultural and environmental richness of the Himalayas.
            </p>
            <p className='history1 mt-2'>
              Our university stands as a testament to the transformative power of education in the heart of the Himalayas. The majestic surroundings of Uttarakhand provide a unique backdrop for learning, research, and personal growth. As we embrace our new status, we reaffirm our dedication to providing a holistic educational experience that prepares our students to navigate the complexities of the modern world while honoring the rich cultural heritage and ecological significance of our region.
            </p>
          
            </div>
            </div>
            <p className='history1 mt-2'>
              Our university's location in the heart of the Himalayas offers an unparalleled setting for learning and personal growth. The breathtaking landscapes and tranquil environment provide an inspiring backdrop for our students, faculty, and staff. Here, you will find a harmonious blend of tradition and modernity, where ancient wisdom meets contemporary knowledge.
            </p>
            <p className='history1 mt-2'>
              We are committed to nurturing a community of learners who are equipped to address the challenges and opportunities of the 21st century. Our comprehensive range of programs spans various disciplines, each designed to foster critical thinking, creativity, and ethical leadership. Our curriculum is informed by the latest research and industry trends, ensuring that our graduates are well-prepared to excel in their chosen fields.
            </p>
            <p className='history1 mt-2'>
              Our dedicated faculty members are not only experts in their disciplines but also passionate educators and mentors. They bring a wealth of knowledge, experience, and a commitment to student success. Through their guidance, our students engage in rigorous academic pursuits and innovative research projects that address both local and global challenges.
            </p>
            <p className='history1 mt-2'>
              At Smt. Manjira Devi University, we place a strong emphasis on sustainability and environmental stewardship. Given our location in the Himalayas, we are acutely aware of the importance of preserving our natural resources and promoting sustainable development. Our academic programs, research initiatives, and community outreach activities are all geared towards fostering a deeper understanding of environmental issues and sustainable practices.
            </p>
            <p className='history1 mt-2'>
              We also pride ourselves on our inclusive and diverse community. Our students come from various cultural and geographical backgrounds, creating a rich tapestry of perspectives that enrich our academic environment. This diversity is a source of strength and innovation, promoting a culture of mutual respect and collaboration.
            </p>
            <p className='history1 mt-2'>
              Our university is deeply committed to community engagement and social responsibility. We encourage our students to participate in community service and outreach programs that make a positive impact on the local community and beyond. These initiatives help develop a sense of social responsibility and a commitment to contributing to the greater good.
            </p>
            <p className='history1 mt-2'>
              As we continue to grow and evolve, we remain dedicated to our mission of providing a transformative educational experience. We strive to enhance our programs, expand our research capabilities, and strengthen our partnerships with industry and other educational institutions.
            </p>
            <p className='history1 mt-2'>
              Thank you for being a part of Smt. Manjira Devi University. Together, let us embark on a journey of academic excellence, innovation, and meaningful contributions to society.
            </p>
            <p className='history1 mt-2'> 
              Warm regards
            </p>
            <p className='history1 mt-2'> 
              Dr. Vadrevu Bhaskar<br />
              Email: registrar@smdu.edu.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registarmsg;
