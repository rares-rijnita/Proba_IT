import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/AllStyles.css';
import '../styles/ProfileStyle.css';
import '../styles/AddRecipe.css';
import '../styles/LoginStyle.css';
import Footer from '../components/Footer';

const ForgotPassword = ({ menuOpen, isMobile }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validationErrors = {};
    if (!email) validationErrors.email = 'Nu ai completat email-ul!';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted:', { email });
    setEmail('');
    setErrors({});
  };

  return (
    <div className={`${menuOpen && 'blur'}`}>
      <div className={`main ${isMobile && 'mobil'}`}>
        <div className={`profil ${isMobile && 'mobile'} flex`}>
          <form
            className={`informatiiBucatar add ${isMobile && 'mobil'} flex`}
            onSubmit={handleSubmit}
          >
            <h2 className="loginText">
              Forgot Password
            </h2>

            {}
            <div className={`content-nickname informatii ${isMobile && 'mobil'} add`}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`nickname ${isMobile && 'mobil'}`}
              />
              <svg
                width="100%"
                height="1"
                viewBox="0 0 412 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <line y1="0.5" x2="412" y2="0.5" stroke="white" />
              </svg>
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <button
              type="submit"
              className={`add-recipe-button login add ${isMobile && 'mobile'}`}
            >
              Send
            </button>
          </form>
        </div>
        {isMobile && <Footer isMobile={isMobile} />}
      </div>
    </div>
  );
};

export default ForgotPassword;
