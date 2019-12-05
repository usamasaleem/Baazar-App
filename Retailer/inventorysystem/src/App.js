import React from 'react';
import logo from './logo.svg';
import './App.css';
import NAVBAR from "./components/NAVBAR/NAVBAR.js";
import DRAWER from "./components/DRAWER/DRAWER.js";
import CARDS from "./components/CARDS/CARDS.js";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SignupPage from "./container/Signup/SignupPage";
import StoreSignupPage from "./container/Signup/StoreSignupPage";




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));



function App() {

  const [Drawer, setDrawer] = React.useState(false);
  const classes = useStyles();


  return (

    <div>

      <StoreSignupPage />

    </div>
  );


}




export default App;
