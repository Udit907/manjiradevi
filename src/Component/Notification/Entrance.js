import React from 'react';
import './Phdnotification.css'; 

const Entrance = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/entrance.pdf';
  

  return (
    <div>
      <div className="pdf-container">
        <embed src={pdfUrl} type="application/pdf" width="100%" height="800px" />
      </div>
    </div>
  );
};

export default Entrance;
