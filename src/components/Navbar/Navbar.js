import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbaritem from './NavbarItem';
import { NavData } from './NavData';

const Navbar = (props) => {  // props değişkenini ekledik
  return (
    <Nav variant="tabs" className="border-0 justify-content-center">
      {NavData.map((item) => (
        <Navbaritem key={item.id} text={item.title} {...props} />  // props'u aktardık
      ))}
    </Nav>
  );
};

export default Navbar;
