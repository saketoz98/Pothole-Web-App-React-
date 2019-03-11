import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import { Route, Switch } from 'react-router-dom';
import Index from './components/Layout/Index';
import Complaint from './components/Layout/Complaint';
import LoginPage from './components/Layout/LoginPage';
import Register from './components/Layout/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>  
              <PrivateRoute exact path="/register" component = {Register} />
              <PrivateRoute exact path="/complaints/:id" component = {Complaint} />

              <PrivateRoute exact path="/complaints" component = {Index} />
              <PublicRoute exact path="/" component = {LoginPage} />
          </Switch>

      </div>
      
      
    );
  }
}

export default App;
