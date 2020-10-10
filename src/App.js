import React from "react";
import "./App.css";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      {/* <Profile /> */}
      <Dialogs/>
    </div>
  );
}

export default App;
