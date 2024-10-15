import React from 'react';
import './Phdnotification.css'; 

const  Bednotification = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/bedpdf.pdf';
  

  return (
    <div>
      <div className="pdf-container">
        <embed src={pdfUrl} type="application/pdf" width="100%" height="800px" />
      </div>
    </div>
  );
};

export default Bednotification;
