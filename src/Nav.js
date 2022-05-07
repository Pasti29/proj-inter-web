import React from 'react';
import './App.css'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
      <nav>
          <ul className='nav-links'>
            <NavLink className='navStyle' to='/student'>
              <li>Student</li>
            </NavLink>
            <NavLink className='navStyle' to='/group'>
              <li>Grupa</li>
            </NavLink>
          </ul>
      </nav>
  )
}

export default Nav;
