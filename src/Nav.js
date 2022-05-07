import React from 'react';
import './App.css'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
      <nav>
          <ul className='nav-links'>
            <NavLink className='navStyle' to='/proj-inter-web/student'>
              <li>Student</li>
            </NavLink>
            <NavLink className='navStyle' to='/proj-inter-web/group'>
              <li>Grupa</li>
            </NavLink>
          </ul>
      </nav>
  )
}

export default Nav;
