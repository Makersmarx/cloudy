import React from 'react';
import './reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import HomePage from './components/Home/HomePage';
import Tools from './components/Tools/Tools';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/tools" component={Tools} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
