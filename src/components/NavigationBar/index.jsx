import { useHistory } from "react-router-dom";
import { ButtonContainer } from "../../pages/Home/styles";
import ButtonRegister from "../ButtonRegister";
import Logo from "../Logo";
import ModalEditarPerfil from "../ModalEditProfile";
import { Container } from "./styles";

import { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";
import api from "../../services/api";

function NavigationBar() {
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

  const history = useHistory();

  function Logout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <Container>
      <Logo />

      <ButtonContainer>
        <ButtonRegister onClick={Logout} isColored={false}>
          SAIR
        </ButtonRegister>
        <ModalEditarPerfil user={user} />
      </ButtonContainer>
    </Container>
  );
}

export default NavigationBar;
