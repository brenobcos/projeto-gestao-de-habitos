import styled from "styled-components";

// passar props white para quando o fundo da página for branco
// e passar a props large para o logo no footer

export const Title = styled.div`
  width: ${(props) => (props.large ? "180px" : "80px")};
  height: ${(props) => (props.large ? "65px" : "30px")};

  line-height: 0.9;

  background-color: ${(props) =>
    props.white ? "var(--black)" : "var(--white)"};
  color: ${(props) => (props.white ? "var(--white)" : "var(--black)")};

  font-size: ${(props) => (props.large ? "75px" : "34px")};
  font-family: "Roboto";
  font-weight: 600;
  letter-spacing: ${(props) => (props.large ? "14px" : "6px")};
`;

export const SubTitle = styled.div`
  height: 16px;
  font-size: ${(props) => (props.large ? "30px" : "14px")};
  font-weight: 900;
  letter-spacing: ${(props) => (props.large ? "3px" : "1px")};

  color: ${(props) => (props.white ? "var(--black)" : "var(--white)")};
`;
