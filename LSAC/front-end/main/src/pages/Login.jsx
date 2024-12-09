import { useState } from 'react';
import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './../styles/AllStyles.css';
import '../styles/ProfileStyle.css';
import '../styles/AddRecipe.css';
import '../styles/LoginStyle.css';
import Footer from '../components/Footer';
import parolasvg from '../assets/parola.svg'
import mailsvg from '../assets/mail.svg'

const Login = ({ menuOpen, isMobile }) => {
  const [email, setEmail] = useState('');
  const [parola, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleParolaChange = (e) => setPassword(e.target.value);
  const validate = () => {
    const validationErrors = {};
    if (!email) validationErrors.email = 'Nu ai completat email-ul!';
    if (!parola) validationErrors.parola = 'Nu ai completat parola!';
    return validationErrors;
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {}


  return (
    <div className={`${menuOpen && 'blur'}`}>
      <div className={`main ${isMobile && 'mobil'}`}>
        <div className={`profil ${isMobile && 'loginmobile'} flex`}>
          <form
            className={`informatiiBucatar add ${isMobile && 'loginmobile'} login flex`}
            onSubmit={handleSubmit}
          >
            <h2 className={`loginText ${isMobile&&'loginmobile'}`}>
              Loghează-te,<br /> chiorăie mațele!
            </h2>

            {}
            <div className={`content-nickname informatii ${isMobile && 'loginmobile'} add`}>
              <div className='flex'>
                <img src={mailsvg}/>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className={`p1 nickname ${isMobile && 'mobil'}`}
              /></div>
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

            {}
            <div className={`content-nickname informatii ${isMobile && 'loginmobile'} add`}>
              <div className='flex'>
              <img src={parolasvg}></img>
              <input
                type="password"
                placeholder="Password"
                value={parola}
                onChange={handleParolaChange}
                className={`p1 nickname ${isMobile && 'mobil'}`}
              /></div>
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
              {errors.parola && <p className="error">{errors.parola}</p>}
            </div>

            {}
            <button
              type="submit"
              className={`add-recipe-button login add ${isMobile && 'mobile'}`}
            >
              Login
            </button>

            {}
            <Link to="/forgot-password" className={`forgot-password ${isMobile && 'mobilelogin'}`}>
              Forgot password
            </Link>
          </form>
        </div>
      </div>
      {isMobile && <Footer isMobile={isMobile} />}
    </div>
  );
};

export default Login;
