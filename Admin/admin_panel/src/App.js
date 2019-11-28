import React from 'react';
import './App.scss';
import logo from './assets/images/logo192.png';
import Grid from './components/Grid/Grid.js';
import styled from 'styled-components';
import DashboardPage from './containers/DashboardPage/DashboardPage';


function App() {

 

  return (
    <div className="App">
      <DashboardPage></DashboardPage>
    </div>
  );
}

export default App;
