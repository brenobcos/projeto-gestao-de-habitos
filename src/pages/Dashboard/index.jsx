import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import ContainerGroups from "../../components/ContainerGroups";
import ContainerHabits from "../../components/ContainerHabits";
import ContainerDays from "../../components/ContainerDays";

const Dashboard = () => {
  return (
    <div>
      <NavigationBar />

      <ContainerDays />

      <ContainerGroups />

      <ContainerHabits />

      <Footer />
    </div>
  );
};

export default Dashboard;
