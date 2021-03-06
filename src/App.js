import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Info from "./Components/Info";
import Credits from "./Components/Credits";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Topics from "./Components/Topics";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Navbar />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/info" component={Info} />
            <Route path="/credits" component={Credits} />
            {/* <Route path="/topics" render={() => <h1>Topics</h1>} /> */}
            <Route path="/topics" component={Topics} />
            <Route path="/whatever" component={Topics} />
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
