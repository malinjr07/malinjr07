import React, { useState } from 'react';

const CommentForm = () => {
    const [fromData, setfromData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setfromData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-4 col-12">
                    <div className="input-filled">
                        <input type="text" placeholder="Name" className="filled" name="name" value={fromData.name} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="input-filled">
                        <input type="email" placeholder="Email:" className="filled" name='email' value={fromData.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="input-filled">
                        <input type="text" placeholder="Phone:" className="filled" name='phone' value={fromData.phone} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-filled">
                        <textarea placeholder="Message here..." name='message' value={fromData.message} onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="theme-btn">GET A QUOTE</button>
                </div>
            </div>
        </form>
    );
};

export default CommentForm;