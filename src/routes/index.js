<<<<<<< HEAD
import { Switch, Route } from "react-router-dom";
=======
<<<<<<< HEAD
import { Switch, Route } from "react-router";
>>>>>>> development

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
=======
import { Switch, Route } from "react-router-dom";
>>>>>>> e876b98cbc0a9396f3e8aec85e4b1505ceacb1ef
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
<<<<<<< HEAD

=======
>>>>>>> e876b98cbc0a9396f3e8aec85e4b1505ceacb1ef
      <Route exact path="/signup/">
        <SignUp />
      </Route>
      <Route exact path="/login/">
        <Login />
      </Route>
      <Route exact path="/dashboard/">
        <Dashboard />
      </Route>
      <Route exact path="/profile/">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routers;
