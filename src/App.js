import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Info from "./Components/Info";
import Credits from "./Components/Credits";
import Home from "./Components/Home";
import Topics from "./Components/Topics";
import NotFound from "./Components/NotFound";

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

const routes = [
  {
    path: "/home",
    exact: true,
    render: () => <React.Fragment><h2>Home</h2> <p>This is the homepage of this SPA.</p></React.Fragment>
  },
  {
    path: "/about",
    exact: true,
    render: () => <React.Fragment><h2>About</h2><p>It's a me.</p></React.Fragment>
  },
  {
    path: "/info",
    exact: true,
    render: () => <React.Fragment><h2>Info</h2><p>Lorem mierdas.</p></React.Fragment>
  },
  {
    path: "/credits",
    exact: true,
    render: () => <React.Fragment><h2>Credits</h2><p>Thanks Mom.</p></React.Fragment>
  },
  {
    path: "/topics",
    exact: true,
    render: () => <React.Fragment><h2>Topics</h2> <p>Here we can select some topics.</p></React.Fragment>
  }
];

function NavbarExample() {
  return (
    <BrowserRouter>
      <div style={{
        background: "#474747"
      }}>
        <ul className="navbar-list">
          <li>
            <NavLink to="/home" activeClassName="selected-navbar">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="selected-navbar">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/info" activeClassName="selected-navbar">
              Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/credits" activeClassName="selected-navbar">
              Credits
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics" activeClassName="selected-navbar">
              Topics
            </NavLink>
          </li>
        </ul>

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.render}
          />
        ))}
      </div>
    </BrowserRouter>
  );
}

export default NavbarExample;

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <div>
//             <Navbar />
//             <Switch>
//             <Route path="/home" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/info" component={Info} />
//             <Route path="/credits" component={Credits} />
//             {/* <Route path="/topics" render={() => <h1>Topics</h1>} /> */}
//             <Route path="/topics" component={Topics} />
//             <Route path="/whatever" component={Topics} />
//             <Route component={NotFound} />
//             </Switch>
//           </div>
//         </header>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
