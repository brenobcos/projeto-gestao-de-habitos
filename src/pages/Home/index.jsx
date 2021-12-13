import Logo from "../../components/Logo";
import { ButtonContainer, Container, Glide, GlideContainer } from "./styles";
import { useHistory } from "react-router";
import homeIMG from "../../assets/fotoHome.png";
import glide1 from "../../assets/glider1.png";
import glide2 from "../../assets/glider2.png";
import glide3 from "../../assets/glider3.png";
import glide4 from "../../assets/glider4.png";

import Footer from "../../components/footer";

import "antd/dist/antd.css";
import { Carousel } from "antd";
import ButtonMain from "../../components/ButtonMain";
import ButtonRegister from "../../components/ButtonRegister";

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
        <ButtonContainer>
          <ButtonRegister onClick={() => handleNav("/login")} color={false}>
            ENTRAR
          </ButtonRegister>
          <ButtonRegister onClick={() => handleNav("/signup")} color={true}>
            CADASTRAR
          </ButtonRegister>
        </ButtonContainer>
      </header>

      <div>
        <img src={homeIMG} alt="Running" />
      </div>

      <Carousel autoplay>
        <Glide>
          <h3 style={contentStyle}>DE UM "RUN" NOS OBJETIVOS</h3>
          <GlideContainer>
            <img src={glide1} alt="" />
            <h4>Crie atividades a serem cumpridas</h4>
            <p>
              Faça seu planejamento para correr ainda mais longe. Por meio de
              pequenas atividades diária, vá muito mais longe!
            </p>
          </GlideContainer>
        </Glide>
        <Glide>
          <h3 style={contentStyle}>NÃO FIQUE SENTADO</h3>
          <GlideContainer>
            <img src={glide2} alt="" />
            <h4>Desenvolva hábitos saudáveis</h4>
            <p>
              Comece o dia com uma boa atividade física, coma melhor, descanse,
              durma e seja mais saudável!
            </p>
          </GlideContainer>
        </Glide>
        <Glide>
          <h3 style={contentStyle}>CONVIDE OS AMIGOS</h3>
          <GlideContainer>
            <img src={glide3} alt="" />
            <h4>Participe de grupos de corrida</h4>
            <p>
              Para ajudar você a ir ainda mais longe, participe dos nossos
              grupos de corrida. Encontre pessoas com o seu perfil e participe!
            </p>
          </GlideContainer>
        </Glide>
        <Glide>
          <h3 style={contentStyle}>ACOMPANHE SEU PROGRESSO</h3>
          <GlideContainer>
            <img src={glide4} alt="" />
            <h4>Defina metas para o seu grupo</h4>
            <p>
              Além das atividades diárias, você também pode definir metas com o
              seu grupo de corrida. Nada como ganhar uma motivação extra, certo?
            </p>
          </GlideContainer>
        </Glide>
      </Carousel>
      <Footer />
    </Container>
  );
};

export default Home;
