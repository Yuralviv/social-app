import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <BrowserRouter>
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
