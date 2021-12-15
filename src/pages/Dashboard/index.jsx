import Activity from "../../components/Activity";
import Habits from "../../components/Habits";
import ModalEditarPerfil from "../../components/ModalEditarPerfil";

import jwt_decode from "jwt-decode";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const id = decoded.user_id;

  const user = { token, decoded, id };

  return (
    <div>
      <div>Dashboard</div>

      <ModalEditarPerfil user={user} />

      <br></br>
      <Habits />
      <br></br>
      <Activity />
    </div>
  );
};

export default Dashboard;
