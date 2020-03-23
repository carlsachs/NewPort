import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//IMPORTING
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import AboutMe from "./components/AboutMe.js"

//styling
// import styled from "styled-components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
