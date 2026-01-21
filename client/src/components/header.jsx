

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
      className= 'flex text-xl w-full z-20 items-center h-20 sticky top-0 justify-between '
    >
          <Link to="/" onClick={onClose}>
            <img
              className="h-20 rounded ml-5"
              src="images/logoNew.png"
              alt="sail bacalar"
            />
          </Link>
        
        {!visible && 
        <div onClick={toggleSideBar} className="mr-5 cursor-pointer">
          Menu 
          <FontAwesomeIcon icon={faBars} />
        </div>}
      </header>

      <SideNav onClose={onClose} visible={visible} />
    </>
  );
}
