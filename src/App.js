import React from 'react';
import './App.css';
import './reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import HomePage from './components/Home/HomePage';
import Profile from './components/Profile/Profile';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
