import React from 'react';
import routes from './routers';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import './assets/styles/App.css'

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
