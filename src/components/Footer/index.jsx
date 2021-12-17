import { useState } from "react";
import Logo from "../Logo";

import { Container, Detalhe, Titulo } from "./style";

function Footer() {
  const [desktop, setDesktop] = useState(false);

  window.addEventListener(
    "resize",
    function (event) {
      if (event.currentTarget.innerWidth > 700) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    },
    true
  );

  return (
    <Container>
      {desktop ? <Logo large /> : <Logo />}
      <div>
        <Titulo>Equipe de desenvolvedores</Titulo>
        <Detalhe>
          <p>Arthur Ticianeli como Product Owner</p>
          <p>Marcos Vinicius como Quality Assurence </p>
          <p>Mateus Guimarães como Quality Assurence</p>
          <p>Breno Carlos como Tech Leader</p>
          <p>Lucas Reiser como Scrum Master</p>
        </Detalhe>
      </div>
    </Container>
  );
}

export default Footer;
