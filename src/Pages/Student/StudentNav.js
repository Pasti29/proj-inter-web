import React from "react";
import '../../App.css'
import { NavLink } from "react-router-dom";

function StudentNav() {
    return (
        <nav className="subNav">
            <ul className="nav-links">
                <NavLink className='navStyle subNavStyle' to='/proj-inter-web/student'>
                    <li>Wyświetl studentów</li>
                </NavLink>
                <NavLink className='navStyle subNavStyle' to='/proj-inter-web/student/add'>
                    <li>Dodaj studenta</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default StudentNav;