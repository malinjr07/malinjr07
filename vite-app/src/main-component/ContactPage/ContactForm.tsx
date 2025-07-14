import React, { FC, ReactElement, useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: FC = (): ReactElement => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Add form submission logic here if needed
  };

  return (
    <form id="myForm2" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="input-filled">
            <input
              type="text"
              placeholder="Name"
              className="filled"
              name="name"
              required
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
              required
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
              required
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
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="theme-btn">Submit Now</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
