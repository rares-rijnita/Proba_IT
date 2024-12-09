import { useState, useEffect } from 'react'
import './App.css'
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/Homepage';
import Recipes from './pages/Recipes';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import AddRecipes from './pages/AddRecipes';
import NotFound from './pages/NotFound';
import Cookies from 'js-cookie'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [UID, setUID] = useState("")
  const [name, setName] = useState("")
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Cookies.get("UID");
      if (id) {
        setIsLoggedIn(true);
        if(!UID) setUID(id)
      } else {
        setIsLoggedIn(false);
        if(UID) setUID(id)
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {}, [UID]);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setMenuOpen(isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Router>
      {<Navbar isMobile={isMobile} menuOpen={menuOpen} onToggleMenu={handleMenuToggle} isLoggedIn={isLoggedIn}/>}
      <Routes>
        <Route path="/" element={<Home menuOpen={menuOpen} isMobile={isMobile}/>} />
        <Route path="/recipes" element={<Recipes menuOpen={menuOpen} isMobile={isMobile}/>} />
        <Route path="/profile" element={isLoggedIn?<Profile menuOpen={menuOpen} isMobile={isMobile} UID={UID}/>:<Navigate to='/login' />} />
        <Route path="/register" element={!isLoggedIn?<Register menuOpen={menuOpen} isMobile={isMobile}/>:<Navigate to='/'/>} />
        <Route path="/login" element={!isLoggedIn?<Login menuOpen={menuOpen} isMobile={isMobile}/>:<Navigate to='/'/>} />
        <Route path="/forgot-password" element={!isLoggedIn?<ForgotPassword menuOpen={menuOpen} isMobile={isMobile}/>:<Navigate to='/'/>} />
        <Route path="/add-recipe" element={isLoggedIn?<AddRecipes userName={name} menuOpen={menuOpen} UID={UID} isMobile={isMobile}/>:<Navigate to='/login'/>} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to='/not-found' />} />
      </Routes>
    </Router>
  )
}

export default App
