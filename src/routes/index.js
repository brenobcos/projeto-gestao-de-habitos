import { Switch, Route } from "react-router-dom";
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
