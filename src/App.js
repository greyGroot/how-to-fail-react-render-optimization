import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {routes.map(({ path, name }) => (
              <li key={`link-${path}`}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {routes.map((route) => (
            <Route key={`route-${route.path}`} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
