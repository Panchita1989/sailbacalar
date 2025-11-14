

import React, { useState, useEffect } from 'react';
import SideNav from './sideNav.jsx';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const onClose = () => setVisible(false);
  const toggleSideBar = () => setVisible(prev => !prev);

  // show = true auf allen Seiten außer "/"
  useEffect(() => {
    if (pathname !== '/') {
      setShow(true);
      document.body.classList.remove('home'); // <-- LandingPage-Modus aus
    } else {
      setShow(false);
      document.body.classList.add('home'); // <-- LandingPage-Modus an
    }
  }, [pathname]);

  return (
    <>
      <header
        className={`header flex text-xl w-full z-20 items-center h-20 transition-all duration-700 ease-out ${
          show
            ? 'sticky top-0 justify-between  text-neutral-300 animate-[fadeIn_0.8s_ease-out_forwards]'
            : 'fixed top-0 justify-end bg-neutral-200/10  text-neutral-600  pointer-events-none animate-[fadeInHeaderFooter_1.5s_ease-out_4.5s_forwards]'
        }`}
      >
        {show && (
          <Link to="/" onClick={onClose}>
            <img
              className="h-15 rounded ml-5"
              src="images/logo.png"
              alt="sail bacalar"
            />
          </Link>
        )}
        <div onClick={toggleSideBar} className="mr-5 cursor-pointer">
          Menu <FontAwesomeIcon icon={faBars} />
        </div>
      </header>

      <SideNav onClose={onClose} visible={visible} />
    </>
  );
}
