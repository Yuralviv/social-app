import React from "react";
import DialogsItem from "./dialogsItem/DialogsItem";
import classes from "./Dialogs.module.css";
import DialogsMessage from "./dialogsMessage/DialogsMessage";
import { useSelector, shallowEqual } from "react-redux";

const Dialogs = (props) => {
  const dialogsList = useSelector(
    (state) => state.dialogs.dialogs,
    shallowEqual
  );

  const messageList = useSelector(
    (state) => state.dialogs.messages,
    shallowEqual
  );

  const dialogsElements = dialogsList.map((d) => (
    <DialogsItem name={d.name} key={d.id} id={d.id} />
  ));

  const messagesElements = messageList.map((m) => (
    <DialogsMessage message={m.message} key={m.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
