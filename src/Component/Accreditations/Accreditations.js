import React from 'react';
import './Accreditations.css';
const Accreditations = () => {
  return <div>
   <div className='container-fluid mt-5 mb-5'>
    <div className='container'>
    <center><h1>Accreditations & <span className="bg3">Recognitions</span></h1></center>
        <div className='row mt-3'>
           
            <div className='col-md-3 mt-2 '>
            <div className="card accer-col  p-3   ">
           <center> <img src="uk.png" className='ukimg1  ' /></center>
            </div>
            </div>
           
           
            <div className='col-md-3 mt-2 '>
            <div className="card accer-col    ">
           <center> <img src="uk2.png" className='ukimg mb-0 mt-2 ' />
           <hr className='mr-3 ml-3 g-0 mb-0 hr'></hr>
            <h4 className='g-0 u'>PCI</h4>
           </center>
            </div>
            </div>
            <div className='col-md-3 mt-2 '>
            <div className="card accer-col    ">
           <center> <img src="uk4.jpg" className='ukimg mb-0 mt-2 ' />
           <hr className='mr-3 ml-3 g-0 mb-0 hr'></hr>
            <h4 className='g-0 u'>INC</h4>
           </center>
            </div>
            </div>
            <div className='col-md-3 mt-2 '>
            <div className="card accer-col    ">
           <center> <img src="uk5.jpeg" className='ukimg mb-0 mt-2 ' />
           <hr className='mr-3 ml-3 g-0 mb-0 hr'></hr>
            <h4 className='g-0 u'>UBTER</h4>
           </center>
            </div>
            </div>

        </div>

    </div>

   </div>
        </div>;
};

export default Accreditations;