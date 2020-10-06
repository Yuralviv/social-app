import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://img1.freepng.ru/20171220/gze/twitter-logo-png-5a3a1851372e76.0876249315137567532269680.jpg"
          alt="!!"
        />
      </header>
      <nav className="nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className="content">
        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" />
      </div>
    </div>
  );
}

export default App;
