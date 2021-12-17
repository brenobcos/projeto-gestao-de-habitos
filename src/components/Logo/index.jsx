import { Title, SubTitle } from "./styles";

const Logo = ({ white, large }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
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
