import { Title, SubTitle } from "./styles";

const Logo = ({ white, large }) => {
  return (
    <div>
      <Title white={white} large={large}>
        RUN
      </Title>
      <SubTitle white={white} large={large}>
        LIKE A DEV
      </SubTitle>
    </div>
  );
};

export default Logo;
