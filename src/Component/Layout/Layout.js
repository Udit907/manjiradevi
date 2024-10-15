import React from 'react';
import Slider from 'react-slick';
import './layout.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Layout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      title: 'A Guest Lecture on Inspiring Youth to join manjira devi university college ',
      date: '16-May-2024 | 12:30 PM',
      location: 'Manjira Devi Campus',
      type: 'Guest Lecture',
      image: 'path/to/image1.jpg',
    },
    {
      title: 'Patent Filing Procedure manjira devi university college ',
      date: '16-May-2024 | 11:00 AM',
      location: 'Main Building, Manjira Devi Campus',
      type: 'Workshop',
      image: 'path/to/image2.jpg',
    },
    {
      title: 'WORLD Environment manjira devi university college uttarkashi',
      date: '05-Jun-2024 | 10:00 AM',
      location: 'Manjira  Devi  Campus',
      type: 'Celebration',
      image: 'path/to/image3.jpg',
    },
    // Add more slides as needed
  ];

  const placementSlides = [
    {
      title: 'Placement Highlight 1',
      image: 'image1.jpeg',
    },
    {
      title: 'Placement Highlight 2',
      image: 'img3.jpeg',
    },
    {
      title: 'Placement Highlight 2',
      image: 'img2.jpg',
    },{
      title: 'Placement Highlight 2',
      image: 'img4.jpeg',
    },
    // Add more slides for placement highlights section as needed
  ];

  return (
    <div className="dbuu-layout">
      <div className="left-column">
        {/* <section className="happening">
          <h1 className="section-title"><span className='happening'>Happening</span> @Manjira Devi</h1>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <div className="slide-content">
                  <h3 className="slide-title">{slide.title}</h3>
                  <p>{slide.date}</p>
                  <p>{slide.location}</p>
                  <p>{slide.type}</p>
                  <Link to="/layout" className="slide-button">Read More</Link>
                </div>
              </div>
            ))}
          </Slider>
        </section> */}
        <section className="placement-highlights">
          <h2 className="section-title"><span className='happening'>Placement</span> Highlights</h2>
          <Slider {...sliderSettings}>
            {placementSlides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.image} alt={slide.title} className="placement-image" />
              </div>
            ))}
          </Slider>
        </section>
      </div>
      <div className="right-column">
        <section className="campus-life">
          <h2 className="section-title text-center"><span className='happening'>Campus Life</span> @Manjira Devi University</h2>
          <div className="campus-life-content">
            <div className="campus-life-item">
              <img src="image1.jpeg" alt="Students on campus" className="campus-image" />
              <h2 className='text mt-2'><span className='happening'>8000+</span> Students on campus</h2>
            </div>
            <div className="campus-life-item">
              <img src="img2.jpg" alt="Student Activity Clubs" className="campus-image" />
              <p className='text mt-2'><span className='happening'>Student</span> Activity Clubs</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
