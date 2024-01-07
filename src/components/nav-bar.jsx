import React from 'react';
import { NavLink } from 'react-router-dom';
import SmallIntro from './small-intro';
import { Home, Info, Work, Build, MenuBook, MailOutline } from '@mui/icons-material'; // Import icons
import './YourNavBar.css'; // Import your CSS file for styling
import SendIcon from '@mui/icons-material/Send';

const YourNavBar = (props) => {
  const items = [
    { path: "/", icon: <Home />, title: "Home" },
    { path: "/about", icon: <Info />, title: "About" },
    { path: "/projects", icon: <Work />, title: "Projects" },
    { path: "/skills", icon: <Build />, title: "Skills" },
    { path: "/blog", icon: <MenuBook />, title: "Blog" },
    { path: "/contact", icon: <MailOutline />, title: "Contact Me" },
  ];
  const myStyle = {
    backgroundColor : props.bgcolor
  }
  return (
    <div className="navbar-container" style={myStyle}>
      {/* <SmallIntro /> */}
      <nav className="navbar">
        {items.map((item, index) => (
          <NavLink key={index} to={item.path} className="navitem">
            {item.icon}
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default YourNavBar;
