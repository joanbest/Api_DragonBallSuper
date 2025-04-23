import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../img/gokusleeping.png';

// Importa íconos de Material-UI
import HomeIcon from '@mui/icons-material/Home';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const navLinks = [
    { to: '/', icon: <HomeIcon />, text: 'Inicio' },
    { to: '/filter/Male', icon: <MaleIcon />, text: 'Masculino' },
    { to: '/filter/Female', icon: <FemaleIcon />, text: 'Femenino' },
    { to: '/DatosPersonales', icon: <PeopleAltIcon />, text: 'Acerca de' },
  ];

  return (
    <nav className="navbar">
      {isSmallScreen ? (
        <>
          <div className="navbar-header">
            <img
              src={logo}
              alt="Logo"
              className="navbar-logo"
            />
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List sx={{ width: 250 }}>
              {navLinks.map((link) => (
                <ListItem
                  button
                  key={link.text}
                  component={NavLink}
                  to={link.to}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.text}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'item active' : 'item')}
              >
                {link.icon} {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;