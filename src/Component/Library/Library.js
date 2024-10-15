import React from 'react';
import './Library.css';

const Library = () => {
  return (
    <div className='container-fluid mt-5 library p-5'>
      <div className='container-fluid p-2  '>
        <h1 className='text-white library-heading mb-3'>
          Department <span className='library-span'>Laboratories</span>
        </h1>
        <div className='row'>
          <div className='col-md-3  mt-3'>
            <img src="library.jpg" alt="" className="libray1-image" />
          </div>
          <div className='col-md-3  mt-3'>
            <h4 className='text-white library-text text-bold'>
              Science & Mathematics Resource Centre
            </h4>
            <p className='text-white library-text1'>
              Welcome to the Science & Mathematics Resource Centre! Unlock the mysteries of science and master math with our comprehensive resources, innovative tools, and expert guidance.
            </p>
          </div>
          <div className='col-md-3  mt-3'>
            <img src="library2.jpg" alt="" className="libray1-image" />
          </div>
          <div className='col-md-3  mt-3'>
            <h4 className='text-white library-text text-bold'>
              I.C.T. Resource Center
            </h4>
            <p className='text-white library-text1'>
              Welcome to the I.C.T. Resource Center! Empowering you with cutting-edge technology resources, expert guidance, and innovative tools for mastering information and communication technology.
            </p>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-3 p-2'>
        <div className='row'>
          <div className='col-md-3  mt-3'>
            <img src="library3.jpg" alt="" className="libray1-image" />
          </div>
          <div className='col-md-3 mt-3'>
            <h4 className='text-white library-text text-bold'>
              Art & Craft Resource Centre
            </h4>
            <p className='text-white library-text1'>
              Welcome to the Art & Craft Resource Centre! Unleash your creativity with our diverse materials, expert tutorials, and innovative project ideas.
            </p>
          </div>
          <div className='col-md-3  mt-3'>
            <img src="library4.jpg" alt="" className="libray1-image" />
          </div>
          <div className='col-md-3 mt-3'>
            <h4 className='text-white library-text text-bold'>
              Psychology Resource Centre
            </h4>
            <p className='text-white library-text1'>
              Welcome to the Psychology Resource Centre! Enhance your understanding of the mind with our comprehensive resources, expert insights, and practical tools for mental well-being.
            </p>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-3 p-2'>
        <div className='row'>
          <div className='col-md-3  mt-3'>
            <img src="library5.jpg" alt="" className="libray1-image" />
          </div>
          <div className='col-md-3  mt-3'>
            <h4 className='text-white library-text text-bold'>
              Infrastructure
            </h4>
            <p className='text-white library-text1'>
              Welcome to SMT Manjira Devi University! Explore our state-of-the-art infrastructure, including cutting-edge laboratories, modern classrooms, and extensive research facilities designed to foster academic excellence.
            </p>
          </div>
          <div className='col-md-3  mt-3'>
            <img src="library6.jpg" alt="" className="libray1-image" />
          </div>
          <div className='col-md-3  mt-3'>
            <h4 className='text-white library-text text-bold'>
              Library
            </h4>
            <p className='text-white library-text1'>
              Welcome to the SMT Manjira Devi University Library! Discover a vast collection of resources, quiet study areas, and expert support to enrich your academic journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
