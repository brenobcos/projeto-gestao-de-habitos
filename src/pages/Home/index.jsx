import Logo from "../../components/Logo";
import { ButtonContainer, Container } from "./styles";
import { useHistory } from "react-router";
import homeIMG from "../../assets/fotoHome.png";

import Footer from "../../components/Footer";

import "antd/dist/antd.css";

import ButtonRegister from "../../components/ButtonRegister";

import SimpleSlider from "../../components/Slider";
import CardsDesktop from "../../components/CardsDesktop";
import { useState } from "react";

const Home = () => {
  const history = useHistory();

  const handleNav = (path) => {
    return history.push(path);
  };

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
      <header>
        <Logo />
        <ButtonContainer>
          <ButtonRegister onClick={() => handleNav("/login")} isColored={false}>
            ENTRAR
          </ButtonRegister>
          <ButtonRegister onClick={() => handleNav("/signup")} isColored={true}>
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

      {desktop ? <CardsDesktop /> : <SimpleSlider />}
      <Footer />
    </Container>
  );
};

export default Home;
