import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import HomePageContainer from "./containers/Homepage_container/Homepage_container";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Categorypage_container from "./containers/Categorypage_container/Categorypage_container";
import ProductDetailpage_container from "./containers/ProductDetailpage_container/ProductDetailpage_container";
import ShoppingCartpage_container from "./containers/ShoppingCartpage_container/ShoppingCartpage_container";
import { initializeIcons } from '@uifabric/icons';
import Checkoutpage_container from './containers/Checkoutpage_container/Checkoutpage_container';

function App() {

  initializeIcons();
  const [isAuth, setIsAuth] = useState(false)

  setTimeout(() => {
    setIsAuth(true)
  }, 1000);

  const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
      isAuth
        ? <Component {...props} />
        :
        <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
        }}
        />
    )}
    />
  )

  if (isAuth)

    return (
      <div className="homepage-container">
        <Router>
        <Route  component={NavBar}/>
        <Switch>
        <Route path="/" exact component={HomePageContainer}/>
        <Route path="/Categories" component={Categorypage_container}/>
        <Route path="/ProductDetail" component={ProductDetailpage_container}/>
        <Route path="/ShoppingCart" component={ShoppingCartpage_container}/>
        <Route path="/Checkout" component={Checkoutpage_container}/>
        </Switch>
        <Route  component={Footer}/>
        </Router>

      </div>
    );


  else
    return <SplashScreen />


}

export default App;
