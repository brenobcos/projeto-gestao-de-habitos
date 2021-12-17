import { Container } from "./styles";

const ButtonRegister = ({ children, isColored, ...rest }) => {
  return (
    <Container isColored={isColored} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default ButtonRegister;
