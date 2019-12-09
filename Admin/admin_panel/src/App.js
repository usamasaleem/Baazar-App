import React,  { useState } from 'react';
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




function App() {

  const [isAuth,setIsAuth] = useState(false)

  setTimeout(() => {
    setIsAuth(true)
  }, 2500);

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

      <div className="App">
        <Router>
          <Switch>

            <Route exact path="/" render={(routeProps) => <HomePage {...routeProps} />}></Route>

            <PrivateRoute path='/home' component={SplashScreen} />

          </Switch>

        </Router>
      </div>
    );


  else
    return <SplashScreen />


}

export default App;
