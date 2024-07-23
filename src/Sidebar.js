// src/Sidebar.js

import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; // Optional: Import CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/mymoves"><i class="fa fa-bus" aria-hidden="true"></i>  My Moves</Nav.Link>
        <Nav.Link href="/myprofile"><i class="fa fa-user" aria-hidden="true"></i> MY PROFILE</Nav.Link>
        <Nav.Link href="/getquotes"><i class="fa fa-quote-left" aria-hidden="true"></i> GET QUOTE</Nav.Link>
        <Nav.Link href="/logout"><i class="fa fa-sign-out" aria-hidden="true"></i> LOGOUT</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
