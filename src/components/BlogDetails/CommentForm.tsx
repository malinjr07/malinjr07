import React, { FC, ReactElement, useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const CommentForm: FC = (): ReactElement => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="input-filled">
            <input 
              type="text" 
              placeholder="Name" 
              className="filled" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="input-filled">
            <input 
              type="email" 
              placeholder="Email:" 
              className="filled" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="input-filled">
            <input 
              type="text" 
              placeholder="Phone:" 
              className="filled" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-filled">
            <textarea 
              placeholder="Message here..." 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
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
