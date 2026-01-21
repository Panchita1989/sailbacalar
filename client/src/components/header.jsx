

import React, { useState } from 'react';
import SideNav from './sideNav.jsx';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [visible, setVisible] = useState(false);

  const onClose = () => setVisible(false);
  const toggleSideBar = () => setVisible(prev => !prev);


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
