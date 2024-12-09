import React, { useState } from 'react';
import './ContactFormStyle.css';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.firstName) errors.firstName = 'First Name is required';
    if (!formValues.lastName) errors.lastName = 'Last Name is required';
    if (!formValues.email) errors.email = 'Email is required';
    if (!formValues.message) errors.message = 'Message is required';
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formValues);
      // Add form submission logic here
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div className="form-left">
          <div className="form-field">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleInputChange}
            />
            {formErrors.firstName && <p className="error-text">{formErrors.firstName}</p>}
          </div>
          <div className="form-field">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleInputChange}
            />
            {formErrors.lastName && <p className="error-text">{formErrors.lastName}</p>}
          </div>
          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <p className="error-text">{formErrors.email}</p>}
          </div>
        </div>
        <div className="form-right">
          <div className="form-field">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formValues.message}
              onChange={handleInputChange}
            />
            {formErrors.message && <p className="error-text">{formErrors.message}</p>}
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;