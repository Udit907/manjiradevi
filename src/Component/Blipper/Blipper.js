import React from 'react';
import './Blipper.css';

const Blipper = ({ text }) => {
  return (
    <div className="blipper-container">
      <div className="blipper">{text}</div>
    </div>
  );
};

export default Blipper; /*How can you use that first import Blipper from './Blipper/Blipper' and Then use <Blipper text="Text"/> */ 