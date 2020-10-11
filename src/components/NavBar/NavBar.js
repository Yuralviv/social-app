import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/users" activeClassName={classes.activeLink}>
          Users
        </NavLink>
      </div>

      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>##</div>
      <div className={classes.item}>##</div>
    </nav>
  );
};

export default NavBar;
