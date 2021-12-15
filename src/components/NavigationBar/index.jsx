import Logo from "../Logo";
import ModalEditarPerfil from "../ModalEditarPerfil";

const style = {
  display: "flex",

  width: "100%",

  justifyContent: "space-between",
  alignItems: "center",

  background: "var(--black)",

  padding: "5px 5vw",
};

function NavigationBar({ user }) {
  return (
    <div style={style}>
      <Logo />
      <ModalEditarPerfil user={user} />
    </div>
  );
}

export default NavigationBar;
