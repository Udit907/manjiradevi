import React from 'react';
import './map.css';

const Map = () => {
  return (
    <div>
      <div className='map mt-5 g-0'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13726.914131784151!2d78.35326985961379!3d30.691141621807834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908eb6f8e63bbb3%3A0x463647d96d91681c!2sSMT%20MANJIRA%20DEVI%20GROUP%20OF%20INSTITUTIONS%20AND%20AYURVEDIC%20MEDICAL%20COLLEGE!5e0!3m2!1sen!2sin!4v1725332912260!5m2!1sen!2sin"
                    allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
