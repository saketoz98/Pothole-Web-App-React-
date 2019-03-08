import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import { Route, Switch } from 'react-router-dom';
import Index from './components/Layout/Index';
import Complaint from './components/Layout/Complaint';

class App extends Component {
  render() {
    return (
      <Navbar>
        <Switch>       
          <Route exact path="/" component = {Index} />
          <Route exact path="/complaints/:id" component = {Complaint} />
        </Switch>
      </Navbar>
      
      
    );
  }
}

export default App;
