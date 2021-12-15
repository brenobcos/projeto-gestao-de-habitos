import Activity from "../../components/Activity";
import Habits from "../../components/Habits";

import jwt_decode from "jwt-decode";
import api from "../../services/api";

import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const id = decoded.user_id;

  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    api
      .get(`/users/${id}/`)
      .then((response) => {
        setUserLogged(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const user = { token, decoded, id, ...userLogged };

  return (
    <div>
      <NavigationBar user={user} />

      <br></br>
      <Habits />
      <br></br>
      <Activity />
    </div>
  );
};

export default Dashboard;
