import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.item}>
        <li>
          <NavLink to="/profile" activeClassName={classes.activeLink}>
            Profile
          </NavLink>
        </li>

        <li className={`${classes.item} ${classes.active}`}>
          <NavLink to="/dialogs" activeClassName={classes.activeLink}>
            Messages
          </NavLink>
        </li>
        <li className={`${classes.item} ${classes.active}`}>
          <NavLink to="/news" activeClassName={classes.activeLink}>
            News
          </NavLink>
        </li>

        <li>
          <NavLink to="/music" activeClassName={classes.activeLink}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={classes.activeLink}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
