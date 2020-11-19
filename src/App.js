import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/login";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import UsersList from "./components/users/UsersList";
import PrivateRoute from "./guard/authRedirect";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuth, shallowEqual);

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Switch>
            <PrivateRoute
              exact
              path="/"
              render={() => <Redirect to={"/profile"} />}
            />

            <PrivateRoute
              auth={isAuth}
              exact
              path="/dialogs"
              component={Dialogs}
            />
            <PrivateRoute
              auth={isAuth}
              exact
              path="/profile/:id"
              component={Profile}
            />
            <PrivateRoute
              auth={isAuth}
              exact
              path="/profile"
              component={Profile}
            />

            <PrivateRoute
              auth={isAuth}
              exact
              path="/users"
              component={UsersList}
            />
            <Route exact path="/login/" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
