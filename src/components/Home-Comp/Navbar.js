import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './HomeSection.css';
import { GiCircleClaws } from "react-icons/gi";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  } 

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar' : 'navbar active'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AlumC< GiCircleClaws />nnect
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/community'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Community
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/opportunity'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Opportunities
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/resources'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </li>
            {/* <li>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && 
          <Link to="/signup">
            <Button buttonStyle='btn--outline'>SIGN UP</Button>
          </Link>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
