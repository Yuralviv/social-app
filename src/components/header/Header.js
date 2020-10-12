import React from "react";
import classes  from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h3 className={classes.logo}>
         Social-App 
      </h3>
    </header>
  );
};

export default Header;
