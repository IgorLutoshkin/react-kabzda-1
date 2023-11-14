import React from "react"
import style from "./Navbar.module.css"

const Navbar = () => {
  return <nav className={style.nav}>
        <ul className="nav-list">
          <li className="item">Profile</li>
          <li className="item">Message</li>
          <li className="item">News</li>
          <li className="item">Music</li>
          <li className="item">Settings</li>
        </ul>
      </nav>
}

export default Navbar
