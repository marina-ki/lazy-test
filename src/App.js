import React from "react";
import "./styles.css";
import {ViewportObserverPage} from "./ViewportObserverPage"
import {IntersectionObserverPage}from "./IntersectionObserverPage"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Random Image Storage</h1>
        <h3>Lazyloading</h3>
        <section className="wrapper">
          <Router>
                  <Switch>
          <Route path="/viewport-observer">
            <ViewportObserverPage />
          </Route>
          <Route path="/intersection-observer">
            <IntersectionObserverPage />
          </Route>
        </Switch>
        </Router>
        </section>

      </header>
    </main>
  );
}

export default App;