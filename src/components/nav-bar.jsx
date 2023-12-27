import React from 'react';
import { NavLink } from 'react-router-dom';
import SmallIntro from './small-intro';
import './YourNavBar.css'; // Import your CSS file for styling

const YourNavBar = () => {
  return (
    <div className="navbar-container">
      <SmallIntro/>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/education">education</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
        {/* Add more NavLink components as needed */}
      </nav>
    </div>
  );
};

export default YourNavBar;
