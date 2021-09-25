import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Header from "./components/Header";
import Home from "./views/Home";
import Perrito from "./views/Perrito";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/perrito/:breed">
          <Perrito />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </Router>
  );
}

export default App;
