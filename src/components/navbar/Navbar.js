import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fix, setFix] = useState(false);
  
  function setFixed() {
    if (window.scrollY >= 470) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <div>
      <nav className={fix ? 'navi fixed' : 'navi'}>
        <div className='style '>
          <li className='title'>InstaMort</li>
        </div>
        <div className='style menu'>
          <li ><Link to="/mortgagecalculator" className='item'>Mortgage Calculator</Link></li> 
          <li ><Link to="/aboutus" className='item'>About Us</Link></li> 
          <li ><Link to="/" className='item'>Better+</Link></li> 
          <li ><Link to="/" className='item'>Sign In</Link></li> 
          <li ><button className="cont">Continue</button></li>
        </div>

        {/* Hamburger Icon - Appears Only in Small Screens */}
        <div className='hamburger' onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </div>
      </nav>

      {/* Sidebar - Appears when sidebarOpen is true */}
      <div className={`side-bar ${sidebarOpen ? 'show' : ''}`}>
        <li>
          <button className='sidel' onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </li>  
        <li><Link to="/mortgagecalculator" className='sidel' onClick={() => setSidebarOpen(false)}>Mortgage Calculator</Link></li> 
        <li><Link to="/aboutus" className='sidel' onClick={() => setSidebarOpen(false)}>About Us</Link></li> 
        <li><Link to="/" className='sidel' onClick={() => setSidebarOpen(false)}>Better+</Link></li> 
        <li><Link to="/" className='sidel' onClick={() => setSidebarOpen(false)}>Sign In</Link></li> 
      </div>
    </div>
  );
}

export default Navbar;
