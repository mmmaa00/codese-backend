import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import Class from './screens/Class'
import Student from './screens/Student'
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route 
          exact path="/home" 
          component={HomeScreen} />
        <Route 
          exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          exact path="/class/:id"
          component={Class}
        ></Route>
        <Route
          exact path="/student/:id"
          component={Student}
        ></Route>
      </Switch>
    </Router>
  );
}
