import React from 'react';
import HomeContainers from './containers/HomeContainers'
import CustomersContainer from './containers/CustomersContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeContainers} />
        <Route exact path="/customers" component={CustomersContainer} />
        <Switch>
          <Route path="/customers/new" component={""} />
          <Route path="/customers/:dni" component={""} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
