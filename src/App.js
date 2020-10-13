import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/profile/Profile";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/dialogs"
            render={() => {
              <Dialogs />;
            }}
          />
          <Route
            exact
            path="/profile"
            render={() => {
              <Profile />;
            }}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
