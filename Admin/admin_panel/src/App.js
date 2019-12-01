import React from 'react';
import './App.scss';
import logo from './assets/images/logo192.png';
import Grid from './components/Grid/Grid.js';
import styled from 'styled-components';
import DashboardPage from './containers/DashboardPage/DashboardPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

 

  return (
    <div className="App">
      <Router>
      <DashboardPage></DashboardPage>
      </Router>
    </div>
  );
}

export default App;
