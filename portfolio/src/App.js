import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path ='/' component={Home}/>
      <Route path='/aboutme' component={AboutMe} />
      <Route path='/projects' component={Projects} />
      </Switch>
      </div>
    );
  }
}

export default App;