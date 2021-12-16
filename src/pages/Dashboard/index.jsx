import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/footer";
import ContainerGroups from "../../components/ContainerGrupos";
import ContainerHabitos from "../../components/ContainerHabitos";
import ContainerDias from "../../components/ContainerDias";

const Dashboard = () => {
  return (
    <div>
      <NavigationBar />

      <ContainerDias />

      <ContainerGroups />

      <ContainerHabitos />

      <Footer />
    </div>
  );
};

export default Dashboard;
