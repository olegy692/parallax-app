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

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="burger-menu" onClick={toggleBurgerMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <nav className={`nav ${isBurgerOpen ? 'open' : ''}`}>
          <ul className={`nav-list ${isBurgerOpen ? 'open' : ''}`}>

            <li className="nav-item">
              <Link
                style={{ fontWeight: 700 }}
                activeClass="active-link"
                to="image-1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('image-1')}
              >
                Forside
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={{ fontWeight: 700 }}
                activeClass="active-link"
                to="divbetween1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('divbetween1')}
              >
                Om
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={{ fontWeight: 700 }}
                activeClass="active-link"
                to="carousel-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('carousel-container')}
              >
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={{ fontWeight: 700 }}
                activeClass="active-link"
                to="image-4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('image-4')}
              >
                Udvikling
              </Link>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;

{
  {/**

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
      <header className="header" >

        <nav className={`nav ${isBurgerOpen ? 'open' : ''}`}>

          <ul className={`nav-list ${isBurgerOpen ? 'open' : ''}`}>

            <li className="nav-item">
              <Link
                style={{ fontWeight: 700 }}
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
                style={{ fontWeight: 700 }}
                activeClass="active-link"
                to="divbetween1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('divbetween1')}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={{ fontWeight: 700 }}
                activeClass="active-link"
                to="carousel-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={closeBurgerMenu}
                onSetActive={() => handleSetActive('carousel-container')}
              >
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={{ fontWeight: 700 }}
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


    </div >
  );
}

export default Header;

*/}
}

