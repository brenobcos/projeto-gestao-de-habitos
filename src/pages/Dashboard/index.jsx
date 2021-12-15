
import Activity from "../../components/Activity";
import Habits from "../../components/Habits";

const Dashboard = () => {
  //TOKEN
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

  //HTML
  return (
    <div>
      <div>Dashboard</div>

      <br></br>
      <Habits />
      <br></br>
      <Activity />

    </div>
  );
};

export default Dashboard;
