import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const closeBurgerMenu = () => {
    setIsBurgerOpen(false);
  };

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', (to) => {
      setActiveSection(to);
    });

    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  return (
    <div>
      <header className="header">
        <nav className={`nav ${isBurgerOpen ? 'open' : ''}`}>
          <ul className={`nav-list ${isBurgerOpen ? 'open' : ''}`}>
            <li className="nav-item">
            <Link
                activeClass="active-link"
                to="image-1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('image-1')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active-link"
                to="image-2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('image-2')}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active-link"
                to="image-3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('image-3')}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active-link"
                to="image-4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('image-4')}
              >
                Creators
              </Link>
            </li>
          </ul>
        </nav>
       
        <div className="burger-icon" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </div>
  );
}

export default Header;

