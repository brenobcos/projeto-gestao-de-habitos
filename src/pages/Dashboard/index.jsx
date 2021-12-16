import Activity from "../../components/ModalActivity";
import Habits from "../../components/ModalHabits";

import jwt_decode from "jwt-decode";
import api from "../../services/api";

import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/footer";
import Goals from "../../components/ModalGoals";
import Groups from "../../components/Groups";
import ModalGroups from "../../components/ModalGrupos";
import ContainerGroups from "../../components/ContainerGrupos";
import AllGroups from "../../components/AllGroups";

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
  }, [id]);

  const user = { token, decoded, id, ...userLogged };

  return (
    <div>
      <AllGroups />
      <NavigationBar user={user} />
      <br></br>
      <div>
        <div>
          <div>Hoje</div>
          <div>Atividade1</div>
          <div>Atividade2</div>
          <div>Atividade3</div>
          <div>Atividade4</div>
          <div>Atividade5</div>
          <div>Atividade6</div>
        </div>
        <br></br>
        <div>
          <div>Amanha</div>
          <div>Atividade1</div>
          <div>Atividade2</div>
          <div>Atividade3</div>
          <div>Atividade4</div>
          <div>Atividade5</div>
          <div>Atividade6</div>
        </div>
      </div>
      <br></br>
      <div
        style={{
          textAlign: "center",
          background: "var(--black)",
          color: "var(--white)",
        }}
      >
        <div>
          <div>Metas</div>
          <div>Meta1</div>
          <div>Meta2</div>
          <div>Meta3</div>
          <div>Meta4</div>
          <div>Meta5</div>
          <div>Meta6</div>
        </div>
        <br></br>
        <div>
          <ContainerGroups />
        </div>
      </div>
      <br></br>
      <div>
        <div>Meus habitos</div>
        <div>Habito1</div>
        <div>Habito2</div>
        <div>Habito3</div>
        <div>Habito4</div>
        <div>Habito5</div>
        <div>Habito6</div>
      </div>
      <br></br>
      -------------------transformar em modais----------- Habitos
      <Habits />
      <br></br>
      Atividades
      <Activity />
      <br></br>
      Metas
      <Goals />
      <br></br>
      Grupos
      <ModalGroups />
      <br></br>
      <Footer />
    </div>
  );
};

export default Dashboard;
