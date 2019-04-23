import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Info from "./Components/Info";
import Credits from "./Components/Credits";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/info" component={Info} />
            <Route path="/credt" component={Credits} />
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
