import React from "react";
import { NavLink } from "react-router-dom";
// import classes from '.././Dialogs.module.css'

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
      <div >
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;
