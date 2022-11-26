import React from 'react';
import {NavLink} from "react-router-dom";

export default function Nav() {
  //const linkStyle = { border: '1px black', padding: '5px' };

  return (
      <nav className="nav link">
        <NavLink to="/React-Portfolio" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>About Me</NavLink>
        <NavLink to="/portfolio" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Portfolio</NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Contact</NavLink>
        <NavLink to="/resume" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Resume</NavLink>
      </nav>
  );
}
