import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

import { setUserData } from "../../redux/action/authAction";
import { authAPI } from "../../api/auth-api";
import { logoutAuth } from "../../redux/reducer/authReducer";

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth, shallowEqual);

  const login = useSelector((state) => state.auth.login, shallowEqual);

  useEffect(() => {
    authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserData(data.data));
      }
    });
  }, []);

  return (
    <header className={classes.header}>
      <div>
        <h3 className={classes.logo}>Social-App</h3>
      </div>
      <div className={classes.login}>
        {isAuth ? <div>{login} - <button onClick={logoutAuth} >logout </button> </div> : <NavLink to={"/login"}>login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
