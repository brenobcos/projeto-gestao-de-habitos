import Activity from "../../components/Activity";
import Habits from "../../components/Habits";
import ModalEditarPerfil from "../../components/ModalEditarPerfil";

const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div>

      <ModalEditarPerfil />

      <br></br>
      <Habits />
      <br></br>
      <Activity />
    </div>
  );
};

export default Dashboard;
