import { Button } from "antd";
import { useHistory } from "react-router-dom";
import Logo from "../Logo";
import ModalEditarPerfil from "../ModalEditarPerfil";

const style = {
  display: "flex",

  width: "100%",

  justifyContent: "space-between",
  alignItems: "center",

  background: "var(--black)",

  padding: "10px 10vw",
};

function NavigationBar({ user }) {
  const history = useHistory();

  function Logout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div style={style}>
      <Logo />
      <ModalEditarPerfil user={user} />
      <Button onClick={Logout}>Sair</Button>
    </div>
  );
}

export default NavigationBar;
