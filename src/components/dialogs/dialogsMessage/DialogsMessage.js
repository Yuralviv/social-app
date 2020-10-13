import React from "react";
import classes from "./../Dialogs.module.css";

const DialogsMessage = ({message}) => {
  return <div className={classes.dialog}>{message}</div>;
};

export default DialogsMessage;
