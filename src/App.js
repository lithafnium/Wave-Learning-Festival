import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About'
import Teachers from './pages/Teachers'
import Team from './pages/Team'
import FAQ from './pages/FAQ'
import Courses from './pages/Courses'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/teachers">
            <Teachers />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/">
            <About />
          </Route>
          

        </Switch>

      </div>
    </Router>
  );
}

export default App;
