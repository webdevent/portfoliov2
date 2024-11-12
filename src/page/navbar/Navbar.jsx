import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav-logo">Portfolio</div>
        <button className='nav-btn' id='menu' onClick={() => {
            const routes = document.getElementById("routes");
            routes.classList.toggle("menu-active") 
        }}>menu</button>
        <ul className="routes" id='routes'>
            <li>
                <NavLink className="route" to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink className="route" to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink className="route" to={"/projects"}>Projects</NavLink>
            </li>
            <li>
                <NavLink className="route" to={"/contact"}>Contact Me</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
