import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Regiter";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="Register">
        <Register />
      </Route>
      <Route exact path="SignIn">
        <SignIn />
      </Route>
      <Route exact path="Dashboard">
        <Dashboard />
      </Route>
      <Route exact path="Profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routers;
