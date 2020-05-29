import React from 'react';
import './App.css'
import './assets/Signin.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import routes from './routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
