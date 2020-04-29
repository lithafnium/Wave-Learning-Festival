import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <About />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
