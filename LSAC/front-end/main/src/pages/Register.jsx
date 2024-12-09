import { useState,useEffect } from 'react';
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './../styles/AllStyles.css';
import '../styles/ProfileStyle.css';
import '../styles/AddRecipe.css';
import '../styles/LoginStyle.css';
import Footer from '../components/Footer';
import usersvg from '../assets/user.svg'
import telefonsvg from '../assets/telefon.svg'
import parolasvg from '../assets/parola.svg'
import mailsvg from '../assets/mail.svg'

const Register = ({ menuOpen, isMobile}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    email: '',
    parola: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nume) newErrors.nume = 'Nu ai completat numele!';
    if (!formData.telefon) newErrors.telefon = 'Nu ai completat numărul de telefon!';
    if (!formData.email) newErrors.email = 'Nu ai completat email-ul!';
    if (!formData.parola) newErrors.parola = 'Nu ai completat parola!';
    if (formData.parola !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Parolele nu sunt identice!';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {}

  return (
    <div className={`${menuOpen && 'blur'}`}>
      <div className={`main ${isMobile && 'mobil'}`}>
        <div className={`profil ${isMobile && 'mobileRegister'} flex`}>
          <form
            className={`informatiiBucatar add ${isMobile && 'mobil'} register flex`}
            onSubmit={handleSubmit}
          >
            <h2 className={`loginText ${isMobile && 'loginmobile'}`}>
              Hai, fă foamea<br></br> cu noi!
            </h2>

            {}
            <div className={`content-nickname informatii ${isMobile && 'mobil'} add`}>
              <div className='flex'>
              <img src={usersvg}/>
              <input
                type="text"
                name="nume"
                placeholder="Full name"
                value={formData.nume}
                onChange={handleChange}
                className={`p1 nickname ${isMobile && 'mobil'}`}
              />

              </div>
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
              {errors.nume && <p className="error">{errors.nume}</p>}
            </div>
            <div className={`content-nickname informatii ${isMobile && 'mobil'} add`}>
              
            <div className='flex'>
            
            <img src={telefonsvg}/>
              <input
                type="tel"
                name="telefon"
                placeholder="Telephone"
                value={formData.telefon}
                onChange={handleChange}
                className={`p1 nickname ${isMobile && 'mobil'}`}
              />
              </div>
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
              {errors.telefon && <p className="error">{errors.telefon}</p>}
            </div>

            <div className={`content-nickname informatii ${isMobile && 'mobil'} add`}>
            <div className='flex'>
              <img src={mailsvg}/>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className={`p1 nickname ${isMobile && 'mobil'}`}
              />

              </div>
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

            <div className={`content-nickname informatii ${isMobile && 'mobil'} add`}>
            <div className='flex'>
              <img src={parolasvg}/>
              <input
                type="password"
                name="parola"
                placeholder="Password"
                value={formData.parola}
                onChange={handleChange}
                className={`p1 nickname ${isMobile && 'mobil'}`}
              />
              </div>
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
            <div className={`content-nickname informatii ${isMobile && 'mobil'} add`}>
              <div className='flex'>
              <img src={parolasvg}></img>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`p1 nickname ${isMobile && 'mobil'}`}
              />
              </div>
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
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>


            <button
              type="submit"
              className={`add-recipe-button login signup add ${isMobile && 'mobileReg'}`}
              disabled={isLoading}
            >
              {isLoading ? 'Înregistrare în curs...' : 'Sign Up'}
            </button>
          </form>
        </div>
        {isMobile && <Footer isMobile={isMobile} />}
      </div>
    </div>
  );
};

export default Register;
