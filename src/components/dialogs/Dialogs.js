import React from "react";
import DialogsItem from "./dialogsItem/DialogsItem";
import classes from "./Dialogs.module.css";
import DialogsMessage from "./dialogsMessage/DialogsMessage";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogsItem name="Yura" id="1" />
        <DialogsItem name="Anna" id="2" />
        <DialogsItem name="Sophia" id="3" />
        <DialogsItem name="Orest" id="4" />
        <DialogsItem name="Alla" id="5" />
      </div>
      <div className={classes.messages}>
        <DialogsMessage message="hello" />
        <DialogsMessage message="hello" />
        <DialogsMessage message="hello" />
        <DialogsMessage message="hello" />
      </div>
    </div>
  );
};

export default Dialogs;
