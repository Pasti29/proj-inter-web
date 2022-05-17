import React, { useContext } from 'react';
import './App.css'
import { NavLink } from 'react-router-dom';
import { UserContext } from './UserContext';

const style = {
  color: "white",
  textDecoration: "none"
}

function Nav() {
  const {user, setUser} = useContext(UserContext);

  function logout() {
    setUser("");
  }

  const rend = () => {
    if (user === "") {
      return (
        <div>
          <NavLink to='/proj-inter-web/login' style={style}>
            Zaloguj się
          </NavLink> <br />
          <NavLink to='/proj-inter-web/register' style={style}>
            Zarejestruj się
          </NavLink>
        </div>
      ) 
    } else {
      return (
        <div>
          Witaj, {user.username} <br />
          <a href='#' onClick={logout} style={style} >Wyloguj</a>
        </div>
      )
      
    }
  }

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
          {rend()}
          
      </nav>
      
  )
}

export default Nav;
