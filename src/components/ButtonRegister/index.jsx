import { Container } from "./styles";

const ButtonRegister = ({ children, color = true, ...rest }) => {
  return (
    <Container color={color} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default ButtonRegister;
