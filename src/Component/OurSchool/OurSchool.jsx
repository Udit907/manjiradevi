import React from 'react';
import Slider from 'react-slick';
import './OurSchool.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#0D1128', borderRadius: '50%', width: '40px', height: '40px' }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#0D1128', borderRadius: '50%', width: '40px', height: '40px' }}
      onClick={onClick}
    />
  );
};

const OurSchool = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      title: 'School of Engineering ',
      image: 'ourschool4.png',
      link: '#',
    },
    {
      title: 'School of Science And Technology',
      image: 'ourschool2.png',
      link: '#',
    },
    {
      title: 'School of Commerce And Management Studies',
      image: 'ourschool5.png',
      link: '#',
    },
    {
      title: 'School of Agriculture',
      image: 'agri.jpeg',
      link: '#',
    },
    {
      title: 'School of Arts And Humanities',
      image: 'ourschool3.png',
      link: '#',
    },
    {
      title: 'School of Yogic Science And Naturopathy',
      image: 'yogic.jpeg',
      link: '#',
    },
    {
      title: 'School of Nursing, Paramedical & Allied Science',
      image: 'ouschoolimage1.png',
      link: '#',
    },
    {
      title: 'School of Legal Studies',
      image: 'ourschool3.png',
      link: '#',
    },
    {
      title: 'School of Hotel Management And Tourism',
      image: 'dhm.jpg',
      link: '#',
    },
  ];

  return (
    <div>
    <div className="our-schools-slider ">
      <h2 className="slider-title">Our Schools</h2>
      <p className="slider-subtitle">THE RIGHT CHOICE IS RIGHT IN FRONT OF YOU</p>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              {/* <Link to="/school" className="slide-button">Know more</Link> */}
              <Link class="btn bgd" to="/school">Know more</Link>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
   
    </div>
  );
};

export default OurSchool;
