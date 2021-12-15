import Logo from "../Logo";
import { Container, Detalhe, Titulo } from "./style";

function Footer() {
  return (
    <Container>
      <Logo large />
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
