import React, { Children } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';




function App() {

  const isAuth = false;

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




  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" render={(routeProps) => <HomePage {...routeProps} />}></Route>

          <PrivateRoute path='/home' component={HomePage} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
