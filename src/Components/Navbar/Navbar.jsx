import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = (props) => {
  return <nav className={style.nav}>
    <ul className="nav-list">

      <li className="item">
        <NavLink to="/profile">Profile</NavLink>
      </li>

      <li className="item">
        <NavLink to="/dialogs">Message</NavLink>
      </li>

      <li className="item">
        <NavLink to="/news">News</NavLink>
      </li>

      <li className="item">
        <NavLink to="/music"> Music</NavLink>
      </li>

      <li className="item">
        <NavLink to="/setting">Settings</NavLink>
      </li>

    </ul>
  </nav>
}

export default Navbar
