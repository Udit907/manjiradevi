import React from 'react';
import Swal from 'sweetalert2';
import './Enquiryform.css';
const Enquiryform = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "cc7129b7-f553-48d5-967f-c34ade82798e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Enquiry Form submit sucessfully!",
                icon: "success"
              });
        }
      };
    return (
    <section className='contact'>
        <form onSubmit={onSubmit}>
            <h2>Enquiry Form</h2>
            <div className="input-box">
                <label>Full Name</label>
                <input type='text' name='name' className='field' placeholder='Enter your Name'  required/>
</div>
<div className="input-box">
                <label>Email Address</label>
                <input type='email'name='email' className='field' placeholder='Enter your Email'  required/>
</div>
<div className="input-box">
                <label>Enter Moblie Number</label>
                <input type='number'name='number' className='field' placeholder='Enter your Moblie Number'  required/>
</div>
<div className="input-box">
                <label>Enter Course</label>
                <input type='text'name='course' className='field' placeholder='Enter Course Interested'  required/>
</div>

<button type='submit'>Submit</button>
        </form>
    </section>
)
}
export default Enquiryform;