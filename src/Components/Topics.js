import React from "react";
import { Route, Link } from "react-router-dom";
import "./Topics.css";

export default function Topics({ match }) {
  return (
    <React.Fragment>
      <h2>Topics</h2>
      <p>Here we can select some topics.</p>
      <ul className="topics-list">
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to="/topics/props">Props</Link>
        </li>
      </ul>
      {/* <Route
        path="/topics/components"
        render={() => <h2>You clicked on Components</h2>}
      />
      <Route
        path="/topics/props"
        render={() => <h2>You clicked on Props</h2>}
      /> */}

      <Route path={`${match.path}/:topic`} component={Topic} />
      <Route
        path={match.path}
        exact
        render={() => <h4>Please select topic</h4>}
      />
    </React.Fragment>
  );
}

function Topic({ match }) {
  return <h3>You clicked: {match.params.topic}</h3>;
}
