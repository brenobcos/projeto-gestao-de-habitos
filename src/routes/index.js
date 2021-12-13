import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

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
