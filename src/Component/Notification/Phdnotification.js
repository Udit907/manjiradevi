import React from 'react';
import './Phdnotification.css'; 

const Phdnotification = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/phd.pdf';
  

  return (
    <div>
      <div className="pdf-container">
        <embed src={pdfUrl} type="application/pdf" width="100%" height="800px" />
      </div>
    </div>
  );
};

export default Phdnotification;
