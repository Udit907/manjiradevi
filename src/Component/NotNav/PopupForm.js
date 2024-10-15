// src/PopupForm.js
import React, { useState } from 'react';
import './PopupForm.css';

const PopupForm = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        accountNumber: '',
        pin: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleClose();
    };

    return (
        <div className={`popup ${show ? 'show' : ''}`}>
            <div className="popup-content">
                <span className="close" onClick={handleClose}>&times;</span>
               
               
                <div className="row p-5">
                <center><h3 className='po'>Enquiry Form 2024
                </h3></center>
                    <div className="col-md-12  p-4">
                        <div className="mb-3">
                            <label  className="form-label p1">Enter full name</label>
                            <input 
                                type="text" 
                                className="form-control p2" 
                                placeholder='enter full name'
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label p1">Enter email address</label>
                            <input 
                                type="text" 
                                className="form-control p2" 
                                placeholder='enter email address'
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label p1">Enter moblie number</label>
                            <input 
                                type="number" 
                                className="form-control p2" 
                                
                                placeholder='enter moblie number'
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label p1">Enter state</label>
                            <input 
                                type="text" 
                                className="form-control p2" 
                                
                                placeholder='enter state'
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label p1">Enter city</label>
                            <input 
                                type="text" 
                                className="form-control p2" 
                                
                                placeholder='enter city'
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label p1">Enter course</label>
                            <input 
                                type="text" 
                                className="form-control p2" 
                                
                                placeholder='enter course interested'
                            />
                        </div>
                        <button 
                            className="btn bp" 
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupForm;
