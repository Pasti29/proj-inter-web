import React from "react";
import '../../App.css'
import { NavLink } from "react-router-dom";

function GroupNav() {
    return (
        <nav className="subNav">
            <ul className="nav-links">
                <NavLink className='navStyle subNavStyle' to='/proj-inter-web/group'>
                    <li>Wyświetl grupy</li>
                </NavLink>
                <NavLink className='navStyle subNavStyle' to='/proj-inter-web/group/add'>
                    <li>Dodaj grupę</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default GroupNav;