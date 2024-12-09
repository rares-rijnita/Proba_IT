import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import './NavbarStyles.css';

const Navbar = ({ isMobile, menuOpen, onToggleMenu, isLoggedIn }) => {
  const location = useLocation();
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    onToggleMenu(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      onToggleMenu(false);
    }
  }, [location]);

  const handleLogout = () => {
    Cookies.remove("UID");
  };

  const renderSettings = () => {
    if (location.pathname === '/profile') {
      if (isLoggedIn) {
        return (
          <ul className='settings'>
            <li><Link onClick={handleLogout} className='nav-link'>Logout</Link></li>
          </ul>
        );
      } else {
        return <Navigate to='/' />;
      }
    } else if (isLoggedIn) {
      return (
        <ul className='settings'>
          <li><Link to="/profile" className='nav-link'>Profile</Link></li>
        </ul>
      );
    } else {
      return (
        <ul className='settings'>
          <li>
            <Link to="/login" className={`nav-link ${location.pathname === '/login' ? '' : 'login-icon'}`}>
              {location.pathname === '/login' ? (
                <span>Login</span>
              ) : (
                <svg width="124" height="52" viewBox="0 0 124 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.85" x="1.5" y="1.5" width="121" height="49" rx="19.5" stroke="white" strokeWidth="3" />
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16">Login</text>
                </svg>
              )}
            </Link>
          </li>
          <li>
            <Link to="/register" className={`nav-link ${location.pathname === '/login' ? 'login-icon' : ''}`}>
              {location.pathname === '/login' ? (
                <svg width="124" height="52" viewBox="0 0 124 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.85" x="1.5" y="1.5" width="121" height="49" rx="19.5" stroke="white" strokeWidth="3" />
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16">Register</text>
                </svg>
              ) : (
                <span className='register-text'>Register</span>
              )}
            </Link>
          </li>
        </ul>
      );
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      onToggleMenu(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  if (location.pathname === '/not-found') return null;

  return (
    <>
      {!isMobile ? (
        <nav className='desktop-nav'>
          <div className='logo-container'>
            <Link to="/">
              <svg width="123" height="65" viewBox="0 0 123 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.624 57.6574C8.78933 57.6574 7.136 57.284 5.664 56.5374C4.21333 55.7694 3.072 54.7134 2.24 53.3694C1.42933 52.0254 1.024 50.5 1.024 48.7934C1.024 47.0867 1.42933 45.5614 2.24 44.2174C3.072 42.8734 4.21333 41.828 5.664 41.0814C7.136 40.3134 8.78933 39.9294 10.624 39.9294C12.4373 39.9294 14.016 40.3134 15.36 41.0814C16.7253 41.828 17.7173 42.9054 18.336 44.3134L14.464 46.3934C13.568 44.8147 12.2773 44.0254 10.592 44.0254C9.29067 44.0254 8.21333 44.452 7.36 45.3054C6.50667 46.1587 6.08 47.3214 6.08 48.7934C6.08 50.2654 6.50667 51.428 7.36 52.2814C8.21333 53.1347 9.29067 53.5614 10.592 53.5614C12.2987 53.5614 13.5893 52.772 14.464 51.1934L18.336 53.3054C17.7173 54.6707 16.7253 55.7374 15.36 56.5054C14.016 57.2734 12.4373 57.6574 10.624 57.6574ZM31.5493 39.9294C33.6826 39.9294 35.3999 40.5694 36.7013 41.8494C38.0239 43.1294 38.6853 45.028 38.6853 47.5454V57.4014H33.6933V48.3134C33.6933 46.948 33.3946 45.9347 32.7973 45.2734C32.1999 44.5907 31.3359 44.2494 30.2053 44.2494C28.9466 44.2494 27.9439 44.644 27.1973 45.4334C26.4506 46.2014 26.0773 47.3534 26.0773 48.8894V57.4014H21.0853V33.6574H26.0773V41.9774C26.7386 41.316 27.5386 40.8147 28.4773 40.4734C29.4159 40.1107 30.4399 39.9294 31.5493 39.9294ZM52.0698 53.6574C52.9658 53.6574 53.7551 53.5294 54.4378 53.2734C55.1418 52.996 55.7924 52.5694 56.3898 51.9934L59.0458 54.8734C57.4244 56.7294 55.0564 57.6574 51.9418 57.6574C50.0004 57.6574 48.2831 57.284 46.7898 56.5374C45.2964 55.7694 44.1444 54.7134 43.3338 53.3694C42.5231 52.0254 42.1178 50.5 42.1178 48.7934C42.1178 47.108 42.5124 45.5934 43.3018 44.2494C44.1124 42.884 45.2111 41.828 46.5978 41.0814C48.0058 40.3134 49.5844 39.9294 51.3338 39.9294C52.9764 39.9294 54.4698 40.2814 55.8138 40.9854C57.1578 41.668 58.2244 42.6707 59.0138 43.9934C59.8244 45.2947 60.2298 46.8414 60.2298 48.6334L47.4938 51.0974C47.8564 51.9507 48.4218 52.5907 49.1898 53.0174C49.9791 53.444 50.9391 53.6574 52.0698 53.6574ZM51.3338 43.7054C50.0751 43.7054 49.0511 44.1107 48.2618 44.9214C47.4724 45.732 47.0564 46.852 47.0138 48.2814L55.3978 46.6494C55.1631 45.7534 54.6831 45.0387 53.9578 44.5054C53.2324 43.972 52.3578 43.7054 51.3338 43.7054ZM68.4493 40.5694H72.8653V44.4094H68.5773V57.4014H63.5853V39.8014C63.5853 37.8387 64.1613 36.2814 65.3133 35.1294C66.4866 33.9774 68.1293 33.4014 70.2413 33.4014C70.9879 33.4014 71.6919 33.4867 72.3533 33.6574C73.0359 33.8067 73.6013 34.0307 74.0493 34.3294L72.7373 37.9454C72.1613 37.54 71.4893 37.3374 70.7213 37.3374C69.2066 37.3374 68.4493 38.1694 68.4493 39.8334V40.5694Z" fill="white"/>
                <path opacity="0.4" d="M92.7925 41.5957C104.003 41.5957 113.09 32.5081 113.09 21.2979C113.09 10.0877 104.003 1 92.7925 1C81.5823 1 72.4946 10.0877 72.4946 21.2979C72.4946 32.5081 81.5823 41.5957 92.7925 41.5957Z" stroke="white" stroke-miterlimit="10"/>
                <path d="M72.907 25.9535C70.6857 14.9666 77.4694 3.68703 88.4563 1.479" stroke="#009C41" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M123 8.66162H82.8965V16.9085H123V8.66162Z" fill="#009C41"/>
                <path d="M92.4202 23.1599H82.8965V56.9454H92.4202V23.1599Z" fill="#009C41"/>
                <path d="M107.624 16.9083H98.0999V56.9587H107.624V16.9083Z" fill="#009C41"/>
              </svg>
            </Link>
          </div>
          <ul className='nav-links'>
            <li><Link to="/recipes" className='nav-link'>Recipes</Link></li>
            <li><Link to="/add-recipe" className='nav-link'>Add Recipe</Link></li>
          </ul>
          <div className='settings'>
            {renderSettings()}
          </div>
        </nav>
      ) : (
        <header className="mobile-header">
          <div className="mobile-logo-container">
            <button className="menu-button" onClick={handleMenuToggle}>
              <svg width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="43.85" height="38" rx="4.5" stroke="black" />
                <path d="M9.75 11.7001L35.1 11.7001M9.75 19.5001H35.1M9.75 27.3001H35.1" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className={`mobile-logo ${menuOpen ? 'blur' : ''} ${location.pathname === '/' ? 'home' : ''} ${location.pathname === '/add-recipe' ? 'add-recipe' : ''}`}>
              <Link to="/">
                <p className='logo-text'>chef</p>
                <svg viewBox="0 0 52 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M21.7925 41.5957C33.0027 41.5957 42.0904 32.5081 42.0904 21.2979C42.0904 10.0877 33.0027 1 21.7925 1C10.5823 1 1.49463 10.0877 1.49463 21.2979C1.49463 32.5081 10.5823 41.5957 21.7925 41.5957Z" stroke="white" strokeMiterlimit="10" />
                  <path d="M1.90702 25.9535C-0.314307 14.9666 6.46939 3.68703 17.4563 1.479" stroke="#009C41" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M52.0001 8.66162H11.8965V16.9085H52.0001V8.66162Z" fill="#009C41" />
                  <path d="M21.4202 23.1599H11.8965V56.9454H21.4202V23.1599Z" fill="#009C41" />
                  <path d="M36.6236 16.9083H27.0999V56.9587H36.6236V16.9083Z" fill="#009C41" />
                </svg>
              </Link>
            </div>
          </div>
          <nav ref={menuRef} className={`mobile-nav ${menuOpen ? 'open' : 'hidden'}`}>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/recipes'>Recipes</Link></li>
              {isLoggedIn && <li><Link to="/add-recipe">Add Recipe</Link></li>}
              <div className='mobile-options flex column'>
                {isLoggedIn && (
                  <>
                    <li>
                      <Link to="/profile" className='nav-link mobile-link'>
                        <div className='login-icon'>
                          <svg width="62" height="31" viewBox="0 0 124 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.85" x="1.5" y="1.5" width="121" height="49" rx="19.5" stroke="black" strokeWidth="3" />
                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16">Profile</text>
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li><Link onClick={handleLogout}>Logout</Link></li>
                  </>
                )}
                {!isLoggedIn && (
                  <>
                    <li><Link to="/login">Login</Link></li>
                    <li>
                      <Link to="/register" className='nav-link mobile-link'>
                        <div className='register-text'>Register</div>
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;