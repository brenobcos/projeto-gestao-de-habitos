import Logo from "../../components/Logo";
import { ButtonContainer, Container } from "./styles";
import { useHistory } from "react-router";
import homeIMG from "../../assets/fotoHome.png";

import Footer from "../../components/footer";

import "antd/dist/antd.css";

import ButtonRegister from "../../components/ButtonRegister";

import SimpleSlider from "../../components/Slider";

const contentStyle = {
  height: "90px",
  color: "#fff",
  lineHeight: "90px",
  textAlign: "center",
  background: "#121212",
};

const Home = () => {
  const history = useHistory();

  const handleNav = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <header>
        <Logo />
        <ButtonContainer style={{ display: "flex" }}>
          <ButtonRegister onClick={() => handleNav("/login")} color={false}>
            ENTRAR
          </ButtonRegister>
          <ButtonRegister onClick={() => handleNav("/signup")} color={true}>
            CADASTRAR
          </ButtonRegister>
        </ButtonContainer>
      </header>

      <div style={{ background: "var(--black)", paddingBottom: 40 }}>
        <img src={homeIMG} alt="Running" />
      </div>
      <div
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: 24,
          fontWeight: "900",
          textAlign: "center",

          margin: "30px 10vw",
        }}
      >
        COMECE A CORRER SOZINHO OU EM GRUPOS
      </div>

      <SimpleSlider />
      <Footer />
    </Container>
  );
};

export default Home;
