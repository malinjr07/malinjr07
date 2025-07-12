import React, { useState } from 'react';

const ContactForm = () => {

    const [formData, setformData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <form id="myForm2" onSubmit={handleSubmit} >
            <div className="row">
                <div className="col-lg-4 col-12">
                    <div className="input-filled">
                        <input type="text" placeholder="Name" className="filled" name="name" required alue={formData.name} onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="input-filled">
                        <input type="email" placeholder="Email:" className="filled" name="email" required alue={formData.email} onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="input-filled">
                        <input type="text" placeholder="Phone:" className="filled" name="phone" required alue={formData.phone} onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-filled">
                        <textarea placeholder="Message here..." name="message" required alue={formData.message} onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="theme-btn" >Submit Now</button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;