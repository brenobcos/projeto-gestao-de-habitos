import Activity from "../../components/ModalActivity";
import Habits from "../../components/ModalHabits";

import jwt_decode from "jwt-decode";
import api from "../../services/api";

import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/footer";
import Goals from "../../components/ModalGoals";
import Groups from "../../components/Groups";

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
      <Groups />
      <br></br>
      Habitos
      <Habits />
      <br></br>
      Atividades
      <Activity />
      <br></br>
      Metas
      <Goals />
      <br></br>
      <Footer />
    </div>
  );
};

export default Dashboard;
